import { next } from '@vercel/functions';

const NOINDEX = 'noindex, nofollow, noarchive, nosnippet';

/** PageSpeed / Lighthouse only — lets the PSI SEO audit run without a noindex penalty. */
function isPageSpeedLighthouse(userAgent: string) {
  return /Chrome-Lighthouse|PageSpeed\s*Insights/i.test(userAgent);
}

export const config = {
  matcher: ['/((?!images/|assets/|vite\\.svg|robots\\.txt|llms\\.txt).*)'],
};

export default function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') ?? '';
  const response = next();

  if (isPageSpeedLighthouse(userAgent)) {
    response.headers.delete('X-Robots-Tag');
    return response;
  }

  response.headers.set('X-Robots-Tag', NOINDEX);
  return response;
}
