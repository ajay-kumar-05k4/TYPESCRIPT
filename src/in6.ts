interface Person {
    name: string
    age: number
}

interface Student extends Person {
    branch: string
}

let s1: Student = {
    name: "Ajay",
    age: 20,
    branch: "CSE"
}