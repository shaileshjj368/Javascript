const score = 92

//explicitly define the datatype
const balance = new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(typeof(balance)) // String
console.log(balance.toFixed(2)) // sets the precision two 100.00

const othernum = 23.45
console.log(othernum.toPrecision(1))