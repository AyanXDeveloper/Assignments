<<<<<<< HEAD
// ...........................
// -----------------------

// CHAPTER 4 ASSIGNMENT

// -----------------------
// ...........................


// Q1: Declare 3 variables in one statement.

var myName = "ayan", age = 13, myClass = 9
console.log(myName, age, myClass)


// Q2: Declare 5 legal & 5 illegal variable names.

// legal
var mySelf, about, $dollar, saylani_welfare, black10;
// illegal
// var aboutme, 50dollar, hello-world, ayan zaveri, HOW ARE YOU,


// Q3: Display Multiple Things In Browser

document.write("<h1> JS Variable Naming Rules </h1>")
document.write("<br>")
document.write("<p> Variable names can only contain <b>Underscore (_)</b>, <b>$</b>, <b>Number</b> and <b>Letter</b> For example <b>$my_1stVariable</b> </p>")
document.write("<p> Variable must begin with a <b>Underscore (_)</b>, <b>$</b>, or <b>Letter</b> For example <b>$name, _name or name</b> </p>")
document.write("<p> Variable names are case <b>Sensitive</b></p>")
document.write("<p> Variable names should not be JS <b>Keywords</b></p>")



// ...........................
// -----------------------

// CHAPTER 5 ASSIGNMENT

// -----------------------
// ...........................

document.write("<br><br><h3>Chapter 5</h3><br>")


// Q1: Write a program that take two numbers & add them in a new variable.

var num1 = 3
var num2 = 5
var sum = num1 + num2
console.log(num1 + num2)
document.write("<p> Sum of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + sum + "</p>")


// Q2: Repeat task1 for subtraction, multiplication, division & modulus

// Subtraction

var num1 = 3
var num2 = 5
var sum = num1 - num2
console.log(num1 - num2)
document.write("<p>" + "Subtraction of" + " " + num2 + " " + "from" + " " + num1 + " " + "is" + " " + sum + "</p>")

// Multiplication

var num1 = 3
var num2 = 5
var sum = num1 * num2
console.log(num1 * num2)
document.write("<p>" + "Multiplication of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + sum + "</p>")

// Division

var num1 = 3
var num2 = 5
var sum = num2 / num1
console.log(num2 / num1)
document.write("<p>" + "Multiplication of" + " " + num2 + " " + "from" + " " + num1 + " " + "is" + " " + sum + "</p>")

// Modulus

var num1 = 3
var num2 = 5
var sum = num2 % num1
console.log(num2 % num1)
document.write("<p>" + "Remainder of" + " " + num1 + " " + "from" + " " + num2 + " " + "is" + " " + sum + "</p>")

// Q3: JS Mathematic Expressions

var a;
document.write("Value after variable declaration is: " + a + "<br>");

a = 5;
document.write("Initial value: " + a + "<br>");

a++;
document.write("Value after increment is: " + a + "<br>");

a += 7;
document.write("Value after addition is: " + a + "<br>");

a--;
document.write("Value after decrement is: " + a + "<br>");

var remainder = a % 3;
document.write("The remainder is: " + remainder);

// Q4: Ticket Price

var ticket1 = 600
var ticket6 = ticket1 * 5
document.write("<p> <br> Total cost to buy 5 tickets is" + " " + ticket6)
console.log(ticket6)

// Q5: Table of 4

var tableNumber = 4;
for (var i = 1; i <= 10; i++) {
    document.write("<p>" + tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

// Q6: Temperature

var celsius = 25
var fahrenheit = (celsius * 9 / 5) + 32
console.log(fahrenheit)
document.write("<p>" + celsius + "°C is " + fahrenheit + "°F<br>")

var f = 70
var c = (f - 32) * 5 / 9
document.write("<p>" + f + "°F is " + c + "°C");

// Q7: Shopping Receipt

var item1 = 650
var item2 = 100
var shipping = 100
var total = (item1 * 3) + (item2 * 7) + shipping

document.write("<br><br>Price of Item 1 is" + " " + item1)
document.write("<br>Quantity of Item 1 is" + " " + 3)
document.write("<br>Price of Item 2 is" + " " + item2)
document.write("<br>Quantity of Item 2 is" + " " + 7)
document.write("<br>Shipping Charges are" + " " + shipping)
document.write("<p> Total Cost of your order is" + " " + total + " " + "PKR")

// Q8: Percentage

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("<p>Total Marks:" + " " + totalMarks)
document.write("<br>Obtained Marks:" + " " + obtainedMarks)
document.write("<br>Percentage: " + percentage + "%");

// Q9: Currency Exchange

document.write("<h1>Currency in PKR</h1>")
var usd = 10;
var riyal = 25;
var totalMoney = (usd * 104.80) + (riyal * 28);
document.write("Total in PKR: " + totalMoney);

// Q10: Age Calculator

document.write("<h1>Age Calculator</h1>")
var recentYear = 2025;
var birthYear = 2003;
var age1 = recentYear - birthYear;
var age2 = age1 - 1;
document.write("<p>They are either " + age2 + " or " + age1 + " years old.");

// Q11: Geometrizer

document.write("<h1>The Geometrizer</h1>")
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("Radius of a circle" + " " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);

// Q12: Lifetime Supply Calculator

document.write("<h1>The Lifetime Supply Calculator</h1>")
var favSnack = "Chocolate"
var currentAge = 13
var estMaxAge = 100
var snacksPerDay = 10
var totalSnacksNeeded = (estMaxAge - currentAge) * 365 * snacksPerDay
document.write("<p> Favorite Snack:" + " " + favSnack)
document.write("<p> Current age:" + " " + currentAge)
document.write("<p> Estimated maximum age:" + " " + estMaxAge)
document.write("<p> Amount of snacks per day:" + " " + snacksPerDay)
document.write("<p> You will need " + totalSnacksNeeded + " " + favSnack + " to last you until the ripe old age of " + estMaxAge);


// ...........................
// -----------------------

// CHAPTER 5 ASSIGNMENT

// -----------------------
// ...........................

=======
// ...........................
// -----------------------

// CHAPTER 4 ASSIGNMENT

// -----------------------
// ...........................


// Q1: Declare 3 variables in one statement.

var myName = "ayan", age = 13, myClass = 9
console.log(myName, age, myClass)


// Q2: Declare 5 legal & 5 illegal variable names.

// legal
var mySelf, about, $dollar, saylani_welfare, black10;
// illegal
// var aboutme, 50dollar, hello-world, ayan zaveri, HOW ARE YOU,


// Q3: Display Multiple Things In Browser

document.write("<h1> JS Variable Naming Rules </h1>")
document.write("<br>")
document.write("<p> Variable names can only contain <b>Underscore (_)</b>, <b>$</b>, <b>Number</b> and <b>Letter</b> For example <b>$my_1stVariable</b> </p>")
document.write("<p> Variable must begin with a <b>Underscore (_)</b>, <b>$</b>, or <b>Letter</b> For example <b>$name, _name or name</b> </p>")
document.write("<p> Variable names are case <b>Sensitive</b></p>")
document.write("<p> Variable names should not be JS <b>Keywords</b></p>")



// ...........................
// -----------------------

// CHAPTER 5 ASSIGNMENT

// -----------------------
// ...........................

document.write("<br><br><h3>Chapter 5</h3><br>")


// Q1: Write a program that take two numbers & add them in a new variable.

var num1 = 3
var num2 = 5
var sum = num1 + num2
console.log(num1 + num2)
document.write("<p> Sum of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + sum + "</p>")


// Q2: Repeat task1 for subtraction, multiplication, division & modulus

// Subtraction

var num1 = 3
var num2 = 5
var sum = num1 - num2
console.log(num1 - num2)
document.write("<p>" + "Subtraction of" + " " + num2 + " " + "from" + " " + num1 + " " + "is" + " " + sum + "</p>")

// Multiplication

var num1 = 3
var num2 = 5
var sum = num1 * num2
console.log(num1 * num2)
document.write("<p>" + "Multiplication of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + sum + "</p>")

// Division

var num1 = 3
var num2 = 5
var sum = num2 / num1
console.log(num2 / num1)
document.write("<p>" + "Multiplication of" + " " + num2 + " " + "from" + " " + num1 + " " + "is" + " " + sum + "</p>")

// Modulus

var num1 = 3
var num2 = 5
var sum = num2 % num1
console.log(num2 % num1)
document.write("<p>" + "Remainder of" + " " + num1 + " " + "from" + " " + num2 + " " + "is" + " " + sum + "</p>")

// Q3: JS Mathematic Expressions

var a;
document.write("Value after variable declaration is: " + a + "<br>");

a = 5;
document.write("Initial value: " + a + "<br>");

a++;
document.write("Value after increment is: " + a + "<br>");

a += 7;
document.write("Value after addition is: " + a + "<br>");

a--;
document.write("Value after decrement is: " + a + "<br>");

var remainder = a % 3;
document.write("The remainder is: " + remainder);

// Q4: Ticket Price

var ticket1 = 600
var ticket6 = ticket1 * 5
document.write("<p> <br> Total cost to buy 5 tickets is" + " " + ticket6)
console.log(ticket6)

// Q5: Table of 4

var tableNumber = 4;
for (var i = 1; i <= 10; i++) {
    document.write("<p>" + tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

// Q6: Temperature

var celsius = 25
var fahrenheit = (celsius * 9 / 5) + 32
console.log(fahrenheit)
document.write("<p>" + celsius + "°C is " + fahrenheit + "°F<br>")

var f = 70
var c = (f - 32) * 5 / 9
document.write("<p>" + f + "°F is " + c + "°C");

// Q7: Shopping Receipt

var item1 = 650
var item2 = 100
var shipping = 100
var total = (item1 * 3) + (item2 * 7) + shipping

document.write("<br><br>Price of Item 1 is" + " " + item1)
document.write("<br>Quantity of Item 1 is" + " " + 3)
document.write("<br>Price of Item 2 is" + " " + item2)
document.write("<br>Quantity of Item 2 is" + " " + 7)
document.write("<br>Shipping Charges are" + " " + shipping)
document.write("<p> Total Cost of your order is" + " " + total + " " + "PKR")

// Q8: Percentage

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("<p>Total Marks:" + " " + totalMarks)
document.write("<br>Obtained Marks:" + " " + obtainedMarks)
document.write("<br>Percentage: " + percentage + "%");

// Q9: Currency Exchange

document.write("<h1>Currency in PKR</h1>")
var usd = 10;
var riyal = 25;
var totalMoney = (usd * 104.80) + (riyal * 28);
document.write("Total in PKR: " + totalMoney);

// Q10: Age Calculator

document.write("<h1>Age Calculator</h1>")
var recentYear = 2025;
var birthYear = 2003;
var age1 = recentYear - birthYear;
var age2 = age1 - 1;
document.write("<p>They are either " + age2 + " or " + age1 + " years old.");

// Q11: Geometrizer

document.write("<h1>The Geometrizer</h1>")
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("Radius of a circle" + " " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);

// Q12: Lifetime Supply Calculator

document.write("<h1>The Lifetime Supply Calculator</h1>")
var favSnack = "Chocolate"
var currentAge = 13
var estMaxAge = 100
var snacksPerDay = 10
var totalSnacksNeeded = (estMaxAge - currentAge) * 365 * snacksPerDay
document.write("<p> Favorite Snack:" + " " + favSnack)
document.write("<p> Current age:" + " " + currentAge)
document.write("<p> Estimated maximum age:" + " " + estMaxAge)
document.write("<p> Amount of snacks per day:" + " " + snacksPerDay)
document.write("<p> You will need " + totalSnacksNeeded + " " + favSnack + " to last you until the ripe old age of " + estMaxAge);


// ...........................
// -----------------------

// CHAPTER 5 ASSIGNMENT

// -----------------------
// ...........................

>>>>>>> 7a7bbb7411f631ab88120fa5ffc11beaf1f39a07
document.write("<br><br><h3>Chapter 6</h3><br>")