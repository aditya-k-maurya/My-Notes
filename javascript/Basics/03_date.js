const currentDate = new Date

console.log(currentDate)

console.log(currentDate.getFullYear()); // Output: Current year
console.log(currentDate.getMonth());    // Output: Current month (0-11)
console.log(currentDate.getDate());     // Output: Current day of the month
console.log(currentDate.getDay());

console.log(currentDate.toDateString());       // Output: "Tue Jan 25 2022"
console.log(currentDate.toTimeString());       // Output: "15:30:00 GMT+0000 (Coordinated Universal Time)"
console.log(currentDate.toLocaleDateString()); // Output: Localized date string
console.log(currentDate.toLocaleTimeString()); // Output: Digital clock 


console.log(currentDate.toLocaleString('default', {
    weekday:"long"
})); // Output: Weekday

// total time in ms
console.log(currentDate.getTime());
