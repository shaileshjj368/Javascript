const name = "Shailesh"
const repoCount = 19

// back dated
// console.log(name+ repoCount+ "repo count ")  

// String interpolation
console.log(`Hello my name is, ${name} ,and my repo count is, ${repoCount}`)

const game = new String('pubg')

console.log(game[0])
console.log(game.__proto__)  // object

console.log(game.length)
console.log(game.toUpperCase())
console.log(game.charAt(3))
console.log(game.indexOf('u'))

const newgame = game.substring(0,2);
console.log(newgame)

const anothergame = game.slice(-8,2)
console.log(anothergame) // bg

// substring does not allow negative values but slice does and starts from reverse

const string = "    one    "
console.log(string)
console.log(string.trim());
// removes white spaces and line terminator from string from both end and also has
// trimEnd and trimStart

const url = "https://shailesh.com/shailesh%20joshi"

console.log(url.replace('%20', '-'))

console.log(url.includes('shailesh')) // true

const sample = "i-am-string-game-to-play-with"

console.log(sample.split('-'))  // returns array
