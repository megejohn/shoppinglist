$(document).ready(function() {

//add list items
	$('#item').keyup(function(event){
		if(event.keyCode == 13) {
			var item = $('#item').val();
			$('#list').html(item);
		}
	});		

});
