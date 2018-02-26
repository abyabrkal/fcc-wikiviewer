
$('#search').focus(function(){
	$('#search').val('');
});


$('#search').keypress(function(e) {
    if(e.which == 13) {
	   	e.preventDefault(); 
        loadWiki();
    }
});


function loadWiki(){
	
	var search = $('#search').val(); 
	//console.log(search);
	
	var wikiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + search + "&namespace=0&limit=10";
	
	$.ajax({
		url: wikiURL,
		success: function(data){
			console.log(data);
			 
			$('#results').html('');
			
			for (var i = 1; i < data[1].length; i++){
				console.log(data[3][i]);
				
				$('#results').append('<li class="list"><div class="left">' + i + '</div><div class="right"><a class="mainhead" href="' + data[3][i] + '" target="_blank">'+ data[1][i] +'</a><p class="brief">' + data[2][i] + '</p></div></li>');
			}		
			
		},
		error: function(){
			$('#results').innerHTML("Error retrieving data.");
		}
		
	});
	
}

$(document).ready(function() {
	
	$('#searchBtn').click(loadWiki);
	
 });
