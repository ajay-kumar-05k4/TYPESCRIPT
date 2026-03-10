try {
   let num = 10 / 0
   console.log(num)
}
catch(err) {
   console.log("Error occurred")
}
finally {
   console.log("Execution finished")
}