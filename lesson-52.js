//Task1//

<ul id="list"></ul>

const list = document.querySelector("#list");

const item = document.createElement("li");

const item2 = document.createElement("li");
item.textContent = "Яблоки";
item2.textContent = "Бананы";

list.append(item);

list.append(item2);

//Task2//

const fruits = ["Яблоки", "Бананы", "Апельсины"];

const list2 = document.querySelector("#list");

for (const fruit of fruits) {
    const item = document.createElement("li");
    item.textContent = fruit;
    list2.append(item);
}
