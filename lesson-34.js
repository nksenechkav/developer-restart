//Task1//

const user1 = {
    name: "Oksana",
    age: 40
};

const city1 = user1.city ?? "Kettenkamp";
const country1 = user1.country ?? "Germany";
const age = user1.age ?? 18;

console.log(city1);
console.log(country1);
console.log(age);

//Task2//

const user = {
    name: "Oksana",
    address: {
        city: "Kettenkamp"
    }
};

const city = user.address?.city ?? "Unknown";
const country = user.address?.country ?? "Germany";
const street = user.address?.street ?? "Unknown street";

console.log(city);
console.log(country);
console.log(street);

//Task3//

const a = 0 || 100;
const b = 0 ?? 100;

const c = "" || "Hello";
const d = "" ?? "Hello";

const e = null || "Default";
const f = null ?? "Default";

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

//Task4//

const settings = {
    volume: 0,
    username: "",
    notifications: false,
    theme: null
};

const volume = settings.volume ?? 50;
const username = settings.username || "Guest";
const notifications = settings.notifications ?? true;
const theme = settings.theme ?? "light";

console.log(volume);
console.log(username);
console.log(notifications);
console.log(theme);