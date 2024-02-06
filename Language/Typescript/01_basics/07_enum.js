"use strict";
// an enum (enumeration) is a way to define a named set of numeric or string values. Enums are often used to represent a set of related values in a more readable and expressive way
Object.defineProperty(exports, "__esModule", { value: true });
//numeric enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// Usage
var myDirection = Direction.Up;
var myDir = 2;
//reverse enum
console.log(Direction[myDir]); // Output:Down 
console.log(myDirection); // Output: 1
//string enum
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
// Usage
var myColor = Color.Red;
console.log(myColor); // Output: 'RED'
//mixed enum
var MixedEnum;
(function (MixedEnum) {
    MixedEnum[MixedEnum["NumberValue"] = 42] = "NumberValue";
    MixedEnum["StringValue"] = "Hello";
})(MixedEnum || (MixedEnum = {}));
// Usage
var mixedValue = MixedEnum.StringValue;
console.log(mixedValue); // Output: 'Hello'
