var fs = require('fs');
var path = require('path');

var dirToRead = process.argv[2];
var filter = process.argv[3];

buf = fs.readdir(dirToRead, function callback (err, list) {
	if(err) {
		return console.error(err);
	}
	else {
		for(var i = 0; i < list.length; i++) {
			if(path.extname(list[i]) === '.'+filter) {
				console.log(list[i]);
			}
		}
	}
});