//Task1//

const user = {
  name: "Oksana",
  age: 40,
  city: "Kettenkamp"
};

const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);

console.log(keys);
console.log(values);
console.log(entries);

//Task2//

const grades = {
  Oksana: 85,
  Anna: 92,
  John: 67,
  Kate: 78
};

const students = Object.entries(grades);

const goodStudents = students.filter(([name, grade]) => grade >= 80);

console.log(goodStudents);

//Task3//

const prices = [
  ["Laptop", 1000],
  ["Phone", 500],
  ["Mouse", 50]
];

const productPrices = Object.fromEntries(prices);

console.log(productPrices);