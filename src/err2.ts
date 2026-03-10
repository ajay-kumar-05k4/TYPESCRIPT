function checkAge(age:number) {
    
    if(age < 18){
        throw new Error("You are not eligible")
    }

    console.log("You are eligible")
}

checkAge(16)