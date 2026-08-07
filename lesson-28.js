//Task1//

const user = {
    name: "Oksana",
    age: 40,

    getAge() {
        return this.age;
    }
};

const currentAge = user.getAge();

console.log(currentAge);

//Task2//

const product = {
    price: 100,
    quantity: 3,

    getTotal() {
        return this.price * this.quantity;
    }
};

const total = product.getTotal();

console.log(total);

//Task3g//