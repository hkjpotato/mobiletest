//stop a package from running npm release if SNAPSHOT is part of version.
var fs = require('fs');
var content = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
if (content.version.endsWith('SNAPSHOT')) {
  console.error('cannot release a SNAPSHOT');
  process.exit(1);
}
