// var char = prompt("Enter Number or String:");

// if (char && char.length === 1) {
//     if (char >= "A" && char <= "Z") {
//         alert("The Entered character is an UPPERCASE letter: " + char);
//     } else if (char >= "a" && char <= "z") {
//         alert("The Entered character is a lowercase letter: " + char);
//     } else if (!isNaN(char)) {
//         alert("The Entered character is a NUMBER: " + char);
//     } else {
//         alert("The Entered character is something else: " + char);
//     }
// } else {
//     alert("You didn’t enter a valid single character!");
// }

// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");

// if(num1 > num2){
//     alert("Num1 is greater")
// } else if (num1 < num2){
//     alert("Num2 is greater")
// } else if(num1 == num2){
//     alert("both number are same")
// }else{
//     alert("Try Again")
// }

// var num1 = prompt("Enter Your Number")
// if (num1 > 0){
//     alert("number is positive")
// } else if (num1 < 0){
//     alert("number is negative")
// }
// else{
//     alert("number is 0")
// }

// var char = prompt("Enter the alphabet")
// if (char.length == 1){
//     if(char == "a"|| char == "e" || char == "i" || char == "o" || char== "u" ){
//         alert("number is a vowel")
//     }
//     else{
//         alert("not a vowel")
//     }
// } 
// else{
//     alert("try again")
// }

// let education = ["SSC","HSC","BCS","BS","BCOM","MS","MPHILL","PHD"];
// console.log(education[0]);
// console.log(education[1]);
// console.log(education[2]);
// console.log(education[3]);
// console.log(education[4]);
// console.log(education[5]);
// console.log(education[6]);
// console.log(education[7]);

// let students = ["Ali", "Sara", "Ahmed"];
// let scores = [420, 350, 480];
// let totalMarks = 500;
// for (let i = 0; i < students.length; i++) {
//     let percentage = (scores[i] / totalMarks) * 100;
//     console.log(students[i] + " scored " + scores[i] + " marks. Percentage: " + percentage.toFixed(2) + "%");
// }

function checkForLastName() {
    if (document.getElementById("lastNameField").value.length === 0) {
        alert("Please enter your last name");
        return false;
    }
}
