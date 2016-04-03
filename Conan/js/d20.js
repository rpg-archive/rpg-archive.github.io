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

		// Damage Shield
    	if ($(this).attr('id') == "ShieldDMG") {
    		//Erase Privious Roll
			$('#ShieldDMGRolls').html(" ");
			$('#ShieldDMGResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successEvents = [0, 0];
			var dieNum = parseInt($('#ShieldDMGNd6').val());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 6);
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#ShieldDMGRolls').append(rolls[i] + " ");

				if ( rolls[i] == 1 ){
				  	successEvents[0] += 1;
				} else if ( rolls[i] == 2 ){
				  	successEvents[0] += 2;
				} else if ( rolls[i] == 5 || rolls[i] == 6 ){
				  	successEvents[0] += 1;	
				  	successEvents[1] += 1;	
				} 
			}

			$('#ShieldDMGResults').append(successEvents[0] + "S, ");
			$('#ShieldDMGResults').append(successEvents[1] + "E ");

			$('#ShieldDMGResults').prop('selectedIndex',3);
		}

		// Soak Shield
    	if ($(this).attr('id') == "ShieldSoak") {
    		//Erase Privious Roll
			$('#ShieldSoakRolls').html(" ");
			$('#ShieldSoakResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successEvents = [0, 0];
			var dieNum = parseInt($('#ShieldSoakNd6').val());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 6);
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#ShieldSoakRolls').append(rolls[i] + " ");

				if ( rolls[i] == 1 ){
				  	successEvents[0] += 1;
				} else if ( rolls[i] == 2 ){
				  	successEvents[0] += 2;
				} else if ( rolls[i] == 5 || rolls[i] == 6 ){
				  	successEvents[0] += 1;	
				  	successEvents[1] += 1;	
				} 
			}

			// Armor Bonus
			$('#ShieldSoakRolls').append(" + 3 (Mail) ");
			successEvents[0] += 3;

			$('#ShieldSoakResults').append(successEvents[0] + "S, ");
			$('#ShieldSoakResults').append(successEvents[1] + "E ");

			$('#ShieldSoakResults').prop('selectedIndex',3);
		}

		// Light Crossbow
    	if ($(this).attr('id') == "LCrossbowDMG") {
    		//Erase Privious Roll
			$('#LCrossbowRolls').html(" ");
			$('#LCrossbowResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successEvents = [0, 0];
			var dieNum = parseInt($('#LCrossbowNd6').val());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 6);
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#LCrossbowRolls').append(rolls[i] + " ");

				if ( rolls[i] == 1 ){
				  	successEvents[0] += 1;
				} else if ( rolls[i] == 2 ){
				  	successEvents[0] += 2;
				} else if ( rolls[i] == 5 || rolls[i] == 6 ){
				  	successEvents[0] += 1;	
				  	successEvents[1] += 1;	
				} 
			}

			$('#LCrossbowResults').append(successEvents[0] + "S, ");
			$('#LCrossbowResults').append(successEvents[1] + "E ");

			$('#LCrossbowResults').prop('selectedIndex',3);
		}

		// Steel Glare
    	if ($(this).attr('id') == "SteelyGlareDMG") {
    		//Erase Privious Roll
			$('#SteelyGlareRolls').html(" ");
			$('#SteelyGlareResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successEvents = [0, 0];
			var dieNum = parseInt($('#SteelyGlareNd6').val());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 6);
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#SteelyGlareRolls').append(rolls[i] + " ");

				if ( rolls[i] == 1 ){
				  	successEvents[0] += 1;
				} else if ( rolls[i] == 2 ){
				  	successEvents[0] += 2;
				} else if ( rolls[i] == 5 || rolls[i] == 6 ){
				  	successEvents[0] += 1;	
				  	successEvents[1] += 1;	
				} 
			}

			$('#SteelyGlareResults').append(successEvents[0] + "S, ");
			$('#SteelyGlareResults').append(successEvents[1] + "E ");

			$('#SteelyGlareResults').prop('selectedIndex',1);
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