// getter and setter methods are used to control access to object properties. They allow you to 
// define custom behavior when getting or setting the values of object properties


const user = {
    // Private variable (conventionally indicated by an underscore)
    _name: "John",

    // Getter for the 'name' property
    get name() {
        console.log("Getting name");
        return this._name;
    },

    // Setter for the 'name' property
    set name(newName) {
        console.log("Setting name");
        if (newName && typeof newName === 'string') {
            this._name = newName;
        } else {
            console.error("Invalid name format");
        }
    }
};

// Accessing the 'name' property using the getter
console.log(user.name); // Output: Getting name, John

// Setting the 'name' property using the setter
user.name = "Alice"; // Output: Setting name

// Accessing the 'name' property again using the getter
console.log(user.name); // Output: Getting name, Alice

// Attempt to set an invalid 'name' format
user.name = 123; // Output: Invalid name format



class User {
    constructor(name) {
        this._name = name;
    }

    // Getter for the 'name' property
    get name() {
        console.log("Getting name");
        return this._name;
    }

    // Setter for the 'name' property
    set name(newName) {
        console.log("Setting name");
        if (newName && typeof newName === 'string') {
            this._name = newName;
        } else {
            console.error("Invalid name format");
        }
    }
}

// Create an instance of the User class
const userInstance = new User("John");

// Accessing the 'name' property using the getter
console.log(userInstance.name); // Output: Getting name, John

// Setting the 'name' property using the setter
userInstance.name = "Alice"; // Output: Setting name

// Accessing the 'name' property again using the getter
console.log(userInstance.name); // Output: Getting name, Alice

