const sum = "+";
const diff = "-";
const mult = "*";
const div = "/";
const pow = "^";
let answer = "";
let action = "";
let sign = "";

const choice = prompt("Do you want to use 1 operand or 2 operands?");

if (choice == 1) {
    const operationOneNum = prompt("Choose operation:\nsin\ncos");
    const a = Number(prompt("Enter number in radians:"));
    if (operationOneNum == "sin") {
        answer = Math.sin(a);
        action = "Sin";
    } else {
        answer = Math.cos(a);
        action = "Cos";
    }
    console.log(`${action} of number ${a} = ${answer}`);
} else if (choice == 2) {
    const a = Number(prompt("Enter the first number:"));
    const b = Number(prompt("Enter the second number:"));
    const operationTwoNum = prompt("Choose operation:\nsum(+)\ndiff(-)\nmult(*)\ndiv(/)\nexponentiation(^, exp)");
    if (operationTwoNum == sum) {
        answer = a + b;
        action = "Sum";
        sign = "+";
    } else if (operationTwoNum == diff) {
        answer = a - b;
        action = "Diff";
        sign = "-";
    } else if (operationTwoNum == mult) {
        answer = a * b;
        action = "Mult";
        sign = "*";
    } else if (operationTwoNum == div) {
        answer = a / b;
        action = "Div";
        sign = "/";
    } else {
        answer = Math.pow(a, b);
        action = "Exponentiation";
        sign = "^";
    }
    console.log(`${action}: ${a} ${sign} ${b} = ${answer}`);
} else {
    console.log("ERROR");
}
