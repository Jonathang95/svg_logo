const questions = [
    {
        type: "input",
        name: "text",
        message:"Please enter 3 characters"
    },
    {
        type: "input",
        name: "textcolor",
        message:"please enter a text color(or hexicode)"
    },
    {
        type: "list",
        name: "shape",
        message:"Please select a shape",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "shapecolor",
        message:"please enter a shape color(or hexicode)"
    }
]

module.exports = questions;