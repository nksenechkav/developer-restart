//Task1//

const colors = ["red", "green", "blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);

//Task2//

const fruits = ["apple", "banana", "orange"];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

//Task3//

const numbers = [10, 20, 30, 40, 50];

const [firstNumber, secondNumber, ...rest] = numbers;

console.log(firstNumber);
console.log(secondNumber);
console.log(rest);


//Task3//

const numbers2 = [10, 20, 30];

const [firstNum, secondNum, thirdNum, fourthNum = 100] = numbers2;

console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
console.log(fourthNum);
