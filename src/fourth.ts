import promptSync from "prompt-sync";

const prompt = promptSync();

let celsius: number = Number(prompt("Enter Celsius: "));

let fahrenheit: number = (celsius * 9/5) + 32;

console.log("Fahrenheit =", fahrenheit);