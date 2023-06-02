class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    welcome() {
        return `Hi! I'm ${this.name} ${this.surname}`;
    }
}

class Student extends Person {
    constructor(name, surname, faculty, marks) {
        super(name, surname);
        this.marks = marks;
        this.faculty = faculty;
    }

    getAvgMark() {
        return (
            this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length
        );
    }

    getMedianMark() {
        const sortedMarks = this.marks.slice().sort((a, b) => a - b);
        const middleIndex = Math.floor(sortedMarks.length / 2);
        let result = 0;

        if (sortedMarks.length % 2 === 0) {
            result =
                (sortedMarks[middleIndex - 1] + sortedMarks[middleIndex]) / 2;
        } else {
            result = sortedMarks[middleIndex];
        }

        return result;
    }

    getMaxMark() {
        return Math.max(...this.marks);
    }

    getMinMark() {
        return Math.min(...this.marks);
    }

    getTotal() {
        return this.marks.reduce((acc, mark) => acc + mark, 0);
    }

    getInfo() {
        return `${this.name} - ${this.faculty} - ${this.getTotal()}`;
    }
}

class Headman extends Student {
    constructor(name, surname, faculty, marks) {
        super(name, surname, faculty, marks);
    }

    defendGroup() {
        return `This is my group. I'm their hero!`;
    }
}

const person = new Person('John', 'Smith');
console.log(person.welcome());

const student = new Student(
    'Jane',
    'Smith',
    'Software Engineer',
    [92, 99, 100, 74, 85]
);
console.log(student.welcome());
console.log(student.getAvgMark());
console.log(student.getMedianMark());
console.log(student.getMaxMark());
console.log(student.getMinMark());
console.log(student.getTotal());
console.log(student.getInfo());

const headman = new Headman('Bruce', 'Smith', 'DevOps', [100, 94, 92, 87, 91]);
console.log(headman.welcome());
console.log(headman.defendGroup());
console.log(headman.getAvgMark());
console.log(headman.getMedianMark());
console.log(headman.getMaxMark());
console.log(headman.getMinMark());
console.log(headman.getTotal());
console.log(headman.getInfo());