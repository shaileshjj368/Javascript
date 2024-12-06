
const score = 92

//explicitly define the datatype
const balance = new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(typeof(balance)) // String
console.log(balance.toFixed(2)) // sets the precision two 100.00 after decimal point

const othernum = 23.45666
console.log(othernum.toPrecision(3))
// sets the precision from main number and not decimal point

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // put commas to get easy figure reading


/********************************************************** */

console.log(Math);
console.log(Math.abs(-4));// makes number positive
console.log(Math.round(4.3)) // if decimal after pointer>5 next number else same number 
console.log(Math.ceil(4.6))  // always next number
console.log(Math.floor(4.2)) // always same number

console.log(Math.min(4,3,9,10)) // returns minimum number
console.log(Math.max(4,3,9,10)) // returns maximum number

console.log(Math.random()) // returns decimal value between 0 and 1 
// to get the values between 0 and 9 
console.log(Math.random()*10)
// for values between 0 -9 we should avoid the condition 0.0
console.log(Math.random()*10+1)
// to avoid decimal points
console.log(Math.floor(Math.random()*10+1))

// Now to get random values between some parameters
let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)