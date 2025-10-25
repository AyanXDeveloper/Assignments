// CHAPTER 12 - 13

// Question 1

let char = prompt("Enter a character:");

if (!isNaN(char)) {
    console.log("It is a number.");
} else if (char >= 'A' && char <= 'Z') {
    console.log("It is an uppercase letter.");
} else if (char >= 'a' && char <= 'z') {
    console.log("It is a lowercase letter.");
} else {
    console.log("It is neither a number nor a letter.");
}

// Question 2

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
if (num1 > num2) {
    console.log("First number is greater than second number.");
} else if (num1 < num2) {
    console.log("Second number is greater than first number.");
} else {
    console.log("Both numbers are equal.");
}

// Question 3

let number = parseFloat(prompt("Enter a number:"));
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Question 4

let vowel = prompt("Enter a character:").toLowerCase();
if (['a', 'e', 'i', 'o', 'u'].includes(vowel)) {
    console.log("It is a vowel.");
}else {
    console.log("It is not a vowel.");
}

// Question 5

let password = "password123";
let userInput = prompt("Enter your password:");
if (userInput === "") {
    console.log("Please enter your password.");
} else if (userInput === password) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

// Question 6

let greeting;
let hour = parseInt(prompt("Enter the current hour (0-23):"));
if (hour < 0 || hour > 23) {
    console.log("Invalid hour.");
} else if (hour < 18) {
    greeting = "Good day!";
} else {
    greeting = "Good evening!";
}

console.log(greeting);