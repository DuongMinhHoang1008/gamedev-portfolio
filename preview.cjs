const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const prefix = '/gamedev-portfolio/';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.svg':'image/svg+xml','.ico':'image/x-icon','.pdf':'application/pdf','.webp':'image/webp'};
const server = http.createServer((req,res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { res.writeHead(400).end(); return; }
  if (pathname === '/' || pathname === '/gamedev-portfolio') { res.writeHead(302,{Location:prefix}).end(); return; }
  if (!pathname.startsWith(prefix)) { res.writeHead(404).end(); return; }
  const relative = pathname.slice(prefix.length) || 'index.html';
  const file = path.resolve(root, relative);
  if (!file.startsWith(root + path.sep) || !/^(index\.html|favicon\.ico|(?:css|js|img|d)\/[^\\]+)$/.test(relative) || relative.split('/').some(part => part.startsWith('.'))) { res.writeHead(404).end(); return; }
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) { res.writeHead(404).end(); return; }
    res.writeHead(200, {'Content-Type':mime[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control':'no-cache'});
    fs.createReadStream(file).on('error', () => res.destroy()).pipe(res);
  });
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(8080, '127.0.0.1', () => {
  console.log('Preview: http://127.0.0.1:8080/gamedev-portfolio/');
  console.log('Press Ctrl+C to stop.');
});
