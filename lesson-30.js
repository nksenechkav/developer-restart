//Task1//

const account = {
    owner: "Oksana",
    balance: 500,

    deposit(amount) {
        this.balance = this.balance + amount;
    },

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            return true;
        }

        return false;
    },

    getBalance() {
        return this.balance;
    }
};

account.deposit(200);

const success = account.withdraw(300);

console.log(success);
console.log(account.getBalance());

//Task2//

const user1 = {
    name: "Oksana",
    age: 40,

    getInfo() {
        return {
            name: this.name,
            age: this.age
        };
    }
};

const info = user1.getInfo();

console.log(info);


//Task3//

const user = {
    name: "Oksana",
    age: 40,

    getUpdatedUser(newAge) {
        this.age = newAge;

        return {
            name: this.name,
            age: this.age
        };
    }
};

const updatedUser = user.getUpdatedUser(41);

console.log(updatedUser);
console.log(user);