//Task1//

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Mouse", price: 50 }
];

const index = products.findIndex(product => product.price < 600);

console.log(index);

//Task2//

const numbers1 = [10, 20, 30, 40];

const hasNumber = numbers1.includes(30);

console.log(hasNumber);

//Task3//

const numbers2 = [10, 20, 30];

const result = numbers2.join(" - ");

console.log(result);

//Task4//

const text = "apple-banana-orange";

const fruits1 = text.split("-");

console.log(fruits1);

//Task5//

const fruits2 = ["banana", "apple", "orange"];

fruits2.sort();

console.log(fruits2);

//Task6//

const colors = ["red", "green", "blue"];

colors.reverse();

console.log(colors);

//Task7//

const numbers3 = [10, 20, 30, 40, 50];

const part = numbers3.slice(2, 5);

console.log(part);
console.log(numbers3);

//Task8//

const fruits3 = ["apple", "banana", "orange", "kiwi"];

fruits3.splice(1, 2);

console.log(fruits3);

//Task9//

const fruits4 = ["apple", "banana", "kiwi"];

fruits4.splice(2, 0, "orange");

console.log(fruits4);

//Task10//

const numbers = [10, 20, 40, 50];

numbers.splice(2, 0, 30);

console.log(numbers);

//Task11//

const fruits = ["apple", "banana", "orange", "kiwi"];

fruits.splice(1, 2, "grape", "pear");

console.log(fruits);