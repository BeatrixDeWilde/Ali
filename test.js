	var geocoder = new google.maps.Geocoder();
	var address = "10 Netherby Road, Edinburgh";
	var longitude;
	var latitude;


	//function steve(){
		geocoder.geocode( { 'address': address}, function(results, status) {

			if (status == google.maps.GeocoderStatus.OK) {
				latitude = results[0].geometry.location.lat();
				longitude = results[0].geometry.location.lng();
				alert(latitude);
				alert(longitude);
			} 
		});