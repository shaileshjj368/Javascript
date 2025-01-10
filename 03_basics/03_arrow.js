console.log(this) // returns empty object
/**but when you do same in browser console it returns window object */

const user = {
    username: "shailesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // returns object
    }

}


user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this) // returns object with modified value

function code(){
    let username = "shailesh"
    console.log(this.username); //undefined 
}
code()

const coding = function () {
    let username = "shailesh"
    console.log(this.username); // undefined
}
coding()
//arrow function
const coder =  () => {
    let username = "shailesh"
    console.log(this.username) // undefined
    console.log(this); // {}
}
coder()


// cannot access "this" in function by anytype of declaration

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => {username: "shailesh"} // undefined

const addTwo = (num1, num2) => ({username: "shailesh"}) // to return object () are required

console.log(addTwo(3, 4))
