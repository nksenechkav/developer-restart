//Task1//

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    button.classList.toggle("active");
});

//Task2//

<div>
    <input id="name"></input>
    <button id="button2">Привет</button>
    <p id="result"></p>
</div>


const input = document.querySelector("#name");
const button2 = document.querySelector("#button2");
const result = document.querySelector("#result");

button2.addEventListener("click", () => {
    result.textContent = `Привет, ${input.value}!`;
});

//Task3//

<div>
    <p id="message">Привет, Oksana!</p>
    <button id="button">Удалить</button>
</div>

const button3 = document.querySelector("#button3");
const message = document.querySelector("#message");
button3.addEventListener("click", () => {
    message.remove();
});