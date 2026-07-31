const users = [
    { name: "Oksana", age: 40 },
    { name: "Anna", age: 17 },
    { name: "John", age: 25 }
];

const john = users.find (function (user) {
    return user.name === "John";
});

console.log (john);