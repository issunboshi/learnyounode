var httpGet = function(port, resource) {
	var http = require('http');
	var fs = require('fs');

	var server = http.createServer(function callback (req, res) {
		var src = fs.createReadStream(resource);
		src.pipe(res);
	});
	server.listen(port);
}

module.exports = httpGet;