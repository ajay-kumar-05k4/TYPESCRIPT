function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: any, b: any): any {
    return a + b;
}

console.log(combine(10, 20));
console.log(combine("Hello ", "World"));