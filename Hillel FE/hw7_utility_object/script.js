// reverse
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// verifyNumbers
// const source = ['1235', 1, 2, {}, [], 'sda', 3,]

// getMin
// const source = [1, 2, 432, 22, 0, 45, -156, 8932, 9];

//getAverage
// const source = [1, 2, 3, 4];

// getMaxString
// const source = ['abc', '1111', 'qwerty', 'f'];

const utils = {
    reverse: function (source) {
      let sourceReverse = [];
      let j = 0;
      for (let i = source.length - 1; i >= 0; i--) {
        sourceReverse[j] = source[i];
        ++j;
      }
      return sourceReverse;
    },
    verifyNumbers: function (source) {
      let sourceVerifyNum = [];
      let j = 0;
      for (let i = 0; i < source.length; i++) {
        if (source[i] === +source[i]) {
          sourceVerifyNum[j] = source[i];
          ++j;
        }
      }
      return sourceVerifyNum;
    },
    getMin: function (source) {
      for (let i = 0; i < source.length; i++) {
        if (source[0] > source[i]) {
          source[0] = source[i];
        }
      }
      return source[0];
    },
    getAverage: function (source) {
      let average = 0;
      for (let i = 0; i < source.length; i++) {
        average += source[i];
      }
      average /= source.length;
      return average;
    },
    getMaxString: function (source) {
      let MaxString = 0;
      let word = "";
      for (let i = 0; i < source.length; i++) {
        if (source[i].length > MaxString) {
          MaxString = source[i].length;
          word = source[i];
        }
      }
      return word;
    },
  };
  
// utils.reverse(source);
  
// utils.verifyNumbers(source);
  
// utils.getMin(source);
  
// utils.getAverage(source);
  
// utils.getMaxString(source);