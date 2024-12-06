// Primitive

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
let userEmail = undefined

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid); // false

const bigNumber = 346789342612

console.log(typeof(bigNumber)) //BIgInt

const temp = null;
console.log(typeof(temp)) // object


// Reference Type (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "ironman"]

let obj = {
    name:"Shailesh",
    age :40,
    profession: "Student"
}


const fun = function(){
    console.log("Hello I am function");
}

console.log(typeof(fun)) // function

