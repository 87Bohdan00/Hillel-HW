const sum = '+';
const diff = '-';
const mult = '*';
const div = '/';
const pow = 'pow';
const sin = 'sin';
const cos = 'cos';
const history = 'history';
let operation;
let numValidA;
let numValidB;
let a;
let b;
let result;
let repeat;
let historyArr = [];
let i = 0;

do {
    do {
        operation = prompt('Choose operation:\n +\n -\n *\n /\n pow\n sin\n cos\n history');
    } while (operation !== null && operation !== sum && operation !== diff && operation !== mult && operation !== div && operation !== pow && operation !== sin && operation !== cos && operation !== history);

    if (operation == null) {
        break;
    }

    if (operation == 'sin' || operation == 'cos') {
        do {
            a = prompt('Enter number in radians:');
            numValidA = +a;
        } while (a === '' || +a !== numValidA);
        if (operation == sin) {
            result = Math.sin(a);
        } else {
            result = Math.cos(a);
        }
    } else if (operation == 'history') {
        let j = 0;
        while (j < historyArr.length) {
            console.log(historyArr[j]);
            j++;
        }
        break;
    } else {
        do {
            a = +prompt('Enter the first number:');
            numValidA = +a;
            b = +prompt('Enter the second number:');
            numValidB = +b;
        } while (a === '' || +a !== numValidA && b === '' || +b !== numValidB);
        if (operation == sum) {
            result = a + b;
            operation = 'sum';
        } else if (operation == diff) {
            result = a - b;
            operation = 'diff';
        } else if (operation == mult) {
            result = a * b;
            operation = 'mult';
        } else if (operation == div) {
            result = a / b;
            operation = 'div';
        } else {
            result = Math.pow(a, b);
            operation = 'pow';
        }
    }

    console.log(`Operation ${operation} finished with result ${result}`);

    historyArr[i] = `${i + 1}. Operation ${operation} finished with result ${result}`;
    ++i;

    repeat = confirm('Do you want to do any more calculations?');

} while (repeat === true);