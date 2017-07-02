(function(){
    'use strict';
    $(document).ready( function(){

        $.ajax({
            type: 'GET',
            url: 'php/servicios/get.alumnos.php',
            dataType: 'json'
        })
        .done(function(data){
            console.log(data);

            if(data.error){
                alert('Algo salio mal')
                return;
            }

            data.alumnos.forEach( function(alumno, index){
                var content = '';
                    content +=  '<tr id="fila'+alumno.id+'">';
                    content +=  '<td>'+alumno.id+'</td>'
                    content +=  '<td>'+alumno.nombre+'</td>';
                    content +=  '<td class="w50">';
                    content +=  '<a href="actualizar.html?id='+alumno.id+'" class="btn btn-primary btn-sm"><i class="glyphicon glyphicon-pencil"></i> actualizar</a> ';
                    content +=  '</td>';
                    content += '<td class="w50">';
                    content +=  '<a href="" data-nombre="'+alumno.nombre+'" data-id="'+alumno.id+'" class="btn btn-danger btn-sm botEliminar"><i class="glyphicon glyphicon-trash"></i> eliminar</a>';
                    content += '</td>';
                    content += '</tr>';

                $('#tblRegistros').append( content );
                
            });
        })
        .fail(function(){
            console.log('error!!');
        })

    });

   

    //=================================================
    // Eliminando Registro de BD
    // EL boton es dinámico por lo que usamos la siguiente sintaxis,
    // para poder acceder a él.
    //=================================================

    $('body').on('click', '.botEliminar',function(e){
        
        e.preventDefault();

        var nombre = $(this).data('nombre');
        var id= $(this).data('id');
        // console.log(id);
 
        swal({
            title: "Estás seguro?",
            text: "Quieres borrar a "+nombre,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Si, bórralo!",
            cancelButtonText: "No, cancelar!",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function (isConfirm) {
                if (isConfirm) {
                    borrarRegistro(id);
                }
            });
        


    });
            
    /**
     * @description elimina los datos de la base de datos 
     * @param {any} id 
     * @return {void}
     */
    function borrarRegistro(id){
        
        // var id= $(this).data('id');
        // console.log(id);
        
        $.ajax({
            type: 'POST',
            url: 'php/servicios/post.eliminaalumno.php?id='+id,
            dataType: 'json'
        })
        .done(function(data){
            console.log('correcto!');
            console.log(data);

            swal("Borrado!", "el registro ha sido borrado.", "success");

            // setTimeout(function(){
            //     window.location.reload();

            // },1000)

            $('#fila'+id).remove();


        })
        .fail(function(err){
            console.log(err);
    
        });

    }

    
})()