console.log("datatypes in TS");
let lname: string;
lname = "John";

let newName = lname.toLowerCase();
console.log(newName);

let age: number;
age = 25;
console.log(age);

let isvalid: boolean = false;
//isvalid = true;

console.log(isvalid);

let empList: string[];
empList = ["Santa", "Tom"];

let numList: Array<number>;
numList = [1, 2, 3, 4, 5];

let result = numList.filter((num) => num > 2);
console.log(result);

console.log(numList.reduce((acc, num) => acc + num));

enum Color {
  Red,
  Green,
  Blue,
}

let c = Color.Green;

const enum Country {
  IT,
  UK,
  FR,
}
let l = Country.FR;

let department: any;
department = "IT";
department = Country.FR;

console.log(department);

//----------------------- FUNCTIONS --------------------------
console.log("\n----------------------- FUNCTIONS --------------------------");

function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add(3, 6));

const sub = (num1: number, num2: number): number => num1 - num2;
console.log(sub(9, 2));

const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};
console.log(mult(100, 70));

function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log(add2(5, 9, ...numbers));
console.log(add2(8, 5, 3, 5, 7, 8, 9, 20));

//----------------------- GENERICS --------------------------
console.log("\n----------------------- GENERICS --------------------------");

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatResult = getItems([1, 2, 3, 4, 5]);

let concatString = getItems(["a", "s", "t", "b"]);
console.log(concatResult);
console.log(concatString);
