/*var mongoose = require('mongoose');
mongoose.connect('mongodb://property:pr0p3rty@dharma.mongohq.com:10016/property');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
	var kittySchema = mongoose.Schema({
    	name: String
	})
	var Kitten = mongoose.model('Kitten', kittySchema)
	var silence = new Kitten({ name: 'Silence' })
	console.log(silence.name) // 'Silence'
	
});*/

/*var mongoose = require('mongoose');

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

	var house = new Property({
		  address: '6 Cherry Tree Place',
		 desc: 'A lovely House',
		 price: '600 000'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
	});

	house.save(function(err, house) {
	  if (err) return console.error(err);
	  console.dir(house);
	  console.log(house);
	});
});

mongoose.connect('mongodb://property:pr0p3rty@dharma.mongohq.com:10016/property'); */

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

		// Find a single movie by name.
	Property.findOne({ address: "6 Cherry Tree Lane" }, function(err, thor) {
	  if (err) return console.error(err);
	  console.dir(thor);
	});

	// Find all movies.
	Property.find(function(err, property) {
	  if (err) return console.error(err);
	  console.dir(property);
	});

	// Find all movies that have a credit cookie.
	Property.find({ price: "600000"}, function(err, property) {
	  if (err) return console.error(err);
	  console.dir(property);
	});
});

mongoose.connect('mongodb://property:pr0p3rty@dharma.mongohq.com:10016/property');

	