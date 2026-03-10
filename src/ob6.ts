let student: { readonly id: number; name: string };

student = {
    id: 101,
    name: "Ajay"
};

student.name = "Rahul";  // allowed
// student.id = 200 ❌ error