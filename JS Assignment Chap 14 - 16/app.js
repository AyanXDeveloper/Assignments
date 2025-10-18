// Question no 1
var students = [];

// Question no 2
var students =[];

// Question no 3
var foodItems =["biryani","handi","pizza","burger"];

// Question no 4

var num = [1,2,3,4,5,6];

// Question no 5 
var booleans = [true,false];

// Question no 6

var list =["biryani",true,12,"pizza",false,34]

// Question no 7

var qualifications = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"];

for (var i=0; i<qualifications.length;i++){
   document.write(qualifications[i] + "<br>"); 
}

// Question no 8

var studentsNames = ["Michael","John","Tony"];
var scores = [320,230,480];
var totalMarks = 500;

for (var i = 0; i < studentsNames.length; i++){
    var percentage = (scores[i] / totalMarks) *100;
    document.write("Score of" + studentsNames[i] + " is " + scores[i] +". Percentage:" + percentage + "%<br>");
}

// Question no 9

var colors = ["red","green","blue","orange","indigo","black","purple"];
document.write(colors)


var userColor = prompt("What color you want to add to the beginning");
colors.unshift(userColor);
document.write("Updated colors:" + colors);



var userColor = prompt("What color you want to add to the end");
colors.push(userColor);
document.write("Updated colors:" + colors);



var colors = ["red","green","blue","orange","indigo","black","purple"];

var color1 = prompt("Enter you first color at the beginning:");
var color2 = prompt("Enter your second color to add at the beginning");

colors.unshift(color1,color2);
document.write("Updated colors: " + colors);


var colors = ["red","green","blue","orange","indigo","black","purple"];

colors.shift();
document.write("Updated colors: " + colors);


var colors = ["red","green","blue","orange","indigo","black","purple"];

colors.pop();
document.write("Updated colors: " + colors);


var colors = ["red","green","blue","orange","indigo","black","purple"];

var userColor = prompt("At which position you want to add a color.(0 to " + colors.length + ")");

var newColor = prompt("Enter the color name u you want to add:")

colors.splice(userColor ,0, newColor);

document.write("Updated colors: " + colors);


var colors = ["red","green","blue","orange","indigo","black","purple"];

var userColor = prompt("At which position you want to delete the color.(0 to " + (colors.length - 1)+ ")");

var delColor = prompt("How many colors u you want to delete:")

colors.splice(userColor, delColor)

document.write("Updated colors: " + colors)

// Question 10

var stuScore = [320,230,480,120];
stuScore.sort();
document.write("Score in ascending order: " + stuScore);

// Question 11

var cities = ["Kar","Lhr","Isl","Que","Pesh"];
var selectedCities = cities.slice(2,4);

document.write("Cities:" + cities +"<br>");
document.write("Selected Cities"+ selectedCities);

// Question 12

var arr =["This","is","my","cat"];

var newArr= arr.join(" ");

document.write(newArr);
