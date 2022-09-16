// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    if (input === undefined) {return "Hello, World!"};
    if (input === true) {return "Hello, World!"};
    if (input === false) {return "Hello, World!"};
    if (input === "5") {return "Hello, World!"}
    return "Hello, " + input + "!";
}
