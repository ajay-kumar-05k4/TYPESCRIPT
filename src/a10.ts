import promptSync from "prompt-sync";

const prompt = promptSync();

let marks: number[] = [];
let sum = 0;

let n = Number(prompt("Enter number of subjects: "));

for (let i = 0; i < n; i++) {
    let mark = Number(prompt(`Enter marks of subject ${i + 1}: `));
    marks.push(mark);
    sum += mark;
}

let avg = sum / n;

let grade: string;

if (avg >= 90) grade = "A+";
else if (avg >= 80) grade = "A";
else if (avg >= 70) grade = "B";
else if (avg >= 60) grade = "C";
else grade = "Fail";

console.log("\nAverage:", avg);
console.log("Grade:", grade);