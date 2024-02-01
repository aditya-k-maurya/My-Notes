// Get Property Descriptor for Math.PI
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// Define a User Object
const User = {
    name: "Aditya",
    price: 250,
    isAvailable: true,

    greet: function(){
        console.log("Hello User");
    }
};

// Get Property Descriptor for User.name
const namePropertyDescriptor = Object.getOwnPropertyDescriptor(User, "name");
console.log(namePropertyDescriptor);

// Use Object.defineProperties to set property descriptors for multiple properties
Object.defineProperties(User, {
    name: {
        writable: false,     // Make 'name' property non-writable
        enumerable: false    // Make 'name' property non-enumerable
    },
    price: {
        writable: true,      // Assuming you want 'price' to be writable
        enumerable: true     // Make 'price' property enumerable
    },
    isAvailable: {
        writable: true,      // Assuming you want 'isAvailable' to be writable
        enumerable: true     // Make 'isAvailable' property enumerable
    },
    greet: {
        writable: false,     // Make 'greet' method non-writable
        enumerable: false    // Make 'greet' method non-enumerable
    }
});

// Iterate through the properties of the User object and log non-function properties
for (let [key, value] of Object.entries(User)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
