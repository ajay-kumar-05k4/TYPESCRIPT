import promptSync from "prompt-sync";

const prompt = promptSync();

function multiply(a: number, b: number): number {
    return a * b;
}

let num1: number = Number(prompt("Enter first number: "));
let num2: number = Number(prompt("Enter second number: "));

let result = multiply(num1, num2);

console.log("Product =", result);