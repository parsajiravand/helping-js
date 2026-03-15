'use strict';

const fs = require('fs');
const path = require('path');

const coreDir = path.join(__dirname, '..', 'core');
if (fs.existsSync(coreDir)) {
  fs.rmSync(coreDir, { recursive: true, force: true });
}
