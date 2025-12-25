// Set Practise Assignment

// Normal Array
let arr = [1,2,3,4,5,3,1,5,6]

// Set = Removes the same values from the array
// Returns = Object

// Set
let mySet = new Set(arr)

// Output
console.log("Original Array")
console.log(arr)
console.log("After Removing Same Values")
console.log(mySet)

// Set Methods:

// Add Method
mySet.add(10)
mySet.add("abc")
mySet.add(true)
mySet.add({xyz : "qwe"})
mySet.add([9,8])
console.log("After Adding Different Values")
console.log(mySet)

// Delete Method
mySet.delete(1)
mySet.delete("abc")
mySet.delete(true)
console.log("After Deleting Different Values")
console.log(mySet)

// Has Method
// Has =  Tell if that property is present in the object or not
// Returns = Boolean Value(True or False)
console.log("After checking if 5 exists or not")
console.log(mySet.has(5))

// Size Method
console.log("After checking the number of Element in the Object")
console.log(mySet.size)

// Clear Method
// Clear = Empty's the whole Object
mySet.clear()
console.log("After Clearing the Whole Object")
console.log(mySet)



// Map Practise Assignment

let myMap = new Map()

// Set Method
myMap.set("name", "John")
myMap.set("age", 30)
myMap.set("isStudent", false)
console.log("After Setting Different Key-Value Pairs")
console.log(myMap)

// Get Method
console.log("After Getting the Value of name")
console.log(myMap.get("name"))

// Delete Method
myMap.delete("age")
console.log("After Deleting age Key-Value Pair")
console.log(myMap)

// Has Method
console.log("After checking if isStudent Key exists or not")
console.log(myMap.has("isStudent"))

// Size Method
console.log("After checking the number of Key-Value Pairs in the Map")
console.log(myMap.size)

// Clear Method
myMap.clear()
console.log("After Clearing the Whole Map")
console.log(myMap)