//Task1//

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Данные получены");
  }, 2000);
});

//Task2//

const promise2 = Promise.resolve("Привет!");

promise2.then((result) => {
  console.log(result);
});

//Task3//

async function showMessage() {
  const result = await Promise.resolve("Привет!");
  console.log(result);
}

showMessage();

//Task4//

async function getData() {
  const result = await Promise.resolve(100);
  console.log(result);
  console.log("Готово");
}

getData();