//Task1//

const user1 = {
    name: "Oksana"
};

console.log(user1.name);
console.log(user1.address);
console.log(user1.address?.city);

//Task2//

const user2 = {
    name: "Oksana",
    address: {
        city: "Kettenkamp"
    }
};

console.log(user2.address?.city);
console.log(user2.address?.country);

//Task3//

const user = {
    name: "Oksana",

    getName() {
        return this.name;
    }
};

console.log(user.getName?.());
console.log(user.getAge?.());


//Task4//

const users = [
    { name: "Anna" },
    { name: "John" },
    { name: "Kate" }
];

console.log(users[0]?.name);
console.log(users[2]?.name);
console.log(users[5]?.name);