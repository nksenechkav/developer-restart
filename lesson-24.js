//Task1//

const users1 = [
    { name: "Anna", age: 20 },
    { name: "John", age: 30 },
    { name: "Kate", age: 25 }
];

const allAdults = users1.every(user => user.age >= 18);

console.log(allAdults);

//Task2//

const users = [
    { name: "Anna", isAdmin: false },
    { name: "John", isAdmin: true },
    { name: "Kate", isAdmin: false }
];

const hasAdmin = users.some(user => user.isAdmin);

console.log(hasAdmin);

//Task3//

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Mouse", price: 50 }
];

const hasExpensiveProduct = products.some(product => product.price > 900);

console.log(hasExpensiveProduct);