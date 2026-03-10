import promptSync from "prompt-sync";

const prompt = promptSync();

let student = {
    name: prompt("Enter name: "),
    age: Number(prompt("Enter age: ")),
    course: prompt("Enter course: ")
};

console.log("\nStudent Details:");
console.log(student);