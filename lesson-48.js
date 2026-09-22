//Task1//

<p id="message">Hello</p>

const message = document.querySelector("#message");

message.textContent = "Привет!";
message.style.color = "blue";
message.style.fontSize = "24px";

//Task2//

<button id="btn">Нажми меня</button>

const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  console.log("Кнопка нажата!");
});

//Task3//

<input id="nameInput"></input>

const input = document.querySelector("#nameInput");

input.addEventListener("input", (event) => {
  console.log(event.target.value);
});