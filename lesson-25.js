//Task1//

const numbers = [5, 10, 15];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);

//Task2//

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Mouse", price: 50 }
];

const totalPrice = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(totalPrice);

