// an enum (enumeration) is a way to define a named set of numeric or string values. Enums are often used to represent a set of related values in a more readable and expressive way


//numeric enum

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// Usage
let myDirection: Direction = Direction.Up;
let myDir: number = 2;

//reverse enum
console.log(Direction[myDir])// Output:Down

//normal enum output
console.log(myDirection); // Output: 1


//string enum
enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
}

// Usage
let myColor: Color = Color.Red;
console.log(myColor); // Output: 'RED'

//mixed enum
enum MixedEnum {
  NumberValue = 42,
  StringValue = 'Hello',
}

// Usage
let mixedValue: MixedEnum = MixedEnum.StringValue;
console.log(mixedValue); // Output: 'Hello'



export{}