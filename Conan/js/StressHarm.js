
$(document).ready(function(){
    $("td").click(function(){
		if ($(this).css('background-color') == 'rgb(225, 225, 214)') {
   			$(this).css('background-color', 'rgb(46, 5, 5)');
		}else{
			$(this).css('background-color', 'rgb(225, 225, 214)');
		}
    });
});