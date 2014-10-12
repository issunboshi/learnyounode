var httpGet = function(port) {
	var http = require('http')
	var fs = require('fs');
	var map = require('through2-map');

	var server = http.createServer(function callback (req, res) {
		var upperCaseify = map(function(chunk) {
			return chunk.toString().toUpperCase()
			
		})

		if(req.method !== 'POST')
			return 'Incorrect request method';
		req.pipe(upperCaseify)
		.pipe(res);
	});
	server.listen(port);
}

module.exports = httpGet;