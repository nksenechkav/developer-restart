//Task1//

console.log("A");

setTimeout(() => {
    console.log("B");
}, 3000);

console.log("C");

//Task2//

const intervalId = setInterval(() => {
    console.log("Tick");
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 3500);