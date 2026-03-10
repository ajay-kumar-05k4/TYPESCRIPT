import promptSync from "prompt-sync";

const prompt = promptSync();

let principal: number = Number(prompt("Enter principal amount: "));
let rate: number = Number(prompt("Enter rate of interest: "));
let time: number = Number(prompt("Enter time (years): "));

let simpleInterest: number = (principal * rate * time) / 100;

console.log("Simple Interest =", simpleInterest);