// This checkout contains the shipped Vue bundles, not the original Vue project.
// Package the maintained static site without claiming to recompile missing source.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = __dirname;
const output = path.join(root, 'dist');
for (const name of fs.readdirSync(path.join(root, 'js'))) {
  if (name.endsWith('.js')) new vm.Script(fs.readFileSync(path.join(root, 'js', name), 'utf8'), { filename: name });
}
fs.mkdirSync(output, { recursive: true });
for (const name of ['index.html', 'favicon.ico', '.nojekyll', 'js', 'css', 'img', 'd']) {
  fs.cpSync(path.join(root, name), path.join(output, name), { recursive: true });
}
// Remove only the confirmed unused sample PDFs from older packaging runs.
for (const name of ['cv-scheefer-fr.pdf', 'resume-scheefer-en.pdf', 'some-file.pdf']) {
  fs.rmSync(path.join(output, 'd', name), { force: true });
}
console.log('PASS: JavaScript syntax checked; static site packaged in dist/.');
