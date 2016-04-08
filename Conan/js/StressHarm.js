
$(document).ready(function(){
  //   $("td").click(function(){
  //   	if( $(this).hasClass("stressHarm") ){
		// 	if ($(this).css('background-color') == 'rgb(225, 225, 214)') {
	 //   			$(this).css('background-color', 'rgb(46, 5, 5)');
		// 	}else{
		// 		$(this).css('background-color', 'rgb(225, 225, 214)');
		// 	}
		// }	
  //   });

    $("td").mousedown(function(e){
		document.oncontextmenu = function() {return false;};
		e.preventDefault();

		if( e.button == 0 ) {
	    	if( $(this).hasClass("stressHarm") ){
				if ($(this).css('background-color') == 'rgb(225, 225, 214)') {
		   			$(this).css('background-color', 'rgb(46, 5, 5)');
				}else{
					$(this).css('background-color', 'rgb(225, 225, 214)');
				}
			}
		}else if( e.button == 2 ) {
			$(this).css('background-color', 'rgb(214, 214, 48)');
		}
    });

});

