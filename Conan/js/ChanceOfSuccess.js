$(document).ready(function(){
    $("tr").click(function(){
    	if ($(this).attr('id') == "CoS") {
			clearCoSData();

			var TN    = parseFloat($('#ChanceSuccess').val());
			var Focus = parseFloat($('#ChanceFocus').val());

			$('#CoS11').append(getRandomInt(TN, Focus, 1, 1));
			$('#CoS12').append(getRandomInt(TN, Focus, 1, 2));
			$('#CoS13').append(getRandomInt(TN, Focus, 1, 3));
			$('#CoS14').append(getRandomInt(TN, Focus, 1, 4));
			$('#CoS15').append(getRandomInt(TN, Focus, 1, 5));

			$('#CoS21').append(getRandomInt(TN, Focus, 2, 1));
			$('#CoS22').append(getRandomInt(TN, Focus, 2, 2));
			$('#CoS23').append(getRandomInt(TN, Focus, 2, 3));
			$('#CoS24').append(getRandomInt(TN, Focus, 2, 4));
			$('#CoS25').append(getRandomInt(TN, Focus, 2, 5));

			$('#CoS31').append(getRandomInt(TN, Focus, 3, 1));
			$('#CoS32').append(getRandomInt(TN, Focus, 3, 2));
			$('#CoS33').append(getRandomInt(TN, Focus, 3, 3));
			$('#CoS34').append(getRandomInt(TN, Focus, 3, 4));
			$('#CoS35').append(getRandomInt(TN, Focus, 3, 5));

			$('#CoS41').append(getRandomInt(TN, Focus, 4, 1));
			$('#CoS42').append(getRandomInt(TN, Focus, 4, 2));
			$('#CoS43').append(getRandomInt(TN, Focus, 4, 3));
			$('#CoS44').append(getRandomInt(TN, Focus, 4, 4));
			$('#CoS45').append(getRandomInt(TN, Focus, 4, 5));

			$('#CoS51').append(getRandomInt(TN, Focus, 5, 1));
			$('#CoS52').append(getRandomInt(TN, Focus, 5, 2));
			$('#CoS53').append(getRandomInt(TN, Focus, 5, 3));
			$('#CoS54').append(getRandomInt(TN, Focus, 5, 4));
			$('#CoS55').append(getRandomInt(TN, Focus, 5, 5));
		}	
    });

    // Initial Calculation on Page Load
	clearCoSData();

	var TN    = parseFloat($('#ChanceSuccess').val());
	var Focus = parseFloat($('#ChanceFocus').val());

	console.log(Focus);

	$('#CoS11').append(getRandomInt(TN, Focus, 1, 1));
	$('#CoS12').append(getRandomInt(TN, Focus, 1, 2));
	$('#CoS13').append(getRandomInt(TN, Focus, 1, 3));
	$('#CoS14').append(getRandomInt(TN, Focus, 1, 4));
	$('#CoS15').append(getRandomInt(TN, Focus, 1, 5));

	$('#CoS21').append(getRandomInt(TN, Focus, 2, 1));
	$('#CoS22').append(getRandomInt(TN, Focus, 2, 2));
	$('#CoS23').append(getRandomInt(TN, Focus, 2, 3));
	$('#CoS24').append(getRandomInt(TN, Focus, 2, 4));
	$('#CoS25').append(getRandomInt(TN, Focus, 2, 5));

	$('#CoS31').append(getRandomInt(TN, Focus, 3, 1));
	$('#CoS32').append(getRandomInt(TN, Focus, 3, 2));
	$('#CoS33').append(getRandomInt(TN, Focus, 3, 3));
	$('#CoS34').append(getRandomInt(TN, Focus, 3, 4));
	$('#CoS35').append(getRandomInt(TN, Focus, 3, 5));

	$('#CoS41').append(getRandomInt(TN, Focus, 4, 1));
	$('#CoS42').append(getRandomInt(TN, Focus, 4, 2));
	$('#CoS43').append(getRandomInt(TN, Focus, 4, 3));
	$('#CoS44').append(getRandomInt(TN, Focus, 4, 4));
	$('#CoS45').append(getRandomInt(TN, Focus, 4, 5));

	$('#CoS51').append(getRandomInt(TN, Focus, 5, 1));
	$('#CoS52').append(getRandomInt(TN, Focus, 5, 2));
	$('#CoS53').append(getRandomInt(TN, Focus, 5, 3));
	$('#CoS54').append(getRandomInt(TN, Focus, 5, 4));
	$('#CoS55').append(getRandomInt(TN, Focus, 5, 5));

});

// Clear Data From Cells
function clearCoSData() {
	$('#CoS11').html(" ");
	$('#CoS12').html(" ");
	$('#CoS13').html(" ");
	$('#CoS14').html(" ");
	$('#CoS15').html(" ");
	$('#CoS21').html(" ");
	$('#CoS22').html(" ");
	$('#CoS23').html(" ");
	$('#CoS24').html(" ");
	$('#CoS25').html(" ");
	$('#CoS31').html(" ");
	$('#CoS32').html(" ");
	$('#CoS33').html(" ");
	$('#CoS34').html(" ");
	$('#CoS35').html(" ");
	$('#CoS41').html(" ");
	$('#CoS42').html(" ");
	$('#CoS43').html(" ");
	$('#CoS44').html(" ");
	$('#CoS45').html(" ");
	$('#CoS51').html(" ");
	$('#CoS52').html(" ");
	$('#CoS53').html(" ");
	$('#CoS54').html(" ");
	$('#CoS55').html(" ");
}

function getRandomInt(tn, focus, diff, nd20) {
	t = parseFloat(tn);
	f = parseFloat(focus);
	n = parseInt(nd20);
	d = parseFloat(diff);

	// The Probability of a single die getting 
	// [0] no success
	// [1] one success
	// [2] two success
	var successProbability = [0, 0, 0];

	if ( t < f ) f = t;

	successProbability[0] = parseFloat(( 20.0 - t ) / 20.0);
	successProbability[1] = parseFloat(( t - f ) / 20.0);
	successProbability[2] = parseFloat(f / 20.0);

	// Number of possible outcomes for 5 dice.
	// Each dice has three outcomes.
	// no success, one success, two success
	var numPossibleOutcomes = Math.pow( 3, n );

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
	for (var die5 = 0; die5 < 3; die5++) {
		for (var die4 = 0; die4 < 3; die4++) {
			for (var die3 = 0; die3 < 3; die3++) {
				for (var die2 = 0; die2 < 3; die2++) {
					for (var die1 = 0; die1 < 3; die1++) {
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

  return p.toFixed(1) + "%";
}