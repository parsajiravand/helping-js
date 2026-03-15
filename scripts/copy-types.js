'use strict';

const fs = require('fs');
const path = require('path');

const declarationsDir = path.join(__dirname, '..', 'declarations');
const coreDir = path.join(__dirname, '..', 'core');

const files = fs.readdirSync(declarationsDir).filter((f) => f.endsWith('.d.ts'));
for (const file of files) {
  const src = path.join(declarationsDir, file);
  const dest = path.join(coreDir, file);
  fs.copyFileSync(src, dest);
}
