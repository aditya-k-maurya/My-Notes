/*
  Prototype

  In JavaScript, the prototype is an internal property of objects and functions that is
  used to implement prototype-based inheritance. Every JavaScript object has a prototype,
  which is either null or another object. When you create an object or a function in 
  JavaScript, it inherits properties and methods from its prototype.

  In simple the prototype provide a way for instance of object to inherit property methods
  and function defined. It helps in inheritance.

*/


// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
  
  // Adding a method to the prototype of Person
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
  
  // Creating instances of Person
  const person1 = new Person('John', 25);
  const person2 = new Person('Jane', 30);
  
  // Using the inherited method
  person1.sayHello(); // Output: Hello, my name is John.
  person2.sayHello(); // Output: Hello, my name is Jane.
  


// we can also create prototype method for Object which can be inherited by methods

Object.prototype.trueLength = function(){
    console.log(`True length is: ${this.trim().length}`)
}

let name = 'Rohit kumar  '
name.trueLength()
"Aditya  ".trueLength()
