//Task1//
const users1 = [
    { name: "Anna", age: 20 },
    { name: "John", age: 30 },
    { name: "Kate", age: 25 }
];

const ages = users1.reduce((result, user) => {
    result[user.name] = user.age;
    return result;
}, {});

console.log(ages);

//Task2//

const numbers1 = [5, 12, 8, 20];

const grouped = numbers1.reduce((result, number) => {
  if (number >= 10) {
    result.big.push(number);
  } else {
    result.small.push(number);
  }

  return result;
}, {
  big: [],
  small: []
});

console.log(grouped);

//Task3//

const products1 = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Mouse", price: 50 },
  { name: "Tablet", price: 700 }
];

const result1 = products1
  .filter(product => product.price >= 500)
  .map(product => product.name);

  console.log(result1);
  
//Task4//

const numbers2 = [40, 5, 100, 20, 1];

numbers2.sort((a, b) => a - b);

console.log(numbers2);

//Task5//

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Mouse", price: 50 }
];

products.sort((a, b) => a.price - b.price);

console.log(products);

//Task6//

const numbers3 = [5, 12, 18, 25];

const hasBigNumber = numbers3.some(number => number > 20);

console.log(hasBigNumber);

//Task7//

const numbers4 = [10, 20, 30, 40];

const allGreaterThan15 = numbers4.every(number => number > 15);

console.log(allGreaterThan15);

//Task8//

const numbers = [10, 20, 30];

numbers.forEach(number => {
    console.log(number + 5);
});

const result = numbers.forEach(number => {
    console.log(number + 5);
});

console.log(result);

//Task9//

const users = [
    { name: "Anna", age: 20 },
    { name: "John", age: 30 },
    { name: "Kate", age: 25 }
];

users.forEach(user => {
    user.age += 1;
});

console.log(users);