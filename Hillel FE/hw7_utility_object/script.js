// reverse
//const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// verifyNumbers
//const source = ['1235', 1, 2, {}, [], 'sda', 3]

// getMin
//const source = [1, 2, 432, 22, 0, 45, -156, 8932, 9];

//getAverage
//const source = [1, 2, 3, ];

// getMaxString
//const source = ['abc', '1111', 'qwerty', 'f'];

const utils = {
    reverse: function (source) {
        for (let i = source.length - 1; i >= 0; i--) {
            console.log(source[i]);
        }
    },
    verifyNumbers: function (source) {
        for (let i = 0; i < source.length; i++) {
            if (source[i] === +source[i]) {
                console.log(source[i]);
            }
        }
    },
    getMin: function (source) {
        for (let i = 0; i < source.length; i++) {
            if (source[0] > source[i]) {
                source[0] = source[i];
            }
        }
        return console.log(source[0]);
    },
    getAverage: function (source) { // Если длина массива нечетная [1, 2, 3], выводит 3. Если четная [1, 2, 3, 4], выводит 2, 3.
        let sourceIndex1;
        let sourceIndex2;
        if (source.length % 2 === 1) {
            for (let i = 0; i < source.length; i++) {
                sourceIndex1 = source.length / 2 - 0.5;
                return console.log(source[sourceIndex1]);
            }
        } else {
            for (let i = 0; i < source.length; i++) {
                sourceIndex1 = source.length / 2 - 1;
                sourceIndex2 = source.length / 2;
                return console.log(source[sourceIndex1], source[sourceIndex2]);
            }
        }
    },
    getMaxString: function (source) {
        let MaxString = 0;
        let word = '';
        for (let i = 0; i < source.length; i++) {
            if (source[i].length > MaxString) {
                MaxString = source[i].length;
                word = source[i];
            }
        }
        return console.log(word);
    }
}

//utils.reverse(source);

//utils.verifyNumbers(source);

//utils.getMin(source);

//utils.getAverage(source);

//utils.getMaxString(source);