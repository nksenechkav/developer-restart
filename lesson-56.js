//Task1//

<div>
    <input id="name"></input>
    <button id="save">Сохранить</button>
    <p id="result"></p>
</div>

const input = document.querySelector("#name");
const button = document.querySelector("#save");

button.addEventListener("click", () => {
    localStorage.setItem("name", input.value);
});

//Task2//

const savedName = localStorage.getItem("name");

if (savedName) {
    result.textContent = savedName;
}

//Task3//

button.addEventListener("click", () => {
    if (input.value.trim() === "") {
        console.log("Введите имя");
        return;
    }

    if (input.value.length < 2) {
    console.log("Имя слишком короткое");
    return;
}

    localStorage.setItem("name", input.value);
});