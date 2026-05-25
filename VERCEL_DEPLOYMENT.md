# Vercel Deployment Guide

This project is configured for deployment on Vercel.

## Prerequisites
- Node.js 16.x or later
- Vercel account (https://vercel.com)
- Vercel CLI installed: `npm i -g vercel`

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard
1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to https://vercel.com/new
3. Select your repository
4. Vercel will auto-detect the framework settings
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy from project directory
vercel
```

## Environment Variables
Create environment variables in Vercel dashboard:
1. Project Settings → Environment Variables
2. Add any required environment variables for your application

See `.env.example` for available variables.

## Build Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist/client`
- **Install Command**: `npm install`

## SSR Setup
Server-side rendering is handled via the API route at `api/ssr.ts`.
Static assets are served from `dist/client`.

## Troubleshooting

### Build Fails
- Check that all dependencies are properly listed in `package.json`
- Verify environment variables are set in Vercel dashboard
- Check build logs in Vercel dashboard for detailed error messages

### Runtime Errors
- Check Vercel function logs in the dashboard
- Ensure all serverless functions have proper Node.js dependencies
- Verify memory and timeout settings in `vercel.json`

## Custom Domain
After successful deployment:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS settings as per Vercel instructions

## References
- [Vercel Documentation](https://vercel.com/docs)
- [TanStack Start Documentation](https://tanstack.com/start/latest/docs/guide/overview)
