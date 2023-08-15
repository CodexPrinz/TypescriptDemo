import { Login, User } from "./interface";
//----------------------- CLASSES --------------------------
console.log("\n----------------------- CLASSES --------------------------\n");

interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}
class Employee implements Login {
  id: number; // use exclamation mark is to remove compile error initially
  name: string;
  address: Address;

  constructor(id: number, name: string, address: Address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  login(): User {
    return { name: "John", age: 60, id: 1, email: "test@yahoo.com" };
  }

  getNameWithAddress(): string {
    //return this.name + " " + this.address;
    return `${this.name} stays at ${this.address}`;
  }

  // static method
  static getSalary(): number {
    return 3000;
  }
}

let john = new Employee(1, "James", {
  street: "wall street",
  city: "new york",
  state: "NY",
  pin: "0000",
});
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
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address.street}`;
  }
}

let mike = new Manager(2, "Mike", {
  street: "wall street",
  city: "new york",
  state: "NY",
  pin: "0000",
});
console.log(mike.getNameWithAddress());

console.log(Employee.getSalary());
