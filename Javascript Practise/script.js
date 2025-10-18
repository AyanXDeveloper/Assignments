let carBrands = ["BMW", "Mercedes", "Ferrari"];
console.log(carBrands)
// console.log(carBrands[1])
// console.log(carBrands[2])

// carBrands.pop();

// carBrands.push("Audi")

// carBrands.unshift("Ford");

carBrands.splice(2, 2, "Mustang")

let bestCarBrands = carBrands.slice(1)
console.log(bestCarBrands)