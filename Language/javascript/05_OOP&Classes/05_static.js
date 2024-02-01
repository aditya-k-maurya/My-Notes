// Base class: User
class User {
    // Constructor to initialize the username property
    constructor(username) {
        this.username = username;
    }

    // Method to log the username
    logMe() {
        console.log(`Username is ${this.username}`);
    }

    // Static method to create an ID (not specific to instances, can be called on the class itself)
    static createId() {
        return `253`;
    }
}

// Create an instance of the User class named aditya
const aditya = new User("aditya");

// Call the logMe method on the aditya instance
aditya.logMe(); // Output: Username is aditya


aditya.createId();
// Attempt to call the createId method on the aditya instance
// This will result in an error: TypeError: aditya.createId is not a function

// Call the static createId method on the User class itself
const generatedId = User.createId();
console.log("Generated ID:", generatedId); // Output: Generated ID: 253
