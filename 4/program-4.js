var fs = require('fs');

var fileToRead = process.argv[2];

buf = fs.readFile(fileToRead, 'utf8', function callback (err, data) {
	if(err) {
		return console.error(err);
	}
	else {
		lines = data.split('\n').length - 1;
		console.log(lines);
	}
});