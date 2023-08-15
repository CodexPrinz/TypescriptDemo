//----------------------- INTERFACE --------------------------
console.log("\n----------------------- INTERFACE --------------------------\n");

export interface User {
  name: string;
  age?: number; // ? means it is optional
  id: number;
  email: string;
}

let user: User = { name: "John", age: 60, id: 1, email: "test@yahoo.com" };

interface Employees extends User {
  salary: number;
}

let employee: Employees = {
  name: "John",
  age: 60,
  id: 1,
  email: "test@yahoo.com",
  salary: 9000,
};

export interface Login {
  login(): User;
}

let { name, email }: User = { name: "John", id: 1, email: "test email" };
console.log(name);
console.log(email);
