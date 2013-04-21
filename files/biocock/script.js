alert("WELCOME TO BIOCOCK");
alert("You wake up in a strange land. The smell of fart fills your nose.");
function train(option) {
	switch(option) {
		case "STAND UP":
			alert("You see a train coming, and you die. The end. (Reload the page to play again.)");
		break;
		case "LIE DOWN":
			alert("A train passes by directly over your nose. If you had stood, you would have died. Good choice");
			alert("You start walking in this strange city, and you see very awkwardly-shaped buildings.")
			function fall(option) {
				switch(option) {
					case "CONTINUE":
						alert("Without noticing, you walk off the city. You hadn't realized yet that it was flying in the sky. Aren't you a little stupid? You fall to your death and die.");
					break;
					case "STOP":
						alert("You stop walking to smell the roses. While looking down at the ground, you notice that this city is flying above ground.");
					break;
					default:
						fall(prompt("That's not an option, dummy. Do you CONTINUE walking or STOP?","CONTINUE or STOP").toUpperCase());
				}
			}
			fall(prompt("Do you CONTINUE walking or STOP?","CONTINUE or STOP").toUpperCase());
		break;
		default:
			train(prompt("That's not a valid option, idiot. Do you want to STAND UP or LIE DOWN?","STAND UP or LIE DOWN").toUpperCase());
	}
}
train(prompt("Do you want to STAND UP or LIE DOWN?","STAND UP or LIE DOWN").toUpperCase());