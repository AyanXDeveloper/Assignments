// JS Assignment Chap 31 - 35


// Question 1

// var date = new Date()
// console.log(date)


// Question 2

// var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
// var date = new Date()
// var curMonth = date.getMonth()
// console.log("Current Month: " + months[curMonth])


// Question 3 and 4

// var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var date = new Date()
// var curDay = date.getDay()
// console.log("Current Day: " + days[curDay])
// if (curDay === days[0] || curDay === days[6]) {
//     alert("It's a fun Day :)")
// } else {
//     alert("It's Not a Fun Day :(")
// }


// Question 5

// var date = new Date()
// var days = date.getDate()
// if (days <= 15) {
//     alert("First fifteen days of the month")
// } else {
//     alert("Last days of the month")
// }


// Question 6

// var curDate = new Date()
// console.log("Current Date: " + curDate)
// var jan1 = curDate.getTime()
// console.log("Elapsed millisecods from January 1, 1970: " + jan1)
// var minJan = jan1 / (1000 * 60 * 60)
// console.log("Elapsed mintes from January 1, 1970: " + minJan)


// Question 7

// var date = new Date()
// var time = date.getHours()
// if (time <= 12) {
//     alert("It's AM")
// } else {
//     alert("Its PM")
// }


// Question 8

// var laterDate = new Date("December 31, 2020")
// console.log("Later Date: " + laterDate)


// Question 9

// var today = new Date()
// var ram1 = new Date("June 18, 2015")

// var mstoday = today.getTime()
// var msram1 = ram1.getTime()

// var daysPass = mstoday - msram1

// var diff = daysPass / (1000 * 60 * 60 * 24)
// console.log(Math.floor(diff) + " days have passed since 1st Ramadan, 2015")


// Question 10

// var refDate = new Date("December 05, 2015 22:50:16")
// var date2015 = new Date("2015")

// var msrDate = refDate.getTime()
// var msDate2015 = date2015.getTime()

// var diff = msrDate - msDate2015

// var msdiff = diff / (1000 * 60)
// alert(Math.floor(msdiff))



// Question 11

var date = new Date()
console.log("Current Date: " + date)
var time = date.getHours(-5)
console.log(time)