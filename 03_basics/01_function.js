function sayName(){
    console.log("Shailesh")
}

// reference of function
sayName
// call of the function
sayName()

function addTwoNum(num1, num2){
    console.log(num1+num2)
}

addTwoNum() // NaN
addTwoNum(3,4) //7
addTwoNum(1,"9") //19


function login (name) { 
    return `${name}, is logged in`
 }

console.log(login("Tatha"))
console.log(login()) // undefined

function understand_undefined (name){
    if(!name){ // here the condition is ! because undefined has default value of false in case of boolean
        console.log("Please enter the name")
        return;
    }
    return `${name}, logged in`
}

console.log(understand_undefined()) // display the msg for the undefined

// can give dafalut value to parameters
function me(name="Shailesh"){
    console.log(`${name}, good morning`)
}
me()

function calculateprice(num){
    return num
}

console.log(calculateprice(3))
console.log(calculateprice(200,300,400)) //200 

//use rest operator (which same as spread operator)
function calculateprice2(...num){
    return num
}

console.log(calculateprice2(2300,3400))

const item = {
    name: "Pencil",
    price: 199
}

function handleObject(any){
    console.log(`item is ${any.name} and price is ${any.price}`)
}
handleObject(item)