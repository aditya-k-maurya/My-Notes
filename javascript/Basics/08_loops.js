// for , while and do while loops are same as c++

//for of loop  - used for object in js
let arr = [1,3,53,5,3,4]
let sum =0
for (const num of arr) {
    sum+= num
}
// console.log(sum)


//for in loop - it is used to iterate the object

let myObj = {
    js : "javascript",
    cpp: "c++",
    rb:"ruby",
    py:"python"
}
for (const key in myObj) {
    // console.log(`${key} is shorthand for the language ${myObj[key]}`)
}

// for each loop

arr.forEach((item)=>{
    // console.log(item)
})

let myCode = [
    {
        lang:"javascript",
        filename:"js",
        experience:2
    },
    {
        lang:"python",
        filename:"py",
        experience:1
    },
    {
        lang:"cpp",
        filename:"c++",
        experience:3
    },
    {
        lang:"ruby",
        filename:"rb",
        experience:0
    },
]

myCode.forEach((item)=>{
    //here in item we get object inside the array
    // console.log(item.lang)
})

// filter - foreach doesnt return value that can be achieved using filter
const newNum = arr.filter((num)=>{
    return num>2
})
// console.log(newNum)

//we can filter objects with filter method
const filename = myCode.filter((obj)=> obj.experience>=1) //stores array of object whose experience is greater than equal to 1
// console.log(filename)

// map - automatically return 
const square = arr.map((item)=>{
    return item*item
})
console.log(square)