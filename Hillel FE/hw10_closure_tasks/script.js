//1
function createStack() {
   const stack = [];

   function push(el) {
      stack.push(el);
   }

   function pop() {
      return stack.pop();
   }

   function getStack() {
      return stack.slice();
   }

   return {
      push,
      pop,
      getStack,
   };
}
const finalStack = createStack();

finalStack.push(1);
finalStack.push(10);

console.log(finalStack.getStack());
console.log(finalStack.pop());
console.log(finalStack.getStack());

//2
function isBetween(min, max) {
   if (min > max) {
      alert('min must be less than or equal to max');
   }
   if (typeof min !== 'number' || typeof max !== 'number') {
      alert('Error! Min and max must be numbers.');
   }

   return function (el) {
      return typeof el === 'number' && el >= min && el <= max;
   };
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min;
let max;

console.log(arr.filter(isBetween(3, 6)));

//3
function calculate(operation) {
   return function (a) {
      if (typeof a !== 'number') {
         alert('Error! Use only numbers.');
      }
      return function (b) {
         if (typeof b !== 'number') {
            alert('Error! Use only numbers.');
         }
         switch (operation) {
            case '+':
               return a + b;
            case '-':
               return a - b;
            case '*':
               return a * b;
            case '/':
               return a / b;
            case 'pow':
               return Math.pow(a, b);
            default:
               alert('Error! Use "+", "-", "*", "/", "pow".');
         }
      };
   };
}
console.log(calculate('pow')(2)(3));

//4
function sortByField(fieldName, sortType) {
   return function (a, b) {
      if (sortType === 'asc') {
         return a[fieldName] - b[fieldName];
      }
      return b[fieldName] - a[fieldName];
   };
}

const products = [
   { name: 'Product 1', quantity: 10, price: 25 },
   { name: 'Product 2', quantity: 3, price: 55 },
   { name: 'Product 3', quantity: 22, price: 35 },
];

console.log(products.sort(sortByField('quantity', 'desc')));