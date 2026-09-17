//Task1//

const prices = new Map();

prices.set("Laptop", 1000);
prices.set("Phone", 500);
prices.set("Mouse", 50);

for (const key of prices.keys()) {
  console.log(key);
}

for (const value of prices.values()) {
  console.log(value);
}

for (const [name, price] of prices.entries()) {
  console.log(name, price);
}

//Task2//

const scores = new Map();

scores.set("Oksana", 85);
scores.set("Anna", 92);
scores.set("John", 67);

for (const [name, score] of scores.entries()) {
  console.log(name, score);
}

//Task3//

const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

//Task4//

const numbers = [10, 20, 30];

for (const number of numbers) {
  console.log(number * 2);
}