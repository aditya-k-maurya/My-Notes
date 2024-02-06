"use strict";
//object in typescript
Object.defineProperty(exports, "__esModule", { value: true });
//Object is similar to js
var User = {
    name: "Aditya",
    email: "example@gmail.com",
    isActive: true
};
//passing object as parameter
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Aditya", isPaid: false });
//defining type of object
function createCourse() {
    return { name: "typescript", price: 239 }; //type of object is defined so return value should be accordingly
}
function createUsers(user) {
    return { name: "", email: "", isActive: true };
}
