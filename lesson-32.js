//Task1//

const user1 = {
    name: "Oksana",
    age: 40,
    city: "Kettenkamp"
};

const { age, ...userWithoutAge } = user1;

console.log(age);
console.log(userWithoutAge);

//Task2//

const product1 = {
    name: "Laptop",
    price: 1000,
    category: "Technology",
    stock: 5
};

const { price1, ...productWithoutPrice } = product1;

console.log(price1);
console.log(productWithoutPrice);
console.log(product1);

//Task3//

const user = {
    name: "Oksana",
    age: 40,
    city: "Kettenkamp"
};

const { name, ...restUser } = user;

const updatedUser = {
    ...restUser,
    name: "Anna",
    age: 41
};

console.log(user);
console.log(restUser);
console.log(updatedUser);

//Task4//

const product = {
    name: "Laptop",
    price: 1000,
    category: "Technology",
    stock: 5
};

const { price, ...rest } = product;

const updatedProduct = {
    ...rest,
    price: 900,
    stock: 10
};

console.log(product);
console.log(price);
console.log(rest);
console.log(updatedProduct);