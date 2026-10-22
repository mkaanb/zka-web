import { routing } from "@/i18n/routing";

// Static export has no middleware, so the bare domain forwards to the default locale.
// vercel.json also issues a server-side redirect for "/".
export default function RootRedirect() {
  const to = `/${routing.defaultLocale}/`;
  return (
    <html lang={routing.defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${to}`} />
        <link rel="canonical" href={to} />
        <meta name="robots" content="noindex" />
        <title>ZKA Investment</title>
      </head>
      <body>
        <a href={to}>ZKA Investment</a>
      </body>
    </html>
  );
}
