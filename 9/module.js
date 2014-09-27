var httpGet = function(resources, callback) {
	var http = require('http');
	var	message = [];
	var returnedMessages = [];
	var messageCount = 0;
	for(var i = 0; i < resources.length; i++) {
		var processGet = function(resource) {
			http.get(resource, function (response) {
				response.setEncoding('utf8');

				response.on('data', function(data) {
					message[i] += data;
				});

				response.on('error', function(err) {
					return console.log(err);
				});

				response.on('end', function() {
					returnedMessages.push(message[i]);
					messageCount++ ;
					if(messageCount === resources.length){
						return callback(returnedMessages);		
					}
				})
			});
		}
		processGet(resources[i]);
	}
	
}

module.exports = httpGet;