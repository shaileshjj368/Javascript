
const obj = {
    'game1':'NFS',
    'game2': 'pubg'
}

// for(const [key, value] of obj){ // does not work 
//     console.log(key) // gives error that is object is not iterable this way
// }

for(const i in obj){
    console.log(i) // prints key
    console.log(obj[i]) // prints value
}

const language = ['java', 'cpp', 'python', 'javascript']

for(const i in language){
    console.log(i) // prints key i.e 0,1,2,
    console.log(language[i])
}

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")

for(const i in map){
    console.log(i) // does not give output because maps are not iteratable
}