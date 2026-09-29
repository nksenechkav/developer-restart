//Task1//

<div id="box">
    <button id="button">Нажми меня</button>
</div>

const box = document.querySelector("#box");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    console.log("Кнопка");
});

box.addEventListener("click", () => {
    console.log("Box");
});

//Task2//

<div id="box">
    <button>Яблоки</button>
    <button>Бананы</button>
</div>

box.addEventListener("click", (event) => {
    console.log(event.target.textContent);
});