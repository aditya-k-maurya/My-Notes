// Array

const arr = [0,3,2,5,3,5]

// array methods

arr.push(6); //add array at end
arr.pop() // pop last element

arr.unshift(1)// add element at start
arr.shift() //remove element from starting

const fruits = ['apple', 'orange'];
const moreFruits = ['banana', 'grape'];
const combinedFruits = fruits.concat(moreFruits); //combine two array
const fruitString = fruits.join(', '); //convert array into string
// console.log(fruits)
// console.log(combinedFruits)
// console.log(fruitString)

//slice and splice
const arrSlice = arr.slice(1,3) // returns the part of array
const arrSplice = arr.splice(1,3)// divide the original array

// includes
const hasBanana = fruits.includes('banana')
//console.log(hasBanana) //return boolean value

// iteration method
combinedFruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});


// maps
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]

//reduce and filters are some more methods