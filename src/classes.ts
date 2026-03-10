import promptSync from "prompt-sync";

const prompt = promptSync();

class BankAccount {

    public name: string
    private balance: number

    constructor(name: string, balance: number) {
        this.name = name
        this.balance = balance
    }

    deposit(amount: number): void {
        this.balance += amount
        console.log("Deposited:", amount)
    }

    showBalance(): void {
        console.log("Current Balance =", this.balance)
    }
}

let name = prompt("Enter account holder name: ");
let balance = Number(prompt("Enter initial balance: "));

let account = new BankAccount(name, balance);

let depositAmount = Number(prompt("Enter amount to deposit: "));
account.deposit(depositAmount);

account.showBalance();