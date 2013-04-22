var potions = 0;
var superPotions = 0;
var hyperPotions = 0;
var maxPotions = 0;
var elixers = 0;
var maxElixers = 0;
var ether = 0;
var maxEther = 0;
var pokeballs = 0;
var greatballs = 0;
var ultraballs = 0;
var masterball = false;
var oldRod = false;
var goodRod = false;
var superRod = false;
var townMap = false;
var oaksParcell = false;
var potionPC = false;
var starterPicked = false;
var runningShoes = false;

alert("WELCOME TO POKeMON FIRE RED VERSION")
alert("In the world which you are about to enter, you will embark on a grand adventure with you as the hero. Speak to people and check things wherever you go, be it towns, roads, or caves. Gather information and hints from every source.");
alert("New paths will open to you by helping people in need, overcoming challenges, and solving mysteries. At times, you will be challenged by others and attacked by wild creatures. Be brave and keep pushing on.");
alert("Through your adventure, we hope that you will interact with all sorts of people and achieve personal growth. That is our biggest objective. Press OK, and let your adventure begin!");
alert("OAK: Hello, there! Glad to meet you!");
alert("OAK: Welcome to the world of POKeMON!");
alert("OAK: My name is OAK.");
alert("OAK: People affectionately refer to me as the POKeMON PROFESSOR.");
alert("OAK: This world...");
alert("OAK: ...is inhabited far and wide by creatures called POKeMON.");
alert("OAK: For some people, POKeMON are pets. Others use them for battling.");
alert("OAK: As for myself...");
alert("OAK: I study POKeMON as a profession.");
alert("OAK: But first, tell me a little about yourself.");
function genderQuestion(gender) {
	switch(gender) {
		case "BOY" || "GIRL":
		break;
		default:
			genderQuestion(prompt("OAK: Now tell me. Are you a boy? Or are you a girl?","BOY or GIRL").toUpperCase());
	}
}
genderQuestion(prompt("OAK: Now tell me. Are you a boy? Or are you a girl?","BOY or GIRL").toUpperCase());
var name = prompt("OAK: Let's begin with your name. What is it?","Type your name here").toUpperCase();
function nameConfirm(confirm) {
	switch(confirm) {
		case "YES":
		break;
		default:
			nameConfirm(prompt("OAK: Your name?","Type your name here").toUpperCase());
	}
}
nameConfirm(prompt("OAK: Right... So your name is " + name + ".","YES or NO")).toUpperCase();
alert("OAK: This is my grandson.");
alert("OAK: He's been your rival since you both were babies.");
var rivalName = prompt("...Erm, what was his name now?","Type your rival's name here").toUpperCase();
function rivalNameConfirm(confirm) {
	switch(confirm) {
		case "YES":
			alert("That's right! I remember now! His name is " + rivalName + "!");
		break;
		default:
			rivalName = prompt("Your rival's name?","Type your rival's name here").toUpperCase();
			rivalNameConfirm(prompt("...Er, was it " + rivalName + "?","YES or NO").toUpperCase());
	}
}
rivalNameConfirm(prompt("...Er, was it " + rivalName + "?","YES or NO").toUpperCase());
alert("OAK: " + name + "!");
alert("OAK: Your very own POKeMON legend is about to unfold!");
alert("OAK: A world of dreams and adventures with POKeMON awaits! Let's go!");
alert(name + " played with the NES.");
alert("...Okay! It's time to go!");
/*go downstairs or go to computer*/
function first(option) {
	switch(option) {
		case "DOWNSTAIRS":
			alert("You go downstairs and see your mom sitting at the table.");
			alert("MOM: ...Right. All boys leave home someday. It said so on TV.");
			alert("MOM: Oh, yes. PROF. OAK, next door, was looking for you.");
		case "COMPUTER":
			alert(name + " booted up the PC.");
			function computerChoice(choice) {
				switch(choice) {
					case "ITEM STORAGE":
						if (potionPC === false) {
							potions++;
							potionPC = true;
							alert("There is a potion in your storage. You take it out, and it is now in your bag. You currently have " + potions + " potions.");
						}
						else {
							alert("There are no items");
						}
						computerChoice(prompt("What would you like to do?","ITEM STORAGE, MAILBOX, or TURN OFF").toUpperCase());
					break;
					case "MAILBOX":
						alert("There is no mail.");
						computerChoice(prompt("What would you like to do?","ITEM STORAGE, MAILBOX, or TURN OFF").toUpperCase());
					break;
					case "TURN OFF":
						alert("You turned off the PC.");
						first(prompt("What would you like to do? Go DOWNSTAIRS or go to your COMPUTER?","DOWNSTAIRS or COMPUTER").toUpperCase());
					break;
					default:
						computerChoice(prompt("What would you like to do?","ITEM STORAGE, MAILBOX, or TURN OFF").toUpperCase());
				}
			}
			computerChoice(prompt("What would you like to do?","ITEM STORAGE, MAILBOX, or TURN OFF").toUpperCase());
		break;
		default:
			first(prompt("What would you like to do? Go DOWNSTAIRS or go to your COMPUTER?","DOWNSTAIRS or COMPUTER").toUpperCase());
	}
}
first(prompt("What would you like to do? Go DOWNSTAIRS or go to your COMPUTER?","DOWNSTAIRS or COMPUTER").toUpperCase());
