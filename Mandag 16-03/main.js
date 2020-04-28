
var array123 = [1,2,10,9, 100000, 420, 5, 1, 8008, 69];

console.log("Skabte array: " + array123);

console.log("Første tal: "  + array123[0] + " næste tal: " + array123[array123.length-1]);

var array456 = ["Fuck" + "jeg" + "kan" + "ikke" + "lide" + "Idehistorie" + "men" + "programmering" + "er"+ "nice"];

var array12345og6 = array123.concat(array456)

console.log("Sammensatte array: " + array12345og6);

var array456_v2 = array12345og6.slice(array123.length);

console.log("Sliced function: " + array456_v2);

console.log("Indexof: " + array123.indexOf(420) + " " + array123.indexOf(69))