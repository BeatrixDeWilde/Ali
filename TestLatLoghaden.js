var request = require('request'); // lets you connect to web pages

var cheerio = require('cheerio'); // cheerio mimics the DOM and jQuery/CSS style selectors




var url = 'http://www.haddenrankin.com/sell-with-us/properties-for-sale.aspx';


request(url, function(err, resp, body) {

	if (err)

		throw err;

	$ = cheerio.load(body);

	$('.property_small_image a:contains("full details")').each(function() {

		console.log ($(this).attr('href'));

		request ('http://www.haddenrankin.com/' + $(this).attr('href'), function(err,resp,body) {
			//looks for meta tag with property og:url and takes the url that is assigned to content and then prints it out 
			$ = cheerio.load(body);
			//scrapeid = $('meta[name="description"]').attr('content');
			//console.log ('ID:' + $('a[class="schedule_download"]').attr('href'));

			console.log ('Address:' + $('#property_detail h3').text());
			var address = $('#property_detail h3').text();
			/*console.log ('rooms:' + $('#property_detail h4').text());
			console.log ('Description:' + $('.main_decription').text());
			console.log ('Schedule:' + $('a[class="schedule_download"]').attr('href'));
			//console.log ('Schedule:' + $('#schedule_download li a:contains("href")').text());*/
			var geocoder;
			var map;

			display();

			function initialize() {
			    geocoder = new google.maps.Geocoder();
			    var latlng = new google.maps.LatLng(-34.397, 150.644);
			    var myOptions = {
			      zoom: 8,
			      center: latlng,
			      mapTypeId: google.maps.MapTypeId.ROADMAP
			    }
			    //map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
			}

			  function codeAddress() {
			    //var address = document.getElementById("address").value;
			    var lati;
			    var log;

			    // next line creates asynchronous request
			    geocoder.geocode( { 'address': address}, function(results, status) {
			      // and this is function which processes response
			      if (status == google.maps.GeocoderStatus.OK) {
			        lati=results[0].geometry.location.lat();
			        log=results[0].geometry.location.lng();


			        console.log('lati: ' + lati + 'log' + log); // the place where loc contains geocoded coordinates

			      } else {
			        alert("Geocode was not successful for the following reason: " + status);
			      }
			    });

			    // pretty meaningless, because it always will be []
			    // this line is executed right after creating AJAX request, but not after its response comes
			    return loc;
			  }

			  function display(){
			     codeAddress();
			  }

		});
	});
});
/*
request(url, function(err, resp, body) {

	if (err)

		throw err;

	$ = cheerio.load(body);


	$('.pager a:contains()').each(function() {
		url = ('http://www.haddenrankin.com/sell-with-us/properties-for-sale.aspx' + $(this).attr('href'));
		console.log (url);

		request(url, function(err, resp, body) {

		if (err)

			throw err;

			$ = cheerio.load(body);

			$('.property_small_image a:contains("full details")').each(function() {

				console.log ($(this).attr('href'));

				request ('http://www.haddenrankin.com/' + $(this).attr('href'), function(err,resp,body) {
					//looks for meta tag with property og:url and takes the url that is assigned to content and then prints it out 
					$ = cheerio.load(body);
					//scrapeid = $('meta[name="description"]').attr('content');
					//console.log ('ID:' + $('a[class="schedule_download"]').attr('href'));

					console.log ('Address:' + $('#property_detail h3').text());
					console.log ('rooms:' + $('#property_detail h4').text());
					console.log ('Description:' + $('.main_decription').text());
					console.log ('Schedule:' + $('a[class="schedule_download"]').attr('href'));
					//console.log ('Schedule:' + $('#schedule_download li a:contains("href")').text());

				});
			});
		});
				
	});
}); */