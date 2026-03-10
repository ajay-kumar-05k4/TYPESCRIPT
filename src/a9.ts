import promptSync from "prompt-sync";

const prompt = promptSync();

let students: string[] = [];

for (let i = 0; i < 5; i++) {
    let name = prompt(`Enter student ${i + 1} name: `);
    students.push(name);
}

console.log("\nStudent List:");

for (let student of students) {
    console.log(student);
}
students.sort();
console.log("\nSorted Student List:");
console.log(students);