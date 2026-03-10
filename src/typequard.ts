function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase())
  } else {
    console.log(value * 2)
  }
}
print("Hello TypeScript")
print(10)