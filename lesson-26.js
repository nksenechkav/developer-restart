//Task1//

const account1 = {
    owner: "Oksana",
    balance: 100,

    deposit(amount) {
        this.balance = this.balance + amount;
    }
};

account1.deposit(50);

console.log(account1.balance);

//Task2//

const account = {
    balance: 100,

    deposit(amount) {
        this.balance = this.balance + amount;
    }
};

account.deposit(50);
account.deposit(20);
account.deposit(30);

console.log(account.balance);