function combine<T, U>(value1: T, value2: U) {
    return [value1, value2]
}

console.log(combine(10, "Hello"))
console.log(combine("Ajay", true))