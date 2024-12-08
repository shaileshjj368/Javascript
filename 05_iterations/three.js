const arr = [1, 2, 3, 4, 5]

for(const i of arr){
    console.log(i)
}

const greeting = "Hello World!"
for(const greet of greeting){
    console.log(greet)
}

// maps 

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('IN', "India") // does not add duplicate entry only unique entries are allowed

console.log(map)

for(const [key, value] of map){
    console.log(key, ':- ', value)
}

