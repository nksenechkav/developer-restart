//Task1//

const product1 = {
    name: "Laptop",
    price: 1000,

    getDiscountedPrice(discount) {
        return this.price - discount;
    }
};

const finalPrice = product1.getDiscountedPrice(200);

console.log(finalPrice);

//Task2//

const product = {
    name: "Laptop",
    price: 1000,

    applyDiscount(discount) {
        this.price = this.price - discount;
    }
};

product.applyDiscount(200);

console.log(product.price);

//Task3//

const account1 = {
    balance: 500,

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            return this.balance;
        }

        return this.balance;
    }
};

const remainingBalance = account1.withdraw(150);

console.log(remainingBalance);
console.log(account1.balance);

//Task4//

const account2 = {
    balance: 500,

    withdraw(amount) {
        if (amount > this.balance) {
            return "Not enough money";
        }

        this.balance = this.balance - amount;
        return this.balance;
    }
};

const result = account2.withdraw(300);

console.log(result);
console.log(account2.balance);

//Task5//

const account3 = {
    balance: 500,

    hasEnoughMoney(amount) {
        return amount <= this.balance;
    }
};

const canBuy = account3.hasEnoughMoney(300);

console.log(canBuy);

//Task6//

const account = {
    balance: 500,

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            return true;
        }

        return false;
    }
};

const success = account.withdraw(300);


if (success) {
    console.log("Money withdrawn successfully");
}

console.log(account.balance);