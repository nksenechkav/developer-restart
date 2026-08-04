const product = {
    name: "Laptop",
    price: 1000
};

const updatedProduct = {
    ...product,
    price: 900,
    category: "Technology"
};

console.log(product);
console.log(updatedProduct);