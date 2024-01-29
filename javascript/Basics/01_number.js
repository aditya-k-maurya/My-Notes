// type conversion

let strInt = "124"
let strFloat = "34.523"

const numInt = parseInt(strInt)
const numFloat = parseFloat(strFloat)

// console.log(typeof numInt)
// console.log(typeof numFloat)

//  Math function

let num = 235.43
console.log(Math.round(num))
console.log(Math.ceil(num))
console.log(Math.floor(num))

// getting random number between 1 and 6
console.log(Math.floor(Math.random()*6 + 1))


// NaN is not a number and checking if finite
const x = 123;
const y = "abc";

console.log(isNaN(x));       // Output: false
console.log(isNaN(y));       // Output: true

console.log(isFinite(x));    // Output: true
console.log(isFinite(Infinity)); // Output: false

// to fixed and to precision

const value = 234.523345

console.log(value.toFixed(2))
console.log(value.toPrecision(2))
