// WIKIPEDIA VIEWER


$(document).ready(function () {
    
    /**TESTING WATERS**/
    
    $('#demo1').Wikipedia('Stuttgart');
	//$('#demo2').Wikipedia('Albert Einstein', {'showTitle': false, 'maxThumbnails': 6});
    
    $('#demo2').Wikipedia('Page Title', [{
        'showTitle': true, 
                                           
        'maxThumbnails': 1, 
                                           
        'cutFirstInfoTableRows': 4, 
        
        'locale':'en',
                                           
                                           
        'thumbMaxWidth': '180px', 
                                           
        'thumbMaxHeight': '180px' 
                                         }]);
    
    
    
    
    /******* Constructing URL ***** 
    var baseURL = "http://en.wikipedia.org/w/api.php?";
    
    var searchPfix = "?action=query&list=search&format=json&srsearch=";
    
    
    var corsSfix = "&callback=?";
    
    
    // Get data from Wikipedia 
    function getWikiData() {
        
        $.getJSON();
        
    }  
    */
    
});