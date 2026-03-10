import promptSync from "prompt-sync"
const prompt = promptSync()

let arr:number[] = [10,20,30,40]

try{

   let index = Number(prompt("Enter index: "))

   if(index < 0 || index >= arr.length){
       throw new Error("Invalid index")
   }

   console.log("Element:", arr[index])

}
catch(error){

   if(error instanceof Error){
      console.log(error.message)
   }

}