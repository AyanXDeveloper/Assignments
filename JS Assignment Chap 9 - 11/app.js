<<<<<<< HEAD
// CHAPTER 9  ASSIGNMENT


// Question 1

var cities = prompt("Write you City name to Enter.")
if(cities == "karachi" || cities == "Karachi" || cities == "KARACHI") {
    alert("Welcome to the city of lights you can Enter");
}else {
    alert("You are not allowed to enter the city");
}

// Question 2

var gender = prompt("Enter your Gender")
if (gender == "male" || gender == "Male") {
    alert("Good Morning Sir")
}else {
    alert("Good Morning Ma’am")
}

// Question 3

var trafficSignal = prompt("Enter your Traffic Signal Color (RED , YELLOW, GREEN)")
if (trafficSignal = "red" || trafficSignal == "Red" || trafficSignal == "RED") {
    alert("Must Stop")
} else if (trafficSignal = "yellow" || trafficSignal == "Yellow" || trafficSignal == "YELLOW") {
    alert("Ready to Move")
} else if (trafficSignal = "green" || trafficSignal == "Green" || trafficSignal == "GREEN") {
    alert("Move Now")
}

// Question 4

var fuel = prompt("Enter your Fuel in liters")
if (fuel < 0.25) {
    alert("PLEASE!!! Refuel you car RIGHT AWAY")
}else {
    alert("You can move onto your Journey")
}

// Question 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// Question 6

var totalMarks = 300;
var obtainedMarks = prompt("Enter your Obtained Marks")
var percentage = (obtainedMarks / totalMarks) * 100;
if (percentage >= 80) {
    alert("Total Marks: " + totalMarks + "\nObtained Marks: " + obtainedMarks + "\nPercentage: " + percentage + "%\nGrade: A-one\nRemarks: Excellent");
}
else if (percentage >= 70) {
    alert("Total Marks: " + totalMarks + "\nObtained Marks: " + obtainedMarks + "\nPercentage: " + percentage + "%\nGrade: A\nRemarks: Good");
}
else if (percentage >= 60) {
    alert("Total Marks: " + totalMarks + "\nObtained Marks: " + obtainedMarks + "\nPercentage: " + percentage + "%\nGrade: B\nRemarks: You need to improve");
}
else if (percentage < 60) {
    alert("Total Marks: " + totalMarks + "\nObtained Marks: " + obtainedMarks + "\nPercentage: " + percentage + "%\nGrade: Fail\nRemarks: Sorry");
}

// Question 7

// Done is in Other Assignment

// Question 8

var number = prompt("Enter a Number to Check if it is Divisible by 3")
if (number % 3 === 0) {
    alert("The number " + number + " is divisible by 3");
}else {
    alert("The number " + number + " is not divisible by 3");
}

// Question 9

var number = prompt("Enter a Number to Check if it is Even or Odd")
if (number % 2 === 0) {
    alert("The number " + number + " is Even");
}else {
    alert("The number " + number + " is Odd");
}

// Question 10

var temperature = prompt("Enter the Temperature in Celsius")
if (temperature > 40) {
    alert("It is too hot outside.");
}else if (temperature > 30) {
    alert("The Weather today is Normal.");
}else if (temperature > 20) {
    alert("Today's Weather is cool.");
}else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
}else {
    alert("It is an Unbearable Temperature.");
}

=======
// CHAPTER 9  ASSIGNMENT


// Question 1

var cities = prompt("Write you City name to Enter.")
if(cities == "karachi" || cities == "Karachi" || cities == "KARACHI") {
    alert("Welcome to the city of lights you can Enter");
}else {
    alert("You are not allowed to enter the city");
}

// Question 2

var gender = prompt("Enter your Gender")
if (gender == "male" || gender == "Male") {
    alert("Good Morning Sir")
}else {
    alert("Good Morning Ma’am")
}

// Question 3

var trafficSignal = prompt("Enter your Traffic Signal Color (RED , YELLOW, GREEN)")
if (trafficSignal = "red" || trafficSignal == "Red" || trafficSignal == "RED") {
    alert("Must Stop")
} else if (trafficSignal = "yellow" || trafficSignal == "Yellow" || trafficSignal == "YELLOW") {
    alert("Ready to Move")
} else if (trafficSignal = "green" || trafficSignal == "Green" || trafficSignal == "GREEN") {
    alert("Move Now")
}

// Question 4

var fuel = prompt("Enter your Fuel in liters")
if (fuel < 0.25) {
    alert("PLEASE!!! Refuel you car RIGHT AWAY")
}else {
    alert("You can move onto your Journey")
}

// Question 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// Question 6

var totalMarks = 300;
var obtainedMarks = prompt("Enter your Obtained Marks")
var percentage = (obtainedMarks / totalMarks) * 100;
if (percentage >= 80) {
    alert("Total Marks: " + totalMarks + "\nObtained Marks: " + obtainedMarks + "\nPercentage: " + percentage + "%\nGrade: A-one\nRemarks: Excellent");
}
else if (percentage >= 70) {
    alert("Total Marks: " + totalMarks + "\nObtained Marks: " + obtainedMarks + "\nPercentage: " + percentage + "%\nGrade: A\nRemarks: Good");
}
else if (percentage >= 60) {
    alert("Total Marks: " + totalMarks + "\nObtained Marks: " + obtainedMarks + "\nPercentage: " + percentage + "%\nGrade: B\nRemarks: You need to improve");
}
else if (percentage < 60) {
    alert("Total Marks: " + totalMarks + "\nObtained Marks: " + obtainedMarks + "\nPercentage: " + percentage + "%\nGrade: Fail\nRemarks: Sorry");
}

// Question 7

// Done is in Other Assignment

// Question 8

var number = prompt("Enter a Number to Check if it is Divisible by 3")
if (number % 3 === 0) {
    alert("The number " + number + " is divisible by 3");
}else {
    alert("The number " + number + " is not divisible by 3");
}

// Question 9

var number = prompt("Enter a Number to Check if it is Even or Odd")
if (number % 2 === 0) {
    alert("The number " + number + " is Even");
}else {
    alert("The number " + number + " is Odd");
}

// Question 10

var temperature = prompt("Enter the Temperature in Celsius")
if (temperature > 40) {
    alert("It is too hot outside.");
}else if (temperature > 30) {
    alert("The Weather today is Normal.");
}else if (temperature > 20) {
    alert("Today's Weather is cool.");
}else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
}else {
    alert("It is an Unbearable Temperature.");
}

>>>>>>> 7a7bbb7411f631ab88120fa5ffc11beaf1f39a07
