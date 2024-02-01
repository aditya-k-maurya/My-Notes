// Example function
function greet(message) {
    // Log a greeting message using 'this.name'
    console.log(`${message}, ${this.name}!`);
}

// Object with a 'name' property
const person = { name: "John" };

// Using bind to create a new function with a specific 'this' value
// The first argument to bind is the 'this' value, and the rest are arguments to partially apply
const greetJohn = greet.bind(person, "Hello");

// Calling the bound function
greetJohn(); // Output: Hello, John!
