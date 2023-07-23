// import React from "react";
// import ReactDOM from "react-dom";
import fruits from "./foods.js";
import { choice, remove } from "./helpers.js";

//fruits = all fruits

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remaining = remove(fruit, fruits);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);
// Randomly draw a fruit from the array

// console.log(`I’d like one RANDOMFRUIT, please`);
// console.log(`Here you go: RANDOMFRUIT`);
// console.log(`Delicious! May I have another`);

// // Remove the fruit from the array of fruits

// console.log(`I’m sorry, we’re all out. We have FRUITSLEFT left.`);
