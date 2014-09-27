var httpGet = require('./module');

var resource = process.argv[2];

var consolePrint = function(message, length) {
	console.log(length);
	console.log(message);
}

httpGet(resource, consolePrint);