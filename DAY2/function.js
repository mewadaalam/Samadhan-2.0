// Function to find highest marks
function findHighest(marks) {
    let highest = marks[0]; // assume first is highest

    // using for loop
    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    return highest;
}

// Example usage
let marks = [48, 67, 89, 55, 92, 76];
console.log("Highest Marks = " + findHighest(marks));