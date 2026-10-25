const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const target = path.join(root, 'www');
fs.rmSync(target, { recursive: true, force: true });
fs.mkdirSync(target, { recursive: true });
for (const name of ['index.html', 'assets']) fs.cpSync(path.join(root, name), path.join(target, name), { recursive: true });
console.log('Copied website into native app web assets.');
