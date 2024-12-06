// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);

// Whenever we do comparison of two different datatypes we not neccessarily gets the correct output

// console.log(null>0);  // false
// console.log(null==0); // false
// console.log(null>=0); // true

/*
The reason is that an equality check== and comparisons ><>=<= work differently
Comparisons convert null to a number, treating it as 0
Thats the reason null>=0 is true and null>0 is false
*/

// console.log(undefined==0); // false
// console.log(undefined>0); // false
// console.log(undefined<0); // false

console.log("2"==2); // true
console.log("2"===2); // false
// === checks datatypes 

