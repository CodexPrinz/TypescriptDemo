"use strict";
console.log("datatypes in TS");
let lname;
lname = "John";
let newName = lname.toLowerCase();
console.log(newName);
let age;
age = 25;
console.log(age);
let isvalid = false;
//isvalid = true;
console.log(isvalid);
let empList;
empList = ["Santa", "Tom"];
let numList;
numList = [1, 2, 3, 4, 5];
let result = numList.filter((num) => num > 2);
console.log(result);
console.log(numList.reduce((acc, num) => acc + num));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
let l = 2 /* Country.FR */;
let department;
department = "IT";
department = 2 /* Country.FR */;
console.log(department);
//----------------------- FUNCTIONS --------------------------
console.log("\n----------------------- FUNCTIONS --------------------------");
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(3, 6));
const sub = (num1, num2) => num1 - num2;
console.log(sub(9, 2));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(100, 70));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5, 6];
console.log(add2(5, 9, ...numbers));
console.log(add2(8, 5, 3, 5, 7, 8, 9, 20));
//----------------------- GENERICS --------------------------
console.log("\n----------------------- GENERICS --------------------------");
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "s", "t", "b"]);
console.log(concatResult);
console.log(concatString);
