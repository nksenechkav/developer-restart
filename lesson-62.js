//Task1//

<div id="products"></div>

let products = [
    { id: 1, name: "Книга", price: 15 },
    { id: 2, name: "Рюкзак", price: 40 }
];

const productsList = document.querySelector("#products");

function renderProducts() {
    productsList.innerHTML = "";

    for (const product of products) {
        const p = document.createElement("p");

        p.textContent = `${product.name} — ${product.price} €`;

        productsList.append(p);
    }
}

renderProducts();

//Task2//

function renderProducts() {
    productsList.innerHTML = "";

    for (const product of products) {
        const p = document.createElement("p");

        p.textContent = `${product.name} — ${product.price} €`;

        productsList.append(p);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        p.append(deleteButton);
        
        deleteButton.addEventListener("click", () => {
        products = products.filter(item => item.id !== product.id);
        renderProducts();
        })
    }
};

renderProducts();

//Task3//

function renderProducts() {
    productsList.innerHTML = "";

    for (const product of products) {
        const p = document.createElement("p");

        p.textContent = `${product.name} — ${product.price} €`;

        productsList.append(p);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        p.append(deleteButton);
        
        deleteButton.addEventListener("click", () => {
        products = products.filter(item => item.id !== product.id);
        renderProducts();
        })
    }
};

products.push({ id: 3, name: "Мышка", price: 25 });
renderProducts();

//Task4//

function renderProducts() {
    productsList.innerHTML = "";

    for (const product of products) {
        const p = document.createElement("p");
        p.textContent = `${product.name} — ${product.price} €`;
        productsList.append(p);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        p.append(deleteButton);

        const editButton = document.createElement("button");
        editButton.textContent = "Изменить";
        p.append(editButton);
        
        deleteButton.addEventListener("click", () => {
        products = products.filter(item => item.id !== product.id);
        renderProducts();
        })

        editButton.addEventListener("click", () => {
        product.price = 20;
        renderProducts();
        })
    }
};

products.push({ id: 3, name: "Мышка", price: 25 });
renderProducts();

//Task5//

<div>
<input id="productName" placeholder="Название товара"></input>
<input id="productPrice" type="number" placeholder="Цена"></input>
<button id="addButton">Добавить</button>
</div>

const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const addButton = document.querySelector("#addButton");

function renderProducts() {
    productsList.innerHTML = "";

    for (const product of products) {
        const p = document.createElement("p");
        p.textContent = `${product.name} — ${product.price} €`;
        productsList.append(p);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        p.append(deleteButton);
        
        deleteButton.addEventListener("click", () => {
        products = products.filter(item => item.id !== product.id);
        renderProducts();
        })
    }                   
};

addButton.addEventListener("click", () => {
        const id = Date.now();
        const name = productName.value;
        const price = Number(productPrice.value);
        
        if (name.trim() === "" || productPrice.value === "") {
                return;
            }
        products.push({ id, name, price});
        renderProducts();
        productName.value = "";
        productPrice.value = "";
        });

renderProducts();

//Task6//

function renderProducts() {
    productsList.innerHTML = "";

    for (const product of products) {
        const p = document.createElement("p");
        p.textContent = `${product.name} — ${product.price} €`;
        productsList.append(p);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        p.append(deleteButton);
        
        const editButton = document.createElement("button");
        editButton.textContent = "Изменить цену";
        p.append(editButton);
        
        deleteButton.addEventListener("click", () => {
        products = products.filter(item => item.id !== product.id);
        renderProducts();
        })

        editButton.addEventListener("click", () => {
       if (productPrice.value === "") {
        return;
            }
            product.price = Number(productPrice.value);
            renderProducts();
        })
    }                   
};

addButton.addEventListener("click", () => {
        const id = Date.now();
        const name = productName.value;
        const price = Number(productPrice.value);
        
        if (name.trim() === "" || productPrice.value === "") {
                return;
            }
        products.push({ id, name, price});
        renderProducts();
        productName.value = "";
        productPrice.value = "";
        });

renderProducts();