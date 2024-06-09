"use strict";
// 1. Creating a Lesson Plan (Using for loop ):
let myWork = [];
for (let i = 1; i <= 10; i++) {
    let lesson = {
        name: `Lesson ${i}`,
        status: i % 2 === 1 ? true : false
    };
    myWork.push(lesson);
}
console.log(myWork);
