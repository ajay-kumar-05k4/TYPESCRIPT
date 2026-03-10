import promptSync from "prompt-sync"

const prompt = promptSync()

interface Product {
    name: string
    price: number
    discount: number
}

let product: Product = {
    name: prompt("Enter product name: "),
    price: Number(prompt("Enter product price: ")),
    discount: Number(prompt("Enter discount percentage: "))
}

let finalPrice = product.price - (product.price * product.discount / 100)

console.log("\nProduct Details")
console.log("Name:", product.name)
console.log("Price:", product.price)
console.log("Discount:", product.discount + "%")
console.log("Final Price:", finalPrice)