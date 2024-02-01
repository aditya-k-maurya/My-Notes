// constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this; // it is implictly defined so not wrting this will also work
}

// new keyword creates a new object and using constructor function assign the value
const userOne = new User("Aditya", 12, true)
const userTwo = new User("Aman", 10, false)
// console.log(userOne)
// console.log(userTwo)
userOne.greeting() // calling function for the object


  /*
  
  New Keyword

  A new object is created: The new keyword initiates the creation of a new object.

  A prototpye is linked: The newly created object gets linked to the prototype property 
  of the constructor function. This means this it has access to properties and methods
  defined on the constructor's prototype.

  The constructor is called: The constructor function is called with the specified arguments
  and this is bound to the newly created object. If no explicit return value is specified
  from the constructor, Js assumes this, the newly created object, to be the intended 
  return value

  The new object is retured: After the constructor function has been called, if it doesn't
  return a non-primitive value, the newly created consturctor is returned.


  */