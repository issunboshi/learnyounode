var lsFilter = function(dirToRead, filter, callback) {
	var fs = require('fs');
	var path = require('path');
	var myCallback = callback;

	buf = fs.readdir(dirToRead, function (err, list) {
		if(err) {
			return myCallback(err);
		}
		else {
			var	filteredList = [];
			for(var i = 0; i < list.length; i++) {
				if(path.extname(list[i]) === '.'+filter) {
					filteredList.push(list[i]);
				}
			}
			return myCallback(null, filteredList);
		}
	});	
}

module.exports = lsFilter;