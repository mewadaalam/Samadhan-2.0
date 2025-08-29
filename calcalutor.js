// Student object with marks
let student = {
  name: "Alam",
  marks: {
    math: 85,
    science: 90,
    english: 78,
    history: 88,
    computer: 92
  }
};

// Convert marks into array
let marksArray = Object.values(student.marks);

// Calculate total using reduce
let total = marksArray.reduce((sum, mark) => sum + mark, 0);

// Calculate average
let average = total / marksArray.length;

// Output
console.log("Student Name:", student.name);
console.log("Marks:", student.marks);
console.log("Total Marks:", total);
console.log("Average Marks:", average.toFixed(2));