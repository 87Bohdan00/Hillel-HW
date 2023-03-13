let operation;
let a;
let b;
let result;
let repeat;
let historyArr = [];
let i = 0;

function sumOp(a, b) {
    result = a + b;
    return result;
}

function subOp(a, b) {
    result = a - b;
    return result;
}

function multOp(a, b) {
    result = a * b;
    return result;
}

function divOp(a, b) {
    result = a / b;
    return result;
}

function powOp(a, b) {
    result = Math.pow(a, b);
    return result;
}

function sinOp(a) {
    result = Math.sin(a);
    return result;
}

function cosOp(a) {
    result = Math.cos(a);
    return result;
}

function checkInputOp() {
    do {
        operation = prompt('Choose operation:\n sum\n sub\n mult\n div\n pow\n sin\n cos\n history');
    } while (operation !== null && operation !== 'sum' && operation !== 'sub' && operation !== 'mult' && operation !== 'div' && operation !== 'pow' && operation !== 'sin' && operation !== 'cos' && operation !== 'history');
    return operation;
}

function checkInputNum() {
    if (operation === 'sin' || operation === 'cos') {
        do {
            a = +prompt('Enter the number A:');
        } while (!a && a !== 0)
        return a;
    } else {
        do {
            a = +prompt('Enter the number A:');
            b = +prompt('Enter the number B:');
        } while (!a && a !== 0 || !b && b !== 0);
        return a, b;
    }
}

do {
    checkInputOp(operation);

    if (operation === null) {
        break;
    }

    switch (operation) {
        case 'sin':
            checkInputNum(a);
            sinOp(a);
            break;
        case 'cos':
            checkInputNum(a);
            cosOp(a);
            break;
        case 'sum':
            checkInputNum(a, b);
            sumOp(a, b);
            break;
        case 'sub':
            checkInputNum(a, b);
            subOp(a, b);
            break;
        case 'mult':
            checkInputNum(a, b);
            multOp(a, b);
            break;
        case 'div':
            checkInputNum(a, b);
            divOp(a, b);
            break;
        case 'pow':
            checkInputNum(a, b);
            powOp(a, b);
            break;
        case 'history':
            let j = 0;
            while (j < historyArr.length) {
                console.log(historyArr[j]);
                j++;
            }
            break;
    }

    if (operation === 'history') {
        break;
    }

    console.log(`Operation ${operation} finished with result ${result}`);

    historyArr[i] = `${i + 1}. Operation ${operation} finished with result ${result}`;
    ++i;

    repeat = confirm('Do you want to do any more calculations?');

} while (repeat === true);