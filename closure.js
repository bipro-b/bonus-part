

// Closure

const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            balance -= amount;
            return balance;
        }
    }
}

const sonalibank = bank('hatem');

console.log(sonalibank.deposit(100));
console.log(sonalibank.deposit(300));
console.log(sonalibank.deposit(400));
console.log(sonalibank.balance);
console.log(sonalibank.withdraw(300));