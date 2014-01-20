
var phoneticAlphabet = {
  "a":"alpha",
  "b":"bravo",
  "c":"charlie",
  "d":"delta",
  "e":"echo",
  "f":"foxtrot",
  "g":"golf",
  "h":"hotel",
  "i":"india",
  "j":"juliett",
  "k":"kilo",
  "m":"mike",
  "n":"november",
  "o":"oscar",
  "p":"papa",
  "q":"quebec",
  "r":"romeo",
  "s":"sierra",
  "t":"tango",
  "u":"uniform",
  "v":"victor",
  "w":"whiskey",
  "x":"xray",
  "z":"zulu"};

var name = "michele";


// var message = prompt("write your message");

message = prompt("Type your message")

splitName = function(message) {
  arrayOfLetters = message.toLowerCase().split("");
  return arrayOfLetters;
}

function phoneticize(letter) {
  var result = phoneticAlphabet[letter]
  return result;
}

console.log(splitName(message).map(phoneticize));

// var words = ["foot", "goose", "moose", "kangaroo"];
// console.log(words.map(fuzzyPlural));

// ["feet", "geese", "meese", "kangareese"]


/* (trying to do the whole design recipe thing over here)


String -> String

consumes a string, finds the index position of each
letter in the alphabet array, and returns the words
of the same index position in the phonetic alphabet array as one string

phoneticize("michele") = ("mike india charlie hotel echo lima echo")
phoneticize("hey you") = ("hotel echo yankee yankee oscar uniform")


function phoneticize(str) (str) - stub
function phoneticize(str) (...str) - template

function phoneticize(str) (
	str.split

)

while (i < fish.length) { console.log(fish[i]); i += 1;
}








//console.log(phoneticAlphabet.indexOf())


/*[1,2,3].map(function(i) { return i*2; } )

splitName.map(
	function() {
		return
	}

	)*/



