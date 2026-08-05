//Task1//

const user = {
    name: "Oksana",
    age: 40,

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

user.greet();

//Task2//

const dog = {
    name: "Rex",

    bark() {
        console.log(`${this.name} says Woof!`);
    }
};

const cat = {
    name: "Murka"
};

cat.bark = dog.bark;

cat.bark();