'use strict';

const fs = require('fs');
const path = require('path');

const declarationsDir = path.join(__dirname, '..', 'declarations');
const coreDir = path.join(__dirname, '..', 'core');

// Copy top-level .d.ts
const files = fs.readdirSync(declarationsDir).filter((f) => f.endsWith('.d.ts'));
for (const file of files) {
  const src = path.join(declarationsDir, file);
  const dest = path.join(coreDir, file);
  fs.copyFileSync(src, dest);
}

// Copy declarations subfolders (e.g. preset/)
const subdirs = fs.readdirSync(declarationsDir, { withFileTypes: true }).filter((d) => d.isDirectory());
for (const dir of subdirs) {
  const srcSub = path.join(declarationsDir, dir.name);
  const destSub = path.join(coreDir, dir.name);
  if (!fs.existsSync(destSub)) fs.mkdirSync(destSub, { recursive: true });
  const subFiles = fs.readdirSync(srcSub).filter((f) => f.endsWith('.d.ts'));
  for (const file of subFiles) {
    fs.copyFileSync(path.join(srcSub, file), path.join(destSub, file));
  }
}
