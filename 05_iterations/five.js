
const coding = ['js' , 'ruby', 'java', 'python', 'c#']

coding.forEach(function (item) { // this is callback function it is nameless
    console.log(item) // item take auto index value
})

coding.forEach( (item) => { // same with arrow function
    console.log(item)
})

function printMe(item){
    console.log(item)
}

coding.forEach(printMe) // only reference is given and not the function call

coding.forEach((item, index, arr) => {
    console.log(item, index, arr) // item place returns the value of each element
    // index prints index value
    // arr prints whole arr
})

const myCoding = [
    {
        userid: '23',
        username: 'js'
    },
    {
        userid: '34',
        username: 'java'
    },
    {
        userid: '45',
        username: 'cpp'
    },
    {
        userid: '89',
        username: 'python'
    }
]

myCoding.forEach( (item) => {
    console.log(item.username) 
})

