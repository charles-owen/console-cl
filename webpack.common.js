const path = require('path');

module.exports = {
	entry: {
		Console: {
			import: path.resolve(__dirname, 'index.js'),
			dependOn: ['Users', 'Site']
		}
	}
}
