import promptSync from "prompt-sync";
const prompt = promptSync();

enum Operation {
    Add = 1,
    Subtract,
    Multiply,
    Divide
}

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

console.log("1.Add 2.Subtract 3.Multiply 4.Divide");

let choice = Number(prompt("Enter choice: "));

switch(choice){

    case Operation.Add:
        console.log("Result =", a + b);
        break;

    case Operation.Subtract:
        console.log("Result =", a - b);
        break;

    case Operation.Multiply:
        console.log("Result =", a * b);
        break;

    case Operation.Divide:
        console.log("Result =", a / b);
        break;

    default:
        console.log("Invalid choice");
}