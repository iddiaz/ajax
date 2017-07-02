(function(){

	var Latitude = 	40.311991;
	var Longitude = -3.721977;

	function mostrarData(data){
		var url = 'img/'+ data.weather[0].icon + '.png';
		var temp = Math.round(data.main.temp);

		$('.imgClima').attr('src', url);
		$('.lblTemp').html( temp + '&#176');
		$('.divLoading').fadeOut(200, function(){
			$('.divInfo').fadeIn(200);
		});

	}


	$.ajax({
		type: 'GET',
		url : 'http://api.openweathermap.org/data/2.5/weather?lat='+ Latitude +'&lon=' + Longitude + "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
		dataType: 'jsonp'
	})
	.done(function( data ){
		console.log(data);
		mostrarData(data);

	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});


})();