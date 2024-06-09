"use strict";
// 4.Exploring Objects with for...in Loop:
let myObject = {
    item1: "Value 1",
    item2: "Value 2",
    item3: "Value 3"
};
for (let property in myObject) {
    if (myObject.hasOwnProperty(property)) {
        console.log(`${property}: ${myObject[property]}`);
    }
}
