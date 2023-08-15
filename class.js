"use strict";
//----------------------- CLASSES --------------------------
console.log("\n----------------------- CLASSES --------------------------\n");
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        //return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;
    }
    // static method
    static getSalary() {
        return 3000;
    }
}
let john = new Employee(1, "James", "Highway 78");
/*
john.id = 1;
john.name = "John";
john.address = "Highway 41";
*/
console.log(john);
let address = john.getNameWithAddress();
console.log(address);
// Extend super class
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let mike = new Manager(2, "Mike", "KFC");
console.log(mike.getNameWithAddress());
console.log(Employee.getSalary());
