//Task1//
function createName() {
  let name = "Oksana";

  return function () {
    console.log(name);
  };
}

const showName = createName();

showName();

//Task2//

const user = {
  name: "Oksana",

  sayHello() {
    console.log(this.name);
  }
};

const anotherUser = {
  name: "Anna",
  sayHello: user.sayHello
};

anotherUser.sayHello();

//Task3//

const user2 = {
  name: "Oksana",

  sayHello() {
    console.log(this.name);
  }
};

const anotherUser2 = {
  name: "Anna"
};

user2.sayHello.call(anotherUser2);

//Task4//

const user3 = {
  name: "Oksana",

  sayHello() {
    console.log(`Привет, ${this.name}`);
  }
};

const anotherUser3 = {
  name: "Anna"
};

user3.sayHello.call(anotherUser3);