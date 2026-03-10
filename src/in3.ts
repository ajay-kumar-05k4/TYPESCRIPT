interface Calculator {
    add(a:number, b:number): number
}

let calc: Calculator = {
    add(a,b){
        return a+b
    }
}

console.log(calc.add(10,20))