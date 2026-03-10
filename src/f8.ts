import promptSync from "prompt-sync";

const prompt = promptSync();

function isPrime(num: number): boolean {

    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

let num: number = Number(prompt("Enter a number: "));

if (isPrime(num)) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}