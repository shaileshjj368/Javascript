// Array
const arr = [12,432,0, true, "ironman"]
// Javascripts are resizable with different datatypes in same arr

console.log(arr[0])

// it has shallow copy i.e same reference point

//another way
const myarr = new Array(1,2,3,4);

// Array methods

arr.push(6); // adds the last element
console.log(arr)
arr.pop(); // removes the last element
console.log(arr)

arr.unshift(9) // adds the first element 
console.log(arr)
arr.shift(); // removes the first element
console.log(arr)

console.log(arr.includes(0)) // returns boolean
console.log(arr.indexOf(9)) // returns the value at that index but if any other index which is not there return -1

const newArr = arr.join()
console.log(arr)
console.log(newArr)
console.log(typeof newArr) // makes the datatypes string of the array

console.log("A ", arr);
const myar = arr.slice(1,3)
console.log(myar)
console.log("B ", arr)

const myars = arr.splice(1,3)
console.log(myars)
console.log("C ", arr)

/* Slice function does not modify the main array and not does not
consider the range element where as splice function modify the main
array and considers the range element  */