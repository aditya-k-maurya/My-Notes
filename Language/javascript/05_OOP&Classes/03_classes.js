
// Classes in javascript
class User {
    // Constructor to initialize object properties
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Method to encrypt the user's password (a simplified example)
    encryptPassword() {
        return `${this.password}abc`; // Appends 'abc' to the original password
    }

    // Method to change the username to uppercase
    changeUsername() {
        return `${this.username.toUpperCase()}`; // Converts username to uppercase
    }
}

// Create an instance of the User class named Aditya
const Aditya = new User("Aditya", "Aditya@example.com", "325hg");

// Call the encryptPassword method and log the result to the console
console.log("Encrypted Password:", Aditya.encryptPassword());

// Call the changeUsername method and log the result to the console
console.log("Changed Username:", Aditya.changeUsername());
