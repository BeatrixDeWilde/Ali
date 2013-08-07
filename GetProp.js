var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
	  var propertySchema = new mongoose.Schema({
	  address: { type: String }
	, desc: String
	, price: Number
	});

	// Compile a 'Property' model using the propertySchema as the structure.
	// Mongoose also creates a MongoDB collection called 'Property' for these documents.
	var Property = mongoose.model('Property', propertySchema);
	/*var thor = new Property({
	  address: '6 Cherry Tree Lane'
	, desc: 'A lovely property'
	, price: '600000'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
	});

	thor.save(function(err, thor) {
	  if (err) return console.error(err);
	  console.dir(thor);
	}); */


	// Find all movies.
	Property.find(function(err, property) {
	  if (err) return console.error(err);
	  console.dir(property);
	});

	
});

mongoose.connect('mongodb://property:pr0p3rty@dharma.mongohq.com:10016/property');