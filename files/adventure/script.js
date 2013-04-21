alert("WELCOME TO BIOCOCK.");
alert("You wake up in a strange land. The smell of fart fills your nose.");
var first = prompt("Do you want to STAND UP or LIE DOWN?").ToUpperCase();
switch(first){
	case "STAND UP":
		alert("You die. The end.");
		break;
	case "LIE DOWN":
		alert("You live. The end.");
		break;
	default:
		alert("You didn't choose a valid option, idiot.");
}