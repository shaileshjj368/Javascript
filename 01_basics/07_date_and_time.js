
// Dates
let date = new Date()
console.log(date.toString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

console.log(typeof date) // object

let mydate = new Date(2002, 0,31, 9,45)
console.log(mydate.toDateString())

// Specific formate of date
let formatedate = new Date("01-31-2002")
console.log(formatedate.toLocaleString())

let getNow = Date.now()
console.log(getNow) // returns millisecond from 1st Jan 1970

console.log(formatedate.getTime()) // returns milliseconds from that date

console.log(Math.floor(formatedate.getTime()/1000))

// jan is considered as first element of month array with is at 0


mydate.toLocaleString('default', {
    weekday: "long"
})
// editing the toLocalString 
// first is internationalization and second is object to have specific values with datatypes
