import promptSync from "prompt-sync";

const prompt = promptSync();

interface Question {
    question: string
    answer: string
}

let questions: Question[] = [
    { question: "Capital of India?", answer: "delhi" },
    { question: "2 + 2 ?", answer: "4" },
    { question: "Language of browser?", answer: "javascript" }
];

let score = 0;

for (let q of questions) {

    let userAnswer = prompt(q.question + " ");

    if (userAnswer.toLowerCase() === q.answer) {
        score++;
    }
}

console.log("Your Score =", score);