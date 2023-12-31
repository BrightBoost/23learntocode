"use strict";

let today = new Date();
console.log(today.toUTCString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());
console.log(today.toLocaleString());

let date1 = new Date(1934, 7);
console.log(date1.toUTCString());

let date2 = new Date("2023-04-11");
let date3 = new Date("04-11-2023");
console.log(date2.toString());
console.log(date3.toString());

let question = new Date();
question.setFullYear(question.getFullYear() + 1);
console.log(question);

// wut
let dday = new Date("1944-10-30");
console.log(dday.toLocaleString());

let dday1 = new Date("1944-09-30");
console.log(dday1.toLocaleString());

let dday2 = new Date("1944-05-30");
console.log(dday2.toLocaleString());