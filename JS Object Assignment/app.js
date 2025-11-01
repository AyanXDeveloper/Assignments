// JS Object Assingment

// Question 1

// let itemsArray = [
//     {
//         name: "juice",
//         price: "50",
//         quantity: "3",
//     },
//     {
//         name: "cookie",
//         price: "30",
//         quantity: "9",
//     },
//     {
//         name: "shirt",
//         price: "880",
//         quantity: "1",
//     },
//     {
//         name: "pen",
//         price: "100",
//         quantity: "2",
//     },
// ]

// METHOD 1

// let item1 = Number(itemsArray[0].price) * Number(itemsArray[0].quantity)
// console.log("Each Item Price ==>", item1)
// let item2 = Number(itemsArray[1].price) * Number(itemsArray[1].quantity)
// console.log("Each Item Price ==>", item2)
// let item3 = Number(itemsArray[2].price) * Number(itemsArray[2].quantity)
// console.log("Each Item Price ==>", item3)
// let item4 = Number(itemsArray[3].price) * Number(itemsArray[3].quantity)
// console.log("Each Item Price ==>", item4)

// let totalItems = item1 + item2 + item3 + item4
// console.log("Total Items Prics ==>", totalItems)


// METHOD 2

// let totalItemsPrice = 0;
// for (let key in itemsArray) {
//     let eachItemPrice = Number(itemsArray[key].price) * Number(itemsArray[key].quantity)
//     console.log("Each Item Price ==>", eachItemPrice)

//     totalItemsPrice += eachItemPrice
//     console.log("Total Items Prics ==>", totalItemsPrice)
// }


// Question 2

// let data = {
//     name : "Ayan Zaveri",
//     wmail : "ayyanzaveri@gmailcom",
//     password : "ayan123",
//     age : 14,
//     gender : "male",
//     city : "Karachi",
//     country : "Pakistan",
// }

// console.log("Age ==>", data.age)
// console.log("Country ==>", data.country)
// console.log("First Name ==>", data.firstName)
// console.log("Last Name ==>", data.lastName)


// Question 3

// function Demo(a, b) {
//     this.name = a
//     this.email = b
// }
// console.log(new Demo("Ayan", "ayyanzaveri@gmail.com"))


// Question 4

// function enter() {
//     let name = document.getElementById("name").value
//     let gender = document.querySelector('input[name="gender"]:checked')?.value;
//     let address = document.getElementById("address").value
//     let education = document.querySelector('input[name="education"]:checked')?.value;
//     let profession = document.querySelector('input[name="profession"]:checked')?.value;

//     function Population(a, b, c, d, e) {
//         this.name = a
//         this.gender = b
//         this.address = c
//         this.education = d
//         this.profession = e
//     }

//     let pop = new Population(name, gender, address, education, profession)

//     console.log(pop)
// }