import promptSync from "prompt-sync";

const prompt = promptSync();
type Product = {
    name: string
    price: number
    quantity: number
}

function calculateBill(product: Product): number {
    return product.price * product.quantity;
}

let name = prompt("Enter product name: ");
let price = Number(prompt("Enter price: "));
let quantity = Number(prompt("Enter quantity: "));

let product: Product = {
    name,
    price,
    quantity
};

let bill = calculateBill(product);

console.log("Total Bill =", bill);