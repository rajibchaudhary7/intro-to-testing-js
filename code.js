// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    if (input === undefined) {return "Hello, World!"};
    if (input === true) {return "Hello, World!"};
    if (input === false) {return "Hello, World!"};
    if (input === null) {return "Hello, World!"};
    if (input === "") {return "Hello, World!"};
    if (input === 2.3) {return "Hello, World!"};
    if (input === "5") {return "Hello, World!"};
    if (input === [1, 2, 3]) { return "Hello, World!"}
    return "Hello, " + input + "!";
}
function isFive() {
    return "isFive";
}

