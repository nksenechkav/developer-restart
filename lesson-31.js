//Task1//

const user1 = {
    name: "Oksana",
    age: 40,
    city: "Kettenkamp"
};

const updatedUser1 = {
    ...user1,
    age: 41,
    city: "Osnabrück"
};

console.log(updatedUser1);
console.log(user1);

//Task2//

const user = {
    name: "Oksana",
    age: 40,

    sayHello() {
        return `Hello, my name is ${this.name}`;
    }
};

const updatedUser = {
    ...user,
    age: 41
};

console.log(user.sayHello());
console.log(updatedUser.sayHello());

//Task3//

const product = {
    name: "Laptop",
    price: 1000,
    category: "Technology",
    stock: 5
};

const { name, price, ...details } = product;

console.log(name);
console.log(price);
console.log(details);