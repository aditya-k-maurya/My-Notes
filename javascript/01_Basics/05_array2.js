const arr1 = ["apple", "mango", "ballon"]
const arr2 = ["grapes", "kiwi", "tomato"]

//spread operator
const arr3 = [...arr1, ...arr2]
console.log(arr3)

//flat method
const arrMulti = [1,3,5,[3,3,6,[23,3,5,2]],3,5,[2,3,5]]
const arrFlat = arrMulti.flat(Infinity)
console.log(arrFlat)


//from and of method is used to convert any data structure into array
const str = "Aditya"
const arrStr = Array.from(str)
console.log(arrStr)

const age = 3
const name = "Akash"
const arrOf = Array.of(age, name)
console.log(arrOf)