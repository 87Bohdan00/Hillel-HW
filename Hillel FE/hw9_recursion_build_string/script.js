let obj = {
   a: 'f',
   b: 78,
   c: 'R',
   d: {
      a: {
         a: null,
         b: 'E',
         c: {
            a: true,
            b: 'C',
            c: 'test',
         },
         d: 'U',
      },
      b: {
         a: 'R',
         b: ['S', 4, 6, 'I'],
         c: 0,
      },
      c: ['O'],
      d: null,
      e: 'N',
   },
};

function RecursionBuildString(obj) {
   let result = '';
   for (let value in obj) {
      if (typeof obj[value] === 'string') {
         let string = obj[value];
         for (let i = 0; i < string.length; i++) {
            let symbol = string[i];
            if (symbol === symbol.toUpperCase() && symbol !== symbol.toLowerCase()) {
               result += symbol;
            }
         }
      } else if (obj[value] !== null) {
         result += RecursionBuildString(obj[value]);
      }
   }
   return result;
}