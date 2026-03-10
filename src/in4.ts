interface Student {
    name: string
    age: number
}

let students: Student[] = [
    {name:"Ajay", age:20},
    {name:"Rahul", age:21},
    {name:"Sneha", age:19}
]

students.forEach(s => console.log(s.name))