import type { IncomingMessage, ServerResponse } from 'http';

export default async (req: IncomingMessage & { query?: Record<string, any>; body?: any }, res: ServerResponse) => {
  try {
    // Import the server handler
    const serverModule = await import('../dist/server/index.js');
    const handler = serverModule.default;

    // Create a Web Standard Request from the Node request
    const protocol = (req.headers['x-forwarded-proto'] as string) || 'https';
    const host = req.headers.host || 'localhost';
    const url = new URL(req.url || '/', `${protocol}://${host}`);
    
    const init: RequestInit = {
      method: req.method || 'GET',
      headers: Object.entries(req.headers).reduce((acc, [key, value]) => {
        if (typeof value === 'string') {
          acc[key] = value;
        } else if (Array.isArray(value)) {
          acc[key] = value.join(', ');
        }
        return acc;
      }, {} as Record<string, string>),
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      if (req.body) {
        init.body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
      }
    }

    const request = new Request(url, init);

    // Call the server handler
    const response = await handler.fetch(request);

    // Set response status and headers
    res.statusCode = response.status;
    
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send the response body
    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } catch (error) {
    console.error('SSR Error:', error);
    res.statusCode = 500;
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Internal Server Error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }));
  }
};
