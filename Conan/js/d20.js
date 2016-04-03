$(document).ready(function(){
    $("td").click(function(){
    	if ($(this).attr('id') == "MeleeHit") {
 			// if ($(this).css('background-color') == 'rgb(225, 225, 214)') {
 	  //  			$(this).css('background-color', 'rgb(46, 5, 5)');
 			// }else{
 			// 	$(this).css('background-color', 'rgb(225, 225, 214)');
 			// }

			$('#MeleeRolls').html(" ");
			$('#MeleeResults').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#MeleeNd20').val());
			var tn = parseInt($('#SkillMeleeTN').html());
			var focus = parseInt($('#SkillMeleeFocus').html());

			//$('#MeleeResults').append(tn + " ");
			//$('#MeleeResults').append(focus + " ");

			// for (i = 0; i < dieNum; i++) {
			// 	rolls[i] = getRandomInt(1, 20);

			// 	if( rolls[i] < = focus){
			// 	 	dieNum += 1;
			// 	}
			// }

			var i = 0;
			while ( i < dieNum ){
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] < = focus){
				 	dieNum += 1;
				}

				i += 1;
			}

$('#MeleeResults').append("test");

			for (i = 0; i < dieNum; i++) {
				$('#MeleeRolls').append(rolls[i] + " ");

				if ( rolls[i] <= $('#SkillMeleeTN').val ){
					successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
					successComplication[1] += 1;
				} 
			}

			//$('#MeleeResults').append(successComplication[0] + "S " successComplication[1] + "C ");
		}	
    });

    var dieNum;

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function rollDie(num) {
	  num = num.substring(1, num.length);
	  $(".die").html(getRandomInt(1, num));
	}

	$(".roll").on("click", function() {
	  dieNum = $(this).html();
	  rollDie(dieNum);
	});
});





// $(document).ready(function(){
//     $("td").click(function(){
//     	if ($(this).attr('id') == "MeleeHit") {
// 			if ($(this).css('background-color') == 'rgb(225, 225, 214)') {
// 	   			$(this).css('background-color', 'rgb(46, 5, 5)');
// 			}else{
// 				$(this).css('background-color', 'rgb(225, 225, 214)');
// 			}
// 		}	
//     });
// });