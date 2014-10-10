var httpGet = function(resources, callback) {
	var http = require('http');
	var	message = [];
	var messageCount = 0;
	for(var i = 0; i < resources.length; i++) {
		var processGet = function(resource, index) {
			http.get(resource, function (response) {
				response.setEncoding('utf8');

				response.on('data', function(data) {
					message[index] += data;
				});

				response.on('error', function(err) {
					return console.log(err);
				});

				response.on('end', function() {
					messageCount++;
					if(messageCount === resources.length) {
						return callback(message);
					}
				})
			});
		}
		processGet(resources[i], i);
	}
}

module.exports = httpGet;