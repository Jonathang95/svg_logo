const inquirer = require("inquirer");
const fs = require("fs");
const Shapes = require("./lib/shapes");
const questions = require("./questions");
function init() {
    inquirer.prompt(questions).then((answers) => {
        switch (answers.shape) {
            case "Square":
                const square = new Shapes.Square(answers.text, answers.textcolor, answers.shapecolor);
                fs.writeFile("./examples/logo.svg", square.render(), (err) => {
                if (err) { console.log(err); }
                console.log("logo.svg generated successfully")
                });
                break;
            case "Triangle":
                const Triangle = new Shapes.Trianlge(answers.text, answers.textcolor, answers.shapecolor);
                fs.writeFile("./examples/logo.svg", Triangle.render(), (err) => {
                    if (err) { console.log(err); }
                    console.log("logo.svg generated successfully")
                    });
                break;
            case "Circle":
                const circle = new Shapes.Circle(answers.text, answers.textcolor, answers.shapecolor);
                fs.writeFile("./examples/logo.svg", circle.render(), (err) => {
                    if (err) { console.log(err); }
                    console.log("logo.svg generated successfully")
                    });
                break;
        }
    })
}
    init();