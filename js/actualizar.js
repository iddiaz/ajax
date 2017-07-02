(function(){
   'use strict';

   //recupera parametros de la url
   function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
} 

$(document).ready(function(){
    
    var id = $_GET('id');
    
    $.ajax({
            type: 'GET',
            url: 'php/servicios/get.alumnos.php?id='+id,
            dataType: 'json'
        })
        .done(function(data){
            console.log('correcto!');
            console.log(data);
            var alumno = data.alumnos[0];

            $('#txid').val(alumno.id);
            $('#txtnombre').val(alumno.nombre);
            $('#cmbestado').val(alumno.estado);

        })
        .fail(function(err){
            console.log(err);
        });
    });


	//=================================================
	//	Actualizar datos
	//=================================================

    $('#frmData').on('submit', function(e){
		e.preventDefault();

		var formulario = $(this);
		var dataSerializada = formulario.serialize();

		$.ajax({
			type: 'POST',
			url : 'php/servicios/post.guardaralumno.php',
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

    

})()