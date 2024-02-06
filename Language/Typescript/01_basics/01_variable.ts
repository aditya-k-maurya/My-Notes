/*

Data types in typescript
1.Number
2.String
3.Boolean
4.Any
5.Void
6.Enum
7.Union
8.Intersection
9. Null & Undefined

*/


//variable

let name: string = "Aditya";
name.toLowerCase()

console.log(name)



// number
//if we are assigning value at instant then there is no need to define type, typescript will automatically detect and do it.
let userId = 345;
// userId = "string" -> this gives error as typescript have automatically detected the type of userId and other type is not allowed.


//boolean
let isLoggedIn = false

// if we dont give any type and dont assign any value then the type becomes 'any' which means it can take any type.
// let state; --> this is bad practice



export {}