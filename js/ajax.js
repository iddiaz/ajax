(function(){


	$.ajax({
		type: 'GET',
		url : '',
		dataType: 'json'
	})
	.done(function( data ){
		
		



	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});


})();