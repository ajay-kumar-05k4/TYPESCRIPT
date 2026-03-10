import promptSync from "prompt-sync";

const prompt = promptSync();

function factorial(n: number): number {

    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

let n: number = Number(prompt("Enter a number: "));

console.log("Factorial =", factorial(n));