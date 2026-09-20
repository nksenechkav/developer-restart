//Task1//

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Привет, я ${this.name}`);
  }
}

const user1 = new User("Oksana", 40);
const user2 = new User("Anna", 30);

user1.sayHello();
user2.sayHello();

//Task2//

class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  info() {
    console.log(`${this.brand}, ${this.year}`);
  }
}

const car = new Car("BMW", 2020);

car.info();

//Task3//

class User1 {
  constructor(name) {
    this.name = name;
  }
}

class Admin extends User1 {
  deleteUser() {
    console.log(`${this.name} удалил пользователя`);
  }
}

const admin = new Admin("Oksana");

console.log(admin.name);
admin.deleteUser();


//Task4//

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} ест`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} лает`);
  }
}

const dog = new Dog("Rex");

dog.eat();
dog.bark();