//basic function
function add(a, b) {
	return a + b;
}

//anonymous function
const subtract = function (a, b) {
	return a - b;
};

//arrow function
const multiply = (a, b) => a * b;

let arr = [2, 5, 3, 6, 4];

const sumArr = (...arr) => {
	return arr.reduce((sum, num) => {
		sum + num;
	}, 0);
};

console.log(sumArr(...arr));

// IIFE with an anonymous function
const result = (function (a, b) {
	return a * b;
})(4, 5);

console.log(result);
