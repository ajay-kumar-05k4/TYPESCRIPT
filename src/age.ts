import promptSync from "prompt-sync";

const prompt = promptSync();

let age: number = Number(prompt("Enter your age: "));

let isAdult: boolean = age >= 18;

console.log("Adult:", isAdult);