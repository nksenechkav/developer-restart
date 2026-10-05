//Task1//

<form id="form">
    <input id="name"></input>
    <button type="submit">Отправить</button>
    <p id="error"></p>
</form>

const form = document.querySelector("#form");
const input = document.querySelector("#name");
const error = document.querySelector("#error");

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

    localStorage.setItem("name", name);

    console.log(`Привет, ${name}!`);
});

//Task2//

<input id="name"></input>

const input1 = document.querySelector("#name");

const savedName = localStorage.getItem("name");

if (savedName) {
    input1.value = savedName;
}

//Task3//

<input type="checkbox" id="agree"></input>

const checkbox = document.querySelector("#agree");

console.log(checkbox.checked);

checkbox.checked = true;

console.log(checkbox.checked);

//Task4//

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!checkbox.checked) {
        error.textContent = "Вы должны принять условия";
        return;
    }

    error.textContent = "";
    console.log("Форма отправлена");
});

//Task5//

<select id="country">
    <option value="de">Германия</option>
    <option value="ua">Украина</option>
    <option value="pl">Польша</option>
</select>

const country = document.querySelector("#country");

console.log(country.value);

country.value = "ua";

console.log(country.value);

country.addEventListener("change", () => {
    console.log(country.value);
});

//Task6//

<form id="form">
    <input id="name"></input>
    <input id="email"></input>

    <select id="country">
        <option value="de">Германия</option>
        <option value="ua">Украина</option>
    </select>

    <label>
        <input type="checkbox" id="agree"></input>
        Согласен с условиями
    </label>

    <button type="submit">Отправить</button>

    <p id="error"></p>
</form>

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = input.value.trim();
    const emailValue = email.value.trim();

    if (name === "") {
        error.textContent = "Введите имя";
        return;
    }

    if (name.length < 2) {
        error.textContent = "Имя слишком короткое";
        return;
    }

    if (emailValue === "") {
        error.textContent = "Введите email";
        return;
    }

    if (!checkbox.checked) {
        error.textContent = "Примите условия";
        return;
    }

    console.log(name);
    console.log(emailValue);
    console.log(country.value);
});