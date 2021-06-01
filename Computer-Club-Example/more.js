function addAndPrint(a, b) {
    const sum = a + b;
    console.log(a + " + " + b + " = " + sum);

}

addAndPrint(2, 3);
addAndPrint(5, 7);

const myObj = {
    foo: 2,
    bar: "string",
    printSomething: function(myArg) {
        console.log(myArg);
    },
    printFoo() {
        this.printSomething(this.foo);
    }
};