//Task 1//

const prices = [100, 20, 350, 15, 500];

const pricesOver100 = prices.filter (function (price) {
    return price > 100;
})
console.log (pricesOver100);

//Task 2//

const users = [
    { name: "Oksana", age: 40 },
    { name: "Anna", age: 17 },
    { name: "John", age: 25 },
    { name: "Kate", age: 30 }
];

const adults = users.filter (function (user) {
    return user.age > 18;
})

const adultsNames = adults.map (function (adult) {
    return adult.name;
})

console.log (adultsNames);


// const adultsNames = users
//     .filter(function(user) {
//         return user.age > 18;
//     })
//     .map(function(adult) {
//         return adult.name;
//     });

// console.log(adultsNames);