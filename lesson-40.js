//Task1//

const ages = new Map();

ages.set("Anna", 20);
ages.set("John", 30);

console.log(ages.get("Anna"));
console.log(ages.has("John"));

//Task2//

const scores = new Map();

scores.set("Oksana", 85);
scores.set("Anna", 92);
scores.set("John", 67);

console.log(scores.get("Anna"));
console.log(scores.has("Kate"));

scores.set("John", 70);
scores.delete("Oksana");

console.log(scores);


//Task3//

const prices = new Map();

prices.set("Laptop", 1000);
prices.set("Phone", 500);
prices.set("Mouse", 50);

console.log(prices.keys());
console.log(prices.values());
console.log(prices.entries());