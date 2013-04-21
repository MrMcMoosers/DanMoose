alert("OAK: Hello, there! Glad to meet you!");
alert("OAK: Welcome to the world of POKéMON!");
alert("OAK: My name is OAK.");
alert("OAK: People affectionately refer to me as the POKéMON PROFESSOR.");
alert("OAK: This world...");
alert("OAK: ...is inhabited far and wide by creatures called POKéMON.");
alert("OAK: For some people, POKéMON are pets. Others use them for battling.");
alert("OAK: As for myself...");
alert("OAK: I study POKéMON as a profession.");
alert("OAK: But first, tell me a little about yourself.");
var genderQuestion = function(gender) {
	if (gender === "BOY" || gender === "GIRL") {
		alert("OK. You're a " + gender + ".");
	}
	else {
		genderQuestion(prompt("OAK: Now tell me. Are you a boy? Or are you a girl?","BOY or GIRL").toUpperCase);
	}
};
genderQuestion(prompt("OAK: Now tell me. Are you a boy? Or are you a girl?","BOY or GIRL").toUpperCase);
var name = prompt("OAK: Let's begin with your name. What is it?","Type your name here").toUpperCase;
function nameConfirm(confirm) {
	if (confirm === "YES") {}
	else {
		prompt("OAK: Your name?","Type your name here").toUpperCase;
	}
}
nameConfirm(prompt("OAK: Right... So your name is " + name + "?","YES or NO")).toUpperCase;