// Import Express
const express = require("express");
const app = express();
const port = 3000;

// Dummy student data
const students = [
  { id: 1, name: "Avinash", age: 20, course: "Computer Science" },
  { id: 2, name: "Vinod", age: 21, course: "Data Science" },
  { id: 3, name: "Riya", age: 22, course: "AI & ML" }
];

// Define API route
app.get("/students", (req, res) => {
  res.json(students);
});

// Start server
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}/students`);
});
