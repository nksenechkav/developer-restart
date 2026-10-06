//Task1//

<button id="user" data-id="40" data-name="Oksana">
    Пользователь
</button>

const button = document.querySelector("#user");

console.log(button.dataset.id);
console.log(button.dataset.name);

//Task2//

<div id="users">
    <button data-id="10">Оксана</button>
    <button data-id="20">Анна</button>
    <button data-id="30">Мария</button>
</div>

const users = document.querySelector("#users");

users.addEventListener("click", (event) => {
    console.log(event.target.dataset.id);
});

//Task3//

<div id="users">
    <button data-id="10">
        <span>Оксана</span>
    </button>

    <button data-id="20">
        <span>Анна</span>
    </button>
</div>

const users1 = document.querySelector("#users");

users1.addEventListener("click", (event) => {
    console.log(event.target);
});

//Task4//

<div id="users">
    <button data-id="10">
        <span>Оксана</span>
    </button>

    <button data-id="20">
        <span>Анна</span>
    </button>
</div>

const users2 = document.querySelector("#users");

users2.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    console.log(button.dataset.id);
});