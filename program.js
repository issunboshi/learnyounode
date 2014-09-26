var lsFilter = require('./module');

var dirToRead = process.argv[2];
var filter = process.argv[3];

var consolePrint = function(err, data) {
	if(err) {
		console.error(err);
	}
	else {
		for(var i = 0; i < data.length; i++) {
			console.log(data[i]);
		}
	}
}

lsFilter(dirToRead, filter, consolePrint);