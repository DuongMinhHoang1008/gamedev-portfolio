const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const { once } = require('node:events');
const sizeOf = require('image-size');
const root = path.resolve(__dirname, '..');
const references = new Set(['index.html', 'favicon.ico']);
for (const file of ['index.html', ...fs.readdirSync(path.join(root, 'js')).map(name => 'js/' + name)]) {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  for (const match of text.matchAll(/["'](?:\/gamedev-portfolio\/)?((?:img|d|css|js)\/[^"'?#]+)(?:[?#][^"']*)?["']/g)) {
    const asset = decodeURIComponent(match[1]).replace(/\\+$/, "");
    if (/\.(js|css|png|jpe?g|gif|svg|ico|pdf|webp)$/i.test(asset)) references.add(asset);
  }
}
const child = spawn(process.execPath, ['preview.cjs'], { cwd: root, env: { ...process.env, PORT: '0' }, stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true });
child.stderr.on('data', data => process.stderr.write(data));
const ready = new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(Error('Preview startup timed out')), 10000);
  child.stdout.once('data', data => { clearTimeout(timer); resolve(data.toString().match(/http:\/\/[^\s]+/)[0]); });
  child.once('error', error => { clearTimeout(timer); reject(error); });
  child.once('exit', code => { clearTimeout(timer); reject(Error('Preview exited: ' + code)); });
});
(async () => {
  try {
    const base = await ready;
    for (const file of references) {
      const local = fs.readFileSync(path.join(root, file));
      assert.deepEqual(fs.readFileSync(path.join(root, 'dist', file)), local, 'Packaged asset differs: ' + file);
      const response = await fetch(base + file.split('/').map(encodeURIComponent).join('/'));
      assert.equal(response.status, 200, file);
      assert.deepEqual(Buffer.from(await response.arrayBuffer()), local, 'HTTP content differs: ' + file);
      if (file.endsWith('.pdf')) {
        assert(response.headers.get('content-type').includes('application/pdf'));
        assert.equal(local.subarray(0, 5).toString(), '%PDF-');
      }
      if (/\.(png|jpe?g|gif)$/i.test(file)) {
        const dimensions = sizeOf(local);
        assert(dimensions.width > 0 && dimensions.height > 0, file);
      }
    }
    assert(references.has('d/UNITY GAME DEVELOPER.pdf'));
    assert(references.has('d/22021218_Duong_Minh_Hoang.pdf'));
    console.log(`PASS: ${references.size} referenced local files served over HTTP and match dist; PDF MIME/content and image dimensions verified.`);
  } finally {
    if (child.pid && child.exitCode === null && child.signalCode === null) {
      const stopped = once(child, 'exit');
      child.kill();
      await stopped;
    }
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
