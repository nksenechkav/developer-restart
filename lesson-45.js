//Task1//

async function getUsers() {
  const response = await fetch("https://example.com/users");
  const data = await response.json();

  console.log(data);
}

//Task2//

async function getUsers2() {
  const response2 = await fetch("URL");
  const data2 = await response2.json();

  console.log(data2[0].name);
  console.log(data2[1].age);
}

getUsers2();

//Task3//

async function getUsers3() {
  try {
    const response3 = await fetch("URL");
    const data3 = await response3.json();

    console.log(data3);
  } catch (error) {
    console.log("Ошибка при получении данных");
  }
}

//Task4//

async function getUsers4() {
  try {
    const response4 = await fetch("URL");
    const data4 = await response4.json();

    console.log(data4);
  } catch (error) {
    console.log("Ошибка");
  }

  console.log("Функция завершена");
}

getUsers4();