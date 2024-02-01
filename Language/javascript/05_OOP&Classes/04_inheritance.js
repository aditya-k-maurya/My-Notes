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
}

// Derived class: Teacher (inherits from User)
class Teacher extends User {
    // Constructor to initialize username, email, and password properties
    constructor(username, email, password) {
        // 'super' is used to call the constructor of the base class (User)
        super(username);
        this.email = email;
        this.password = password;
    }

    // Method specific to the Teacher class
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// Create an instance of the Teacher class named Aditya
const Aditya = new Teacher("Aditya", "aditya@gmail.com", "23jjg3");

// Call the addCourse method (inherited from the User class) on the Aditya instance
Aditya.addCourse();
Aditya.logMe();

// Create an instance of the base class User named Rohit
const Rohit = new User("Rohit");

// Call the logMe method on the Rohit instance
Rohit.logMe();
