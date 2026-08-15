//Task1//

const numbers1 = [5, 10, 15];

const result1 = numbers1.map(number => number + 10);

console.log(result1);
console.log(numbers1);

//Task2//

const products1 = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Mouse", price: 50 }
];

const prices1 = products1.map(product => product.price);

console.log(prices1);

//Task3//

const users1 = [
    { name: "Anna", age: 20 },
    { name: "John", age: 30 }
];

const updatedUsers = users1.map(user => ({
    ...user,
    age: user.age + 1
}));

//Task4//

const numbers2 = [5, 12, 18, 25, 30];

const result = numbers2.filter(number => number >= 18);

console.log(result);
console.log(numbers2);

//Task5//

const products2 = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Mouse", price: 50 }
];

const expensiveProducts = products2.filter(product => product.price >= 500);

console.log(expensiveProducts);

//Task6//

const products3 = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Mouse", price: 50 }
];

const expensiveNames = products3
    .filter(product => product.price >= 500)
    .map(product => product.name);


console.log(expensiveNames);


//Task7//

const users = [
    { name: "Anna", age: 20 },
    { name: "John", age: 30 },
    { name: "Kate", age: 25 }
];

const user = users.find(user => user.age >= 25);

console.log(user);

//Task8//

const prices = [100, 200, 50];

const total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);

//Task9//

const numbers = [7, 12, 4, 20, 15];

const max = numbers.reduce((largest, number) => {
    return number > largest ? number : largest;
}, 0);

console.log(max);

//Task10//

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Mouse", price: 50 }
];

const totalPrice = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(totalPrice);