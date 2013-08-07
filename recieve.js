var mongoose = require('mongoose');
mongoose.connect('mongodb://property:pr0p3rty@dharma.mongohq.com:10016/property');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log(silence.name) // 'Silence'
	
});
