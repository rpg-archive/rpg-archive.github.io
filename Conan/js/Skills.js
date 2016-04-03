$(document).ready(function(){
    $("tr").click(function(){
    	if ($(this).attr('id') == "AcrobaticSkill") {
    		//Erase Privious Roll
			$('#AcrobaticsRolls').html(" ");
			$('#AcrobaticsResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#AcrobaticsNd20').val());
			var tn = parseInt($('#AcrobaticsTN').html());
			var focus = parseInt($('#AcrobaticsFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#AcrobaticsRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#AcrobaticsResults').append(successComplication[0] + "S, ");
			$('#AcrobaticsResults').append(successComplication[1] + "C ");

			$('#AcrobaticsNd20').prop('selectedIndex',1);
		}	

		// Stealth
    	if ($(this).attr('id') == "StealthSkill") {
    		//Erase Privious Roll
			$('#StealthRolls').html(" ");
			$('#StealthResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#StealthNd20').val());
			var tn = parseInt($('#StealthTN').html());
			var focus = parseInt($('#StealthFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#StealthRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#StealthResults').append(successComplication[0] + "S, ");
			$('#StealthResults').append(successComplication[1] + "C ");

			$('#StealthNd20').prop('selectedIndex',1);
		}	


		// Discipline
    	if ($(this).attr('id') == "DisciplineSkill") {
    		//Erase Privious Roll
			$('#DisciplineRolls').html(" ");
			$('#DisciplineResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#DisciplineNd20').val());
			var tn = parseInt($('#DisciplineTN').html());
			var focus = parseInt($('#DisciplineFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#DisciplineRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#DisciplineResults').append(successComplication[0] + "S, ");
			$('#DisciplineResults').append(successComplication[1] + "C ");

			$('#DisciplineNd20').prop('selectedIndex',1);
		}	

		// Sorcery
    	if ($(this).attr('id') == "SorcerySkill") {
    		//Erase Privious Roll
			$('#SorceryRolls').html(" ");
			$('#SorceryResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#SorceryNd20').val());
			var tn = parseInt($('#SorceryTN').html());
			var focus = parseInt($('#SorceryFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#SorceryRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else{
				 	successComplication[1] += 1;
				} 
			}

			$('#SorceryResults').append(successComplication[0] + "S, ");
			$('#SorceryResults').append(successComplication[1] + "C ");

			$('#SorceryNd20').prop('selectedIndex',1);
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

	function rollSkill(skillID, rollsID, resultsID, Nd20ID, tnID, focusID) {
    	if ($(this).attr('id') == skillID) {
    		//Erase Privious Roll
			$( "#" + rollsID + " img" ).html(" ");
			$( "#" + resultsID + " img" ).html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($( "#" + Nd20ID + " img" ).val());
			var tn = parseInt($( "#" + tnID + " img" ).html());
			var focus = parseInt($( "#" + focusID + " img" ).html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$( "#" + rollsID + " img" ).append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$( "#" + resultsID + " img" ).append(successComplication[0] + "S, ");
			$( "#" + resultsID + " img" ).append(successComplication[1] + "C ");

			$( "#" + Nd20ID + " img" ).prop('selectedIndex',1);
		}	
	}



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