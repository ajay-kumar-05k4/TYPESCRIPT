import promptSync from "prompt-sync";

const prompt = promptSync();

let name: string = prompt("Enter your name: ");
let college: string = prompt("Enter your college: ");

console.log(`Hello ${name} from ${college}`);