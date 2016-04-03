$(document).ready(function(){
    $("td").click(function(){
    	if ($(this).attr('id') == "MeleeHit") {
    		//Erase Privious Roll
			$('#MeleeRolls').html(" ");
			$('#MeleeResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#MeleeNd20').val());
			var tn = parseInt($('#SkillMeleeTN').html());
			var focus = parseInt($('#SkillMeleeFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#MeleeRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#MeleeResults').append(successComplication[0] + "S, ");
			$('#MeleeResults').append(successComplication[1] + "C ");

			$('#MeleeNd20').prop('selectedIndex',1);
		}	

    	if ($(this).attr('id') == "RangeHit") {
    		//Erase Privious Roll
			$('#RangeRolls').html(" ");
			$('#RangeResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#RangeNd20').val());
			var tn = parseInt($('#SkillRangeTN').html());
			var focus = parseInt($('#SkillRangeFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#RangeRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#RangeResults').append(successComplication[0] + "S, ");
			$('#RangeResults').append(successComplication[1] + "C ");

			$('#RangeNd20').prop('selectedIndex',1);
		}	

    	if ($(this).attr('id') == "ParryHit") {
    		//Erase Privious Roll
			$('#ParryRolls').html(" ");
			$('#ParryResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#ParryNd20').val());
			var tn = parseInt($('#SkillParryTN').html());
			var focus = parseInt($('#SkillParryFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#ParryRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#ParryResults').append(successComplication[0] + "S, ");
			$('#ParryResults').append(successComplication[1] + "C ");

			$('#ParryNd20').prop('selectedIndex',1);
		}	

    	if ($(this).attr('id') == "BroadswordDMG") {
    		//Erase Privious Roll
			$('#BroadswordRolls').html(" ");
			$('#BroadswordResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successEvents = [0, 0];
			var dieNum = parseInt($('#BroadswordNd6').val());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 6);
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#BroadswordRolls').append(rolls[i] + " ");

				if ( rolls[i] == 1 ){
				  	successEvents[0] += 1;
				} else if ( rolls[i] == 2 ){
				  	successEvents[0] += 2;
				} else if ( rolls[i] == 5 || rolls[i] == 6 ){
				  	successEvents[0] += 1;	
				  	successEvents[1] += 1;	
				} 
			}

			$('#BroadswordResults').append(successEvents[0] + "S, ");
			$('#BroadswordResults').append(successEvents[1] + "E ");

			$('#BroadswordNd6').prop('selectedIndex',6);
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