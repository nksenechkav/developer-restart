const account = {
    owner: "Oksana",
    balance: 200,

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
        }
    }
};

account.withdraw(70);

console.log(account.balance);