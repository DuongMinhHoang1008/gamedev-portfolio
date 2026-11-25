const assert = require('node:assert/strict');
const path = require('node:path');
const { spawn } = require('node:child_process');
const { once } = require('node:events');

const root = path.resolve(__dirname, '..');
const child = spawn(process.execPath, ['preview.cjs'], {
  cwd: root,
  env: { ...process.env, PORT: '0' },
  stdio: ['ignore', 'pipe', 'pipe'],
  windowsHide: true,
});

child.stderr.on('data', data => process.stderr.write(data));

const ready = new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(Error('Preview startup timed out')), 10000);
  child.stdout.once('data', data => {
    clearTimeout(timer);
    resolve(data.toString().match(/http:\/\/[^\s]+/)[0]);
  });
  child.once('error', error => {
    clearTimeout(timer);
    reject(error);
  });
  child.once('exit', code => {
    clearTimeout(timer);
    reject(Error('Preview exited: ' + code));
  });
});

(async () => {
  try {
    const base = await ready;
    const [originalResponse, gameDesignerResponse] = await Promise.all([
      fetch(base),
      fetch(base + 'gamedesigner/'),
    ]);
    assert.equal(originalResponse.status, 200, 'original entry point');
    assert.equal(gameDesignerResponse.status, 200, 'gamedesigner entry point');

    const [original, gameDesigner] = await Promise.all([
      originalResponse.text(),
      gameDesignerResponse.text(),
    ]);
    assert(gameDesigner.includes('<title>Dương Minh Hoàng - Game Designer Intern</title>'));
    assert(gameDesigner.includes('<base href="/gamedev-portfolio/">'));
    assert(!original.includes('<base href="/gamedev-portfolio/">'));
    assert(gameDesigner.includes('/gamedev-portfolio/js/app.a8983b08.js'));
    assert(gameDesigner.includes('https://DuongMinhHoang1008.github.io/gamedev-portfolio/gamedesigner/'));
    assert(gameDesigner.includes('window.__gameDesignerPortfolio = true'));
    assert(gameDesigner.includes('Level Design, Game Balance, Playtesting'));
    assert(!original.includes('window.__gameDesignerPortfolio = true'));
    console.log('PASS: the game designer entry point enables its dedicated CV content.');
  } finally {
    if (child.pid && child.exitCode === null && child.signalCode === null) {
      const stopped = once(child, 'exit');
      child.kill();
      await stopped;
    }
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
