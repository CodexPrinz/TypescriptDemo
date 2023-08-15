"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//----------------------- INTERFACE --------------------------
console.log("\n----------------------- INTERFACE --------------------------\n");
let user = { name: "John", age: 60, id: 1, email: "test@yahoo.com" };
let employee = {
    name: "John",
    age: 60,
    id: 1,
    email: "test@yahoo.com",
    salary: 9000,
};
let { name, email } = { name: "John", id: 1, email: "test email" };
console.log(name);
console.log(email);
