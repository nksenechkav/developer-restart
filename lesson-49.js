//Task1//

<form id="form">
  <input type="text">  </input>
  <button type="submit">Отправить</button>
</form>

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Форма отправлена");
});

//Task2//

const p = document.createElement("p");

p.textContent = "Привет!";
document.body.append(p);

const button = document.createElement("button");

button.textContent = "Нажми меня";

document.body.append(button);

//Task3//

const button = document.querySelector("button");

button.classList.add("active");
button.classList.toggle("hidden");
button.classList.toggle("hidden");

//Task4//

const button = document.querySelector("#button");

button.classList.add("active");

button.remove();