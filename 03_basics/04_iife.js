
// Immediately Invoked Function Expressions (IIFE)

(function one(){  // named IIFE
    console.log(`DB CONNECTED`);
})(); // semicolon is not must but id not written then next iife will give error
//because interpreter does not know where to stop

( (name) => { // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('shailesh')

// the functions are declared such a way to avoid global scope pollution

(function() {
    var privateVariable = "I'm private";
    console.log(privateVariable);
})();

// console.log(privateVariable); // Error: privateVariable is not defined
