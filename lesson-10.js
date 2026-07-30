function multiply (a, b) {
    return a * b;
}

const result1 = multiply (6, 7);

console.log (result1);

function multiply(a, b) {
    console.log(a * b);
}

const result2 = multiply(6, 7);

console.log(result2);

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Oksana"));


function multiply(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b;
}

const result = add(multiply(2, 3), 4);

console.log(result);