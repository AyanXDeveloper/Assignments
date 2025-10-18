var gtn = prompt("Guess The Number from 1 to 10 in ( 2 Tries )");
console.log(gtn);
var guess = 9;
if (gtn == guess) {
    console.log("You guessed it right!");
    prompt("You guessed it right!");
} else if (gtn == 1 || gtn == 2 || gtn == 3) {
    console.log("low guess hai");
    prompt("low guess hai");
} else if (gtn == 4) {
    console.log("Thoda sa better guess");
    prompt("Thoda sa better guess");
} else if (gtn == 5) {
    console.log("qareeb ho rahe ho");
    prompt("qareeb ho rahe ho"); 
} else if (gtn == 6 || gtn == 7) {
    console.log("thoda sa or try karo");
    prompt("thoda sa or try karo"); 
} else if (gtn == 8 || gtn == 10) {
    console.log("Bas ek step door ho");
    prompt("Bas ek step door ho"); 
} else {
    console.log("You Please Write a Number Between 1 to 10!");
    prompt("You Please Write a Number Between 1 to 10!");
}