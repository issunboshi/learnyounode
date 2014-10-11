var httpGet = function(ports) {
	var net = require('net');
	var strftime = require('strftime');

	for(var i = 0; i < ports.length; i++) {
	
		var fullDate = strftime('%F %H:%M');

		var server = net.createServer(function (socket) {
			socket.end(fullDate+'\n');
		});
		server.listen(ports[i]);
	}
}

module.exports = httpGet;