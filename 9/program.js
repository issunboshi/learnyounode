var httpGet = require('./module');

var resources = [];
resources.push(process.argv[2]);
resources.push(process.argv[3]);
resources.push(process.argv[4]);

var consolePrint = function(messages) {
	for(i = 0; i < messages.length; i++){
		console.log(messages[i]);
	}
}

httpGet(resources, consolePrint);