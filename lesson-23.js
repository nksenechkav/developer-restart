//Task1//

const user1 = {
    name: "Oksana",

    greet(person) {
        console.log(`Hello ${person}, I'm ${this.name}`);
    }
};

user1.greet("Anna");

//Task2//

const user = {
    name: "Oksana",

    introduce(city) {
        return `My name is ${this.name} and I live in ${city}.`;
    }
};

const message = user.introduce("Kettenkamp");

console.log(message);