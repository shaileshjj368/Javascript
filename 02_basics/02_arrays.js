
const marvel_heros = ["Ironman", "Captain America", "Thor"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros) // creates problem by taking whole array as next element
// console.log(marvel_heros) 

const all_heros = marvel_heros.concat(dc_heros) // returns new array
console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]  // spread operator
console.log(all_new_heros) // it is used because it can combine more than 2 arrays

const another_array = [1,2,3, [4,5,6],7,[8,9,10,[11,12]]]

const real_another_array = another_array.flat(Infinity) // flat function returns a new array
// having no dimensions to the deepth as parameter to function
console.log(real_another_array)

console.log(Array.isArray("Shailesh")) // false
console.log(Array.from("Shailesh")) // converts into array
console.log(Array.from({name: "Shailesh"})) // returns empty array
// because if from() does not understand of what should be converted into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3)) 