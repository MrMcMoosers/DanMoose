confirm("Guess a number between 1 and 10, inclusive. If you're number is the same as the computer's number, you win.");
var userNum = prompt("Guess a number between 1 and 10","Type your number here");
var computerNum = Math.floor(Math.random() * 10 + 1);
var tries = 0;
var plural = "tries";
var singular = "try";
while (userNum != computerNum) {
	if (userNum > 10) {
		userNum = prompt("That number is above 10. Guess a number between 1 and 10, inclusive.","Type your number here");
		tries++;
	}
	else if (userNum < 1) {
		userNum = prompt("That number is below 1. Guess a number between 1 and 10, inclusive.","Type your number here");
		tries++;
	}
	else if (userNum < computerNum) {
		userNum = prompt("Guess higher.","Type your number here");
		tries++;
	}
	else if (userNum > computerNum) {
		userNum = prompt("Guess lower.","Type your number here");
		tries++;
	}
	else {
		userNum = prompt("That's not a number. Guess a number between 1 and 10.","Type your number here");
		tries++;
	}
}
tries++;
if (tries > 1) {
	alert("You win! It took you " + tries + " " + plural + ".");
}
else {
	alert("You win! It took you " + tries + " " + singular + "!");
}