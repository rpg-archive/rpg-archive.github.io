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

	//Awarenesswd
		// Insight
    	if ($(this).attr('id') == "InsightSkill") {
    		//Erase Privious Roll
			$('#InsightRolls').html(" ");
			$('#InsightResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#InsightNd20').val());
			var tn = parseInt($('#InsightTN').html());
			var focus = parseInt($('#InsightFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#InsightRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#InsightResults').append(successComplication[0] + "S, ");
			$('#InsightResults').append(successComplication[1] + "C ");

			$('#InsightNd20').prop('selectedIndex',1);
		}

		// Observation
    	if ($(this).attr('id') == "ObservationSkill") {
    		//Erase Privious Roll
			$('#ObservationRolls').html(" ");
			$('#ObservationResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#ObservationNd20').val());
			var tn = parseInt($('#ObservationTN').html());
			var focus = parseInt($('#ObservationFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#ObservationRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#ObservationResults').append(successComplication[0] + "S, ");
			$('#ObservationResults').append(successComplication[1] + "C ");

			$('#ObservationNd20').prop('selectedIndex',1);
		}

		// Survival
    	if ($(this).attr('id') == "SurvivalSkill") {
    		//Erase Privious Roll
			$('#SurvivalRolls').html(" ");
			$('#SurvivalResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#SurvivalNd20').val());
			var tn = parseInt($('#SurvivalTN').html());
			var focus = parseInt($('#SurvivalFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#SurvivalRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#SurvivalResults').append(successComplication[0] + "S, ");
			$('#SurvivalResults').append(successComplication[1] + "C ");

			$('#SurvivalNd20').prop('selectedIndex',1);
		}

		// Thievery
    	if ($(this).attr('id') == "ThieverySkill") {
    		//Erase Privious Roll
			$('#ThieveryRolls').html(" ");
			$('#ThieveryResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#ThieveryNd20').val());
			var tn = parseInt($('#ThieveryTN').html());
			var focus = parseInt($('#ThieveryFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#ThieveryRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#ThieveryResults').append(successComplication[0] + "S, ");
			$('#ThieveryResults').append(successComplication[1] + "C ");

			$('#ThieveryNd20').prop('selectedIndex',1);
		}

	//Brawn
		// Athletics
    	if ($(this).attr('id') == "AthleticsSkill") {
    		//Erase Privious Roll
			$('#AthleticsRolls').html(" ");
			$('#AthleticsResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#AthleticsNd20').val());
			var tn = parseInt($('#AthleticsTN').html());
			var focus = parseInt($('#AthleticsFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#AthleticsRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#AthleticsResults').append(successComplication[0] + "S, ");
			$('#AthleticsResults').append(successComplication[1] + "C ");

			$('#AthleticsNd20').prop('selectedIndex',1);
		}

		// Resistance
    	if ($(this).attr('id') == "ResistanceSkill") {
    		//Erase Privious Roll
			$('#ResistanceRolls').html(" ");
			$('#ResistanceResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#ResistanceNd20').val());
			var tn = parseInt($('#ResistanceTN').html());
			var focus = parseInt($('#ResistanceFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#ResistanceRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#ResistanceResults').append(successComplication[0] + "S, ");
			$('#ResistanceResults').append(successComplication[1] + "C ");

			$('#ResistanceNd20').prop('selectedIndex',1);
		}			

	//COORDINATION
		// Sailing
    	if ($(this).attr('id') == "SailingSkill") {
    		//Erase Privious Roll
			$('#SailingRolls').html(" ");
			$('#SailingResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#SailingNd20').val());
			var tn = parseInt($('#SailingTN').html());
			var focus = parseInt($('#SailingFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#SailingRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#SailingResults').append(successComplication[0] + "S, ");
			$('#SailingResults').append(successComplication[1] + "C ");

			$('#SailingNd20').prop('selectedIndex',1);
		}


	//INTELLIGENCE
		// Alchemy
    	if ($(this).attr('id') == "AlchemySkill") {
    		//Erase Privious Roll
			$('#AlchemyRolls').html(" ");
			$('#AlchemyResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#AlchemyNd20').val());
			var tn = parseInt($('#AlchemyTN').html());
			var focus = parseInt($('#AlchemyFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#AlchemyRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#AlchemyResults').append(successComplication[0] + "S, ");
			$('#AlchemyResults').append(successComplication[1] + "C ");

			$('#AlchemyNd20').prop('selectedIndex',1);
		}

		// Craft
    	if ($(this).attr('id') == "CraftSkill") {
    		//Erase Privious Roll
			$('#CraftRolls').html(" ");
			$('#CraftResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#CraftNd20').val());
			var tn = parseInt($('#CraftTN').html());
			var focus = parseInt($('#CraftFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#CraftRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#CraftResults').append(successComplication[0] + "S, ");
			$('#CraftResults').append(successComplication[1] + "C ");

			$('#CraftNd20').prop('selectedIndex',1);
		}

		// Healing
    	if ($(this).attr('id') == "HealingSkill") {
    		//Erase Privious Roll
			$('#HealingRolls').html(" ");
			$('#HealingResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#HealingNd20').val());
			var tn = parseInt($('#HealingTN').html());
			var focus = parseInt($('#HealingFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#HealingRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#HealingResults').append(successComplication[0] + "S, ");
			$('#HealingResults').append(successComplication[1] + "C ");

			$('#HealingNd20').prop('selectedIndex',1);
		}

		// Linguistics
    	if ($(this).attr('id') == "LinguisticsSkill") {
    		//Erase Privious Roll
			$('#LinguisticsRolls').html(" ");
			$('#LinguisticsResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#LinguisticsNd20').val());
			var tn = parseInt($('#LinguisticsTN').html());
			var focus = parseInt($('#LinguisticsFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#LinguisticsRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#LinguisticsResults').append(successComplication[0] + "S, ");
			$('#LinguisticsResults').append(successComplication[1] + "C ");

			$('#LinguisticsNd20').prop('selectedIndex',1);
		}

		// Lore
    	if ($(this).attr('id') == "LoreSkill") {
    		//Erase Privious Roll
			$('#LoreRolls').html(" ");
			$('#LoreResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#LoreNd20').val());
			var tn = parseInt($('#LoreTN').html());
			var focus = parseInt($('#LoreFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#LoreRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#LoreResults').append(successComplication[0] + "S, ");
			$('#LoreResults').append(successComplication[1] + "C ");

			$('#LoreNd20').prop('selectedIndex',1);
		}

		// Siegecraft
    	if ($(this).attr('id') == "SiegecraftSkill") {
    		//Erase Privious Roll
			$('#SiegecraftRolls').html(" ");
			$('#SiegecraftResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#SiegecraftNd20').val());
			var tn = parseInt($('#SiegecraftTN').html());
			var focus = parseInt($('#SiegecraftFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#SiegecraftRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#SiegecraftResults').append(successComplication[0] + "S, ");
			$('#SiegecraftResults').append(successComplication[1] + "C ");

			$('#SiegecraftNd20').prop('selectedIndex',1);
		}

	//PERSONALITY
		// Animal Handling
    	if ($(this).attr('id') == "AnimalHandlingSkill") {
    		//Erase Privious Roll
			$('#AnimalHandlingRolls').html(" ");
			$('#AnimalHandlingResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#AnimalHandlingNd20').val());
			var tn = parseInt($('#AnimalHandlingTN').html());
			var focus = parseInt($('#AnimalHandlingFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#AnimalHandlingRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#AnimalHandlingResults').append(successComplication[0] + "S, ");
			$('#AnimalHandlingResults').append(successComplication[1] + "C ");

			$('#AnimalHandlingNd20').prop('selectedIndex',1);
		}

		// Command
    	if ($(this).attr('id') == "CommandSkill") {
    		//Erase Privious Roll
			$('#CommandRolls').html(" ");
			$('#CommandResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#CommandNd20').val());
			var tn = parseInt($('#CommandTN').html());
			var focus = parseInt($('#CommandFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#CommandRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#CommandResults').append(successComplication[0] + "S, ");
			$('#CommandResults').append(successComplication[1] + "C ");

			$('#CommandNd20').prop('selectedIndex',1);
		}

		// Counsel
    	if ($(this).attr('id') == "CounselSkill") {
    		//Erase Privious Roll
			$('#CounselRolls').html(" ");
			$('#CounselResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#CounselNd20').val());
			var tn = parseInt($('#CounselTN').html());
			var focus = parseInt($('#CounselFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#CounselRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#CounselResults').append(successComplication[0] + "S, ");
			$('#CounselResults').append(successComplication[1] + "C ");

			$('#CounselNd20').prop('selectedIndex',1);
		}

		// Persuade
    	if ($(this).attr('id') == "PersuadeSkill") {
    		//Erase Privious Roll
			$('#PersuadeRolls').html(" ");
			$('#PersuadeResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#PersuadeNd20').val());
			var tn = parseInt($('#PersuadeTN').html());
			var focus = parseInt($('#PersuadeFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#PersuadeRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#PersuadeResults').append(successComplication[0] + "S, ");
			$('#PersuadeResults').append(successComplication[1] + "C ");

			$('#PersuadeNd20').prop('selectedIndex',1);
		}

		// Society
    	if ($(this).attr('id') == "SocietySkill") {
    		//Erase Privious Roll
			$('#SocietyRolls').html(" ");
			$('#SocietyResults').html(" ");
			$('#debug').html(" ");

			var rolls = [];
			var successComplication = [0, 0];
			var dieNum = parseInt($('#SocietyNd20').val());
			var tn = parseInt($('#SocietyTN').html());
			var focus = parseInt($('#SocietyFocus').html());

			// Roll Dice
			for (i = 0; i < dieNum; i++) {
				rolls[i] = getRandomInt(1, 20);

				if( rolls[i] <= focus){
					dieNum += 1;
				}
			}

			// Determine Successes and Complications
			for (i = 0; i < dieNum; i++) {
				$('#SocietyRolls').append(rolls[i] + " ");

				if ( rolls[i] <= tn ){
				 	successComplication[0] += 1;
				} else if ( rolls[i] == 20 ){
				 	successComplication[1] += 1;
				} 
			}

			$('#SocietyResults').append(successComplication[0] + "S, ");
			$('#SocietyResults').append(successComplication[1] + "C ");

			$('#SocietyNd20').prop('selectedIndex',1);
		}

	// Willpower
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