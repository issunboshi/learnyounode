var httpGet = require('./module');

var port = process.argv[2];
var resource = process.argv[3];

httpGet(port, resource);