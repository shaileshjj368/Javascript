
// const tinderUser  = new Object() // Singleton Object

const tinderUser = {} // Non- singleton object

tinderUser.id = "123abc"
tinderUser.name = "Samay"
console.log(tinderUser)

const regularUser = {
    email: "samay@gmail.com",
    fullname:{ // object inside object
        userFullname: {
            firstname: "Samay",
            lastname: "Khan"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//combine two objects
// const obj3 = Object.assign(obj1, obj2)

// console.log(obj3)
// console.log(obj3==obj1) // returns true // if you want to merge the objects in obj1 then this code words
// console.log(obj1) // same as obj3

// But if we are returning a new object then why to modify the obj1

// const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3)
// console.log(obj3==obj1) // returns false
// because the obj1 and obj2 are merged into a single empty object {}


// But popular method is spread operator same as arrays
const obj3 = {...obj1,...obj2}
console.log(obj3)

// Array of objects
const users =[
    {
        name:"abc",
        id:23
    },
    {
        name:"xyz",
        id:32
    },
    {
        name:"lmn",
        id:34
    }
]

console.log(users[1].name)

// to display keys or values
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1)) // much less used every property of object is converted into array

console.log(obj1.hasOwnProperty('1'))

// Destructuring of the objects
const course = {
    name: "Cdac",
    price: "108000",
    courseInstructor:"me"
}

// console.log(course.courseInstructor) 
// syntactic sugar for above syntax which destructuring
const {courseInstructor: teacher} = course
console.log(teacher)