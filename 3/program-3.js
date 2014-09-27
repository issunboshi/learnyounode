var fs = require('fs');

var fileToRead = process.argv[3];

var buf = fs.readFileSync(fileToRead);

var str = buf.toString();

var lines = str.split('\n');

var lines = lines.length - 1;

console.log(lines);