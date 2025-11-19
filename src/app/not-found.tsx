/* Minimal not-found route to ensure Edge runtime is set for platforms like Cloudflare Pages */

export const runtime = 'edge';

export default function NotFound() {
  return (
    <html>
      <body>
        <div style={{padding: 24, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
          <h1 style={{fontSize: 20, marginBottom: 8}}>页面未找到</h1>
          <p style={{color: '#6b7280'}}>你要访问的页面不存在或已被移除。</p>
        </div>
      </body>
    </html>
  );
}
