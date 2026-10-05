//Task1//

<input id="name" value="Anna"></input>

const input = document.querySelector("#name");

console.log(input.value);

input.value = "Oksana";

console.log(input.value);

//Task2//

button.addEventListener("click", () => {
    const name = input.value.trim();

    if (name === "") {
        console.log("Введите имя");
        return;
    }

    input.value = name;

    console.log(`Привет, ${name}!`);
});

//Task2//

const input = document.querySelector("#name");
const button = document.querySelector("#button");

input.addEventListener("input", () => {
    if (input.value.trim() === "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
});

//Task3//

input.addEventListener("input", () => {
    const name = input.value.trim();

    if (name.length < 2) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
});

//Task4//

<div>
    <input id="name1"></input>
    <button id="button1">Отправить</button>
    <p id="error"></p>
</div>


const input1 = document.querySelector("#name1");
const button1 = document.querySelector("#button1");
const error = document.querySelector("#error");

input1.addEventListener("input1", () => {
    const name = input1.value.trim();

    if (name.length < 2) {
        error.textContent = "Имя должно содержать минимум 2 символа";
        button1.disabled = true;
    } else {
        error.textContent = "";
        button1.disabled = false;
    }
});

//Task5//

<form id="form">
    <input id="name"></input>
    <button type="submit">Отправить</button>
</form>

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = input.value.trim();

    if (name === "") {
        error.textContent = "Введите имя";
        return;
    }

    if (name.length < 2) {
        error.textContent = "Имя должно содержать минимум 2 символа";
        return;
    }

    error.textContent = "";
    console.log(`Привет, ${name}!`);
});