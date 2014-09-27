var httpGet = require('./module');

var resource = process.argv[2];

var consolePrint = function(message) {
	console.log(message);
}

httpGet(resource, consolePrint);