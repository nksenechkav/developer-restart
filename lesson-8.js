// Task 1//

const hasTicket = false;
const isVIP = true;

if (hasTicket || isVIP) {
    console.log ("Welcome!")
} else {
    console.log ("Access denied.")
}

// const isStudent = true;

// if (isStudent) {
//     console.log("Discount");
// } else {
//     console.log("Full price");
// }

// Task 2//

const isStudent = false;

if (!isStudent) {
    console.log("Not a student");
}


// Task 3//

const isLoggedIn = true;

const isAdmin = false;

if (isLoggedIn && !isAdmin) {

    console.log("Regular user");

} else {

    console.log("Administrator");

}

// Task 4//

const inStock = true;
const money =120;
const price = 100;

if (inStock && money >= price) {
    console.log ("Purchase successful");
} else {
    console.log ("Not enough conditions for purchase");
}