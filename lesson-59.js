<form id="form">
    <input id="name"></input>
    <input id="email"></input>

    <select id="country">
        <option value="de">Германия</option>
        <option value="ua">Украина</option>
    </select>

    <label>
        <input type="checkbox" id="agree"></input>
        Я согласен с условиями
    </label>

    <button type="submit">Зарегистрироваться</button>

    <p id="error"></p>
    <p id="success"></p>
</form>


const form = document.querySelector("#form");
const input = document.querySelector("#name");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const checkbox = document.querySelector("#agree");
const error = document.querySelector("#error");
const success = document.querySelector("#success");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = input.value.trim();
    const emailValue = email.value.trim();
    const selectedCountry = country.value;

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

    const user = {
        name: name,
        email: emailValue,
        country: selectedCountry
    }

    success.textContent = "Регистрация успешна!";

    console.log(user);
});