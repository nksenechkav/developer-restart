//Task1//

<div id="container"></div>

const container = document.querySelector("#container");

const button = document.createElement("button");

button.textContent = "Привет, Оксана!";

button.addEventListener("click", () => {
    console.log("Добро пожаловать!");
});

container.append(button);

//Task2//

<div id="products"></div>

const products = ["Телефон", "Ноутбук", "Наушники"];

const productsList = document.querySelector("#products");

for (const product of products) {
    const p = document.createElement("p");
    p.textContent = product;
    productsList.append(p);
}

//Task3//

<div id="products2">

    <div class="product">
        <span>Телефон</span>
        <button>Удалить</button>
    </div>

    <div class="product">
        <span>Ноутбук</span>
        <button>Удалить</button>
    </div>

</div>

const products2 = document.querySelector("#products2");

products2.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    const product = button.closest(".product");

    product.remove();
});

//Task4//

<div id="products3">

    <div class="product">
        <span class="name">Телефон</span>
        <button>Изменить</button>
    </div>

    <div class="product">
        <span class="name">Ноутбук</span>
        <button>Изменить</button>
    </div>

</div>


const products3 = document.querySelector("#products3");

products3.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    const product = button.closest(".product");

    const name = product.querySelector(".name");

    name.textContent = "Изменено!";

    product.classList.add("active");
});

//Task5//

<div id="products4"></div>

const products4 = ["Телефон", "Ноутбук", "Наушники"];

const productsList4 = document.querySelector("#products4");

for (const product of products4) {
    const div = document.createElement("div");
    productsList4.append(div);
    div.classList.add("product");

    const span = document.createElement("span");
    span.textContent = product;
    div.append(span);
    span.classList.add("name");

    const editButton = document.createElement("button");
    editButton.textContent = "Изменить";
    div.append(editButton);
    editButton.classList.add("edit");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    div.append(deleteButton);
    deleteButton.classList.add("delete");
}

productsList4.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    const product = button.closest(".product");
    const name = product.querySelector(".name");

    if (button.classList.contains("delete")) {
    product.remove();
    return;
    }

    if (button.classList.contains("edit")) {

    name.textContent = "Изменено!";

    product.classList.add("active");
}
    
});