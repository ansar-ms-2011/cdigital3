import { VercelRequest, VercelResponse } from '@vercel/node';

type ServerEntry = {
  fetch: (request: Request, env?: unknown, ctx?: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    try {
      serverEntryPromise = import('../dist/server/index.js').then(
        (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
      );
    } catch (error) {
      console.error('Failed to load server entry:', error);
      throw error;
    }
  }
  return serverEntryPromise;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const handler = await getServerEntry();
    
    // Convert Vercel request to Web Standard Request
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
    
    const webRequest = new Request(url, {
      method: req.method,
      headers: Object.entries(req.headers).reduce((acc, [key, value]) => {
        if (Array.isArray(value)) {
          acc[key] = value.join(', ');
        } else {
          acc[key] = value as string;
        }
        return acc;
      }, {} as Record<string, string>),
      body: req.method !== 'GET' && req.method !== 'HEAD' 
        ? JSON.stringify(req.body)
        : undefined,
    });

    // Call the server handler
    const response = await handler.fetch(webRequest, undefined, undefined);
    
    // Set response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Set status code
    res.status(response.status);
    
    // Send response body
    const buffer = Buffer.from(await response.arrayBuffer());
    res.send(buffer);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
