var httpGet = function(resources, callback) {
	var http = require('http');
	console.log('hello');
	console.log(resources.forEach(processGet));

	var processGet = function() {
		http.get(resource, function (response) {
			var	message = '';
			var	messageLength = 0;
			response.setEncoding('utf8');

			response.on('data', function(data) {
				message += data;
			});

			response.on('error', function(err) {
				return console.log(err);
			});

			response.on('end', function() {
				messageLength = message.length;
			 	return callback(message, messageLength);
			})
		});
	}
}

module.exports = httpGet;