$(document).ready(function(){
    // Initial Calculation on Page Load
	clearCoSData();

	$('#CoC11').append(getComplication(1, 1));
	$('#CoC12').append(getComplication(1, 2));
	$('#CoC13').append(getComplication(1, 3));
	$('#CoC14').append(getComplication(1, 4));
	$('#CoC15').append(getComplication(1, 5));

	$('#CoC21').append(getComplication(2, 1));
	$('#CoC22').append(getComplication(2, 2));
	$('#CoC23').append(getComplication(2, 3));
	$('#CoC24').append(getComplication(2, 4));
	$('#CoC25').append(getComplication(2, 5));

	$('#CoC31').append(getComplication(3, 1));
	$('#CoC32').append(getComplication(3, 2));
	$('#CoC33').append(getComplication(3, 3));
	$('#CoC34').append(getComplication(3, 4));
	$('#CoC35').append(getComplication(3, 5));

	$('#CoC41').append(getComplication(4, 1));
	$('#CoC42').append(getComplication(4, 2));
	$('#CoC43').append(getComplication(4, 3));
	$('#CoC44').append(getComplication(4, 4));
	$('#CoC45').append(getComplication(4, 5));

	$('#CoC51').append(getComplication(5, 1));
	$('#CoC52').append(getComplication(5, 2));
	$('#CoC53').append(getComplication(5, 3));
	$('#CoC54').append(getComplication(5, 4));
	$('#CoC55').append(getComplication(5, 5));

});

// Clear Data From Cells
function clearCoSData() {
	$('#CoC11').html(" ");
	$('#CoC12').html(" ");
	$('#CoC13').html(" ");
	$('#CoC14').html(" ");
	$('#CoC15').html(" ");
	$('#CoC21').html(" ");
	$('#CoC22').html(" ");
	$('#CoC23').html(" ");
	$('#CoC24').html(" ");
	$('#CoC25').html(" ");
	$('#CoC31').html(" ");
	$('#CoC32').html(" ");
	$('#CoC33').html(" ");
	$('#CoC34').html(" ");
	$('#CoC35').html(" ");
	$('#CoC41').html(" ");
	$('#CoC42').html(" ");
	$('#CoC43').html(" ");
	$('#CoC44').html(" ");
	$('#CoC45').html(" ");
	$('#CoC51').html(" ");
	$('#CoC52').html(" ");
	$('#CoC53').html(" ");
	$('#CoC54').html(" ");
	$('#CoC55').html(" ");
}

function getComplication(diff, nd20) {
	n = parseInt(nd20);
	d = parseFloat(diff);

	// The Probability of a single die getting 
	// [0] no success
	// [1] one success
	// [2] two success
	var successProbability = [0, 0, 0];

	successProbability[0] = parseFloat( 19 / 20.0);
	successProbability[1] = parseFloat( 1 / 20.0);

	// Number of possible outcomes for 5 dice.
	// Each dice has three outcomes.
	// no success, one success, two success
	var numPossibleOutcomes = Math.pow( 2, n );

	// All possible outcomes. 
	// First dimension is the number of successes
	// Second dimesion is the probability
	var rollOutcomes = new Array();

	for ( var i = 0; i < numPossibleOutcomes; i++) {
 		rollOutcomes[i] = new Array();

 		for ( var j = 0; j < 2; j++) {
  			rollOutcomes[i][j] = parseInt(0);
 		}
	}

	// Calculates number of success and probablilities for each dice combination
	var k = 0;
	for (var die5 = 0; die5 < 2; die5++) {
		for (var die4 = 0; die4 < 2; die4++) {
			for (var die3 = 0; die3 < 2; die3++) {
				for (var die2 = 0; die2 < 2; die2++) {
					for (var die1 = 0; die1 < 2; die1++) {
						//console.log( die1 + " " + die2 + " " + die3 + " " + die4 + " " + die5 );
						if ( k < numPossibleOutcomes ) {
							switch ( n ){
								case 1:
									rollOutcomes[k][0] = parseInt(die1);
									rollOutcomes[k][1] = successProbability[die1];
									break;
									
								case 2:
									rollOutcomes[k][0] = parseInt(die1) + 
														 parseInt(die2);

									rollOutcomes[k][1] = successProbability[die1] * 
														 successProbability[die2];
									break;
									
								case 3:
									rollOutcomes[k][0] = parseInt(die1) + 
														 parseInt(die2) + 
														 parseInt(die3);

									rollOutcomes[k][1] = successProbability[die1] * 
														 successProbability[die2] * 
														 successProbability[die3];
									break;
									
								case 4:
									rollOutcomes[k][0] = parseInt(die1) + 
														 parseInt(die2) + 
														 parseInt(die3) + 
														 parseInt(die4);

									rollOutcomes[k][1] = successProbability[die1] * 
														 successProbability[die2] * 
														 successProbability[die3] * 
														 successProbability[die4];
									break;
									
								case 5:
									rollOutcomes[k][0] = parseInt(die1) + 
														 parseInt(die2) + 
														 parseInt(die3) + 
														 parseInt(die4) + 
														 parseInt(die5);

									rollOutcomes[k][1] = successProbability[die1] * 
														 successProbability[die2] * 
														 successProbability[die3] * 
														 successProbability[die4] * 
														 successProbability[die5];
									break;
								default:
							}
									
							k++;
						}
					}
				}
			}
		}
	}

	// Add up Probabilities
	var p = 0.0;
	for (var m = 0; m < numPossibleOutcomes; m++) {
		//console.log( "m = " + m );
		if( rollOutcomes[m][0] >= d )
			p += rollOutcomes[m][1];
			//console.log( "rollOutcomes = " + rollOutcomes[m][0] );		
			//console.log( "rollOutcomes = " + rollOutcomes[m][1] );		
	}

	p = p * 100.0;

  return p.toFixed(3) + "%";
}