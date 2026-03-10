import promptSync from "prompt-sync";

const prompt = promptSync();

type Student = {
    name: string;
    age: number;
    branch: string;
};

let student: Student = {
    name: prompt("Enter name: "),
    age: Number(prompt("Enter age: ")),
    branch: prompt("Enter branch: ")
};

console.log("\nStudent Details:");
console.log(student);