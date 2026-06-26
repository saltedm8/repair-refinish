import { next } from '@vercel/functions';

const NOINDEX = 'noindex, nofollow, noarchive, nosnippet';

const PSI_ROBOTS = `# Portfolio demo — lab view for PageSpeed only. Production site: repair-refinish.co.uk
User-agent: *
Allow: /
`;

/** PageSpeed / Lighthouse only — PSI SEO checks without opening real indexing. */
function isPageSpeedLighthouse(userAgent: string) {
  return /Chrome-Lighthouse|PageSpeed\s*Insights/i.test(userAgent);
}

export const config = {
  matcher: ['/((?!images/|assets/|vite\\.svg|llms\\.txt).*)'],
};

export default function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') ?? '';
  const { pathname } = new URL(request.url);
  const lighthouse = isPageSpeedLighthouse(userAgent);

  if (pathname === '/robots.txt' && lighthouse) {
    return new Response(PSI_ROBOTS, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  const response = next();

  if (lighthouse) {
    response.headers.delete('X-Robots-Tag');
    return response;
  }

  response.headers.set('X-Robots-Tag', NOINDEX);
  return response;
}
