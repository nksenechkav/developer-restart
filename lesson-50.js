//Task1//
const text = document.createElement("p");
text.textContent = "Оксана!";

document.body.append(text);

const p = document.createElement("p");
p.textContent = "Привет";

document.body.prepend(p);

//Task2//

<body>
    <div id="box">
        <p>Привет</p>
        <button>Нажми</button>
    </div>
</body>

box.children;
box.parentElement;

//Task3//

  <div id="box">
        <h2>Заголовок</h2>
        <p>Текст</p>
        <button>Нажми</button>
  </div>


box.firstElementChild;
box.lastElementChild;