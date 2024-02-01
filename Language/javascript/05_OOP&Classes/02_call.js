// Function to set the username, simulating complex DB calls
function SetUsername(username) {
    // complex DB calls would be performed here
    // (Note: The actual complexity is not implemented in this example)

    // Assign the provided username to the 'username' property of the object
    this.username = username;
}

// Function to create a user with a username, email, and password
function createUser(username, email, password) {
    // .call holds the reference of the username even if the object called gets removed from the call stack
    // 'this' in SetUsername.call(this, username) refers to the context of the 'createUser' function
    // The 'username' parameter is passed to the SetUsername function
    SetUsername.call(this, username);

    // Assign the provided email and password to the respective properties of the object
    this.email = email;
    this.password = password;
}

// Create a new user object using the 'createUser' constructor function
const Aditya = new createUser("aditya", "aditya@gmail.com", "23h5hd");

// The 'Aditya' object now has properties 'username', 'email', and 'password'
// The 'username' property is set using the 'SetUsername' function
// The 'email' and 'password' properties are set directly in the 'createUser' constructor
