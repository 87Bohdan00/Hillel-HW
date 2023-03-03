let action = "";
let answer = "";
let sign = "";

const operation = prompt("Choose operation:\nsum\ndiff\nmult\ndiv\npow\nsin\ncos");

if (operation == "sin" || operation == "cos") {
    const a = Number(prompt("Enter number in radians:"));
    switch (operation) {
        case "sin":
            answer = Math.sin(a);
            action = "Sin";
            break;
        case "cos":
            answer = Math.cos(a);
            action = "Cos";
            break;
    }
    console.log(`${action} of number ${a} = ${answer}`);
} else if (operation == "sum" || operation == "diff" || operation == "mult" || operation == "div" || operation == "pow") {
    const a = Number(prompt("Enter the first number:"));
    const b = Number(prompt("Enter the second number:"));
    switch (operation) {
        case "sum":
            answer = a + b;
            action = "Sum";
            sign = "+";
            break;
        case "diff":
            answer = a - b;
            action = "Diff";
            sign = "-";
            break;
        case "mult":
            answer = a * b;
            action = "Mult";
            sign = "*";
            break;
        case "div":
            answer = a / b;
            action = "Div";
            sign = "/";
            break;
        case "pow":
            answer = Math.pow(a, b);
            action = "Exponentiation";
            sign = "^";
            break;
    }
    console.log(`${action}: ${a} ${sign} ${b} = ${answer}`);
} else {
    console.log("ERROR");
}

// Убрал default со switch/case, потому что, если пользователь введет что-либо кроме числа,
// в консоль выведеться не default, а NaN, потому что прописана функция Number()