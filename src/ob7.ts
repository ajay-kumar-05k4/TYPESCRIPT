let calculator = {
    a: 10,
    b: 20,

    add: function () {
        return this.a + this.b;
    }
};

console.log(calculator.add());