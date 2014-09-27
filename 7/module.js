var httpGet = function(resource, callback) {
	var http = require('http');

	buf = http.get(resource, function (response) {
		response.setEncoding('utf8');
		response.on("data", function(data) {
		 	callback(data);
		})
	});	
}

module.exports = httpGet;