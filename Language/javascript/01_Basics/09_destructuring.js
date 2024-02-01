
// Object destructuring

const User = { 
    name: "John", 
    1: 30, 
    city: "New York" 
};

// Destructuring
const { name, age, city } = User;

// Using the extracted values
console.log(name);  // Output: John
console.log(age);   // Output: 30
console.log(city);  // Output: New York


// Array Destructuring

const numbers = [1, 2, 3, 4, 5];

// Destructuring
const [first, second, ...rest] = numbers;

// Using the extracted values
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]


//nested object destructuring

const person = { 
    name: "John", 
    age: 30, 
    address: { 
        city: "New York", 
        zip: 10001
    } };

const { name1, age1= 20, address: { city1, zip } } = person;

console.log(name1); // Output: John
console.log(city1); // Output: New York
console.log(zip);  // Output: 10001



// Destructuring function parametner when object is passed 

function printPerson({ name, age }) {
    console.log(`${name} is ${age} years old.`);
}

const Holder = { name: "John", age: 30 };

printPerson(Holder); // Output: John is 30 years old.
