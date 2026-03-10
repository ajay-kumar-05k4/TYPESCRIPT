function greet(name: string, age?: number): void {
    console.log("Name:", name);

    if (age !== undefined) {
        console.log("Age:", age);
    }
}

greet("Ajay");
greet("Ajay", 21);