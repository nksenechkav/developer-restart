//Task1//

localStorage.setItem("age", "40");

const age = localStorage.getItem("age");

//Task2//

const user = {
    name: "Oksana",
    age: 40
};

const jsonUser = JSON.stringify(user);
localStorage.setItem("user", jsonUser);
const savedUser = localStorage.getItem("user");
const parsedUser = JSON.parse(jsonUser);