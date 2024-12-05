
// Singleton : when we declare object as literal it is not singleton and by constructor it is singleton

// object literals

const sym = Symbol("key1")
// how to add symbol to object as key

const user = {
    name: 'shailesh',
    "city": "Mumbai",
    [sym]: "mykey1", // Symbol declaration
    profession: "student",
    email: "shailesh@google.com",
    isLoggedIn: true
}

console.log(user.email) // it will not access the city in above object
console.log(user["email"]) // key should be given as string
console.log(user["city"])

console.log(user[sym])
console.log(user) // sym will be shown as symbol and not string

user.email = "shailesh@microsoft.com"
console.log(user["email"])
// Object.freeze(user) // no changes will be applied to object
user.email = "shailesh@apple.com"
console.log(user["email"])

user.greeting = function () { 
    console.log(`Hello user, ${this.name}`)
 }

 console.log(user.greeting) 
 console.log(user.greeting()) 