(function(){


	$.ajax({
		type: 'GET',
		url : 'http://www.json-generator.com/api/json/get/bUjXBzSHKG?indent=2',
		dataType: 'json'
	})
	.done(function( data ){
		
		var persons = data;

		console.log(persons);

		
		for( var i = 0; i< persons.length; i++){

			console.log(persona);
			var persona = persons[i];
			var tags = '';

			for(var j=0; j < persona.tags.length; j++){
				
				tags +='<span class="label label-primary">'+ persona.tags[j] + '</span> ';
				console.log('tags>>',tags);
			}

			var html  = '';
				html += '<tr>';
				html += '	<td>'+ persona.name +'</td>';
				html += '	<td>'+ persona.age +'</td>';
				html += '	<td>'+ tags +'</td>';
				html += '</tr>';

				$('.table').append(html)
		}	



	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});


})();