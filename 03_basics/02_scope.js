var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a); // 10
    
}

/**var can be redeclared to any value under any scope and 
 * the value will always be global.
 * let and const cannot be accessed outside the scope
 */

console.log(a); //300
// console.log(b); // error
console.log(c); // 30



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // acceptable

function addone(num){
    return num + 1
}

/**this is because of hoisting of functions */

addTwo(5) // not acceptable error
const addTwo = function(num){
    return num + 2
}