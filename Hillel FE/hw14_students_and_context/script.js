function Student(name, faculty, marks) {
   this.name = name;
   this.faculty = faculty;
   this.marks = marks;

   this.getAvgMark = function () {
      return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
   };

   this.getMedianMark = function () {
      const sortedMarks = this.marks.slice().sort((a, b) => a - b);
      const middleIndex = Math.floor(sortedMarks.length / 2);
      let result = 0;

      if (sortedMarks.length % 2 === 0) {
         result = (sortedMarks[middleIndex - 1] + sortedMarks[middleIndex]) / 2;
      } else {
         result = sortedMarks[middleIndex];
      }

      return result;
   };

   this.getMaxMark = function () {
      return Math.max(...this.marks);
   };

   this.getMinMark = function () {
      return Math.min(...this.marks);
   };

   this.getTotal = function () {
      return this.marks.reduce((acc, mark) => acc + mark, 0);
   };

   this.getInfo = function () {
      return `${this.name} - ${this.faculty} - ${this.getTotal()}`;
   };
}

const student = new Student("John Doe", "Software Engineer", [92, 99, 100, 74, 85]);

console.log(student.getAvgMark());
console.log(student.getMedianMark());
console.log(student.getMaxMark());
console.log(student.getMinMark());
console.log(student.getTotal());
console.log(student.getInfo());