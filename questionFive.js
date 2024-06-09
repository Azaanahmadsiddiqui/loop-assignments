"use strict";
// 5.Exploring Arrays with Loops(Using loop ):
let myArray = [];
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log("Array contents:", myArray);
for (let i = 0; i < myArray.length; i++) {
    console.log(`Index ${i}: ${myArray[i]}`);
}
for (const value of myArray) {
    console.log(`Value: ${value}`);
}
