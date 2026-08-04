//Task1//

const numbers1 = [10, 20, 30];

const newNumbers = [...numbers1, 40, 50];

console.log(numbers1);
console.log(newNumbers);

//Task2//

const first = [1, 2, 3];

const second = [4, 5, 6];

const combined = [...first, ...second];

console.log(combined);

//Task3//

const numbers = [1, 2, 3];

const copyNumbers = numbers;

copyNumbers.push(4);

console.log(numbers);
console.log(copyNumbers);
