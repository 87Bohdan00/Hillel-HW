const sum = "+";
const diff = "-";
const mult = "*";
const div = "/";
const pow = "pow";
const sin = "sin";
const cos = "cos";
let a;
let b;
let result;

const operation = prompt("Choose operation:\n +\n -\n *\n /\n pow\n sin\n cos");

switch (operation) {
    case sin:
        a = prompt("Enter number in radians:");
        result = Math.sin(a);
        break;
    case cos:
        a = prompt("Enter number in radians:");
        result = Math.cos(a);
        break;
}

switch (operation) {
    case sum:
        a = +prompt("Enter the first number:");
        b = +prompt("Enter the second number:");
        result = a + b;
        break;
    case diff:
        a = +prompt("Enter the first number:");
        b = +prompt("Enter the second number:");
        result = a - b;
        break;
    case mult:
        a = +prompt("Enter the first number:");
        b = +prompt("Enter the second number:");
        result = a * b;
        break;
    case div:
        a = +prompt("Enter the first number:");
        b = +prompt("Enter the second number:");
        result = a / b;
        break;
    case pow:
        a = +prompt("Enter the first number:");
        b = +prompt("Enter the second number:");
        result = Math.pow(a, b);
        break;
}

console.log(`Operation ${operation} finished with result ${result}`);