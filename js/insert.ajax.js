(function(){
	'use strict';


	$('#frmData').on('submit', function(e){
		e.preventDefault();

		var formulario = $(this);
		var dataSerializada = formulario.serialize();

		console.log(e);
		console.log(dataSerializada);

		$.ajax({
			type: 'POST',
			url : 'php/servicios/post.alumnos.php',
			dataType: 'json',
			data: dataSerializada
		})
		.done(function( data ){
			
			console.log("Correcto!");

			console.log( data ); 


		})
		.fail(function( err ){
			console.log("Fallo!", err);
		});

 	});


})();