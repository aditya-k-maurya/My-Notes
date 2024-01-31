// singleton 

const User = {}

// object literals

const JsUser = {
    name: "Aditya",
    age: 20,
    location: "New Delhi",
    isLoggedIn: false
}

console.log(JsUser.name)
console.log(JsUser["name"]) // this is more correct way to access the js object

// Adding function in object
JsUser.greeting = function(){
    console.log(`Hello, ${this.name}`)
}

console.log(JsUser.greeting())

// destructuring object
const Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
      city: 'New York',
      zipCode: '10001'
    }
  };
  
  // Extracting values using object destructuring
  const { firstName, lastName, age } = Person;
  
  console.log(firstName); // Output: John
  console.log(lastName);  // Output: Doe
  console.log(age);       // Output: 30