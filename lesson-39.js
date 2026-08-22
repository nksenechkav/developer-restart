//Task1//

const fruits1 = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "kiwi"
];

const uniqueFruits = [...new Set(fruits1)];

console.log(uniqueFruits);

//Task2//

const fruits = new Set(["apple", "banana", "orange"]);

fruits.add("kiwi");
fruits.add("apple");

console.log(fruits.has("banana"));
console.log(fruits.has("pear"));

fruits.delete("orange");

console.log(fruits);

//Task3//

const numbers = new Set([10, 20, 30]);

numbers.add(40);
numbers.add(20);

console.log(numbers.has(10));
console.log(numbers.has(50));

numbers.delete(30);

console.log(numbers);