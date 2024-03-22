const Shapes = require("./shapes");
    describe("square", () => {
        describe("text", () => {
            it("Sets squares text", () => {
                const square = new Shapes.Square("abc");
                expect(square.text).toEqual("abc");
            });
        });
        describe("textcolor", () => {
            it("Sets squares textcolor", () => {
                const square = new Shapes.Square("abc", "red");
                expect(square.textcolor).toEqual("red");
            });
        }); 
        describe("shapecolor", () => {
            it("Sets squares shapecolor", () => {
                const square = new Shapes.Square("abc", "red", "blue");
                expect(square.shapecolor).toEqual("blue");
            });
        });
    });

    describe("triangle", () => {
        describe("text", () => {
            it("Sets triangles text", () => {
                const triangle = new Shapes.Triangle("abc");
                expect(triangle.text).toEqual("abc");
            });
        });
        describe("textcolor", () => {
            it("Sets triangles textcolor", () => {
                const triangle = new Shapes.Triangle("abc", "red");
                expect(triangle.textcolor).toEqual("red");
            });
        }); 
        describe("shapecolor", () => {
            it("Sets triangles shapecolor", () => {
                const triangle = new Shapes.Triangle("abc", "red", "blue");
                expect(triangle.shapecolor).toEqual("blue");
            });
        });
        describe("render", () => {
            it("Renders triangles", () => {
                const triangle = new Shapes.Triangle("abc", "red", "blue");
                expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <style>
            /* Inline CSS styles applied to SVG elements */
            polygon {
                stroke: blue;
                fill: blue;
                stroke-width: 5;
            }
            text {
                font-family: serif;
                font-size: 50px;
                fill: red; /* Text color */
                dominant-baseline: middle; /* Vertical alignment */
                text-anchor: middle; /* Horizontal alignment */
            }
        </style>
        <polygon points="20, 10 280, 10 150, 190"/>
        <text x="150" y="60">abc</text>
    </svg>`);
            });
        });  
    });
    

    describe("Circle", () => {
        describe("text", () => {
            it("Sets circles text", () => {
                const circle = new Shapes.Circle("abc");
                expect(circle.text).toEqual("abc");
            });
        });
        describe("textcolor", () => {
            it("Sets circles textcolor", () => {
                const circle = new Shapes.Circle("abc", "red");
                expect(circle.textcolor).toEqual("red");
            });
        });
        describe("shapecolor", () => {
            it("Sets circles shapecolor", () => {
                const circle = new Shapes.Circle("abc", "red", "blue");
                expect(circle.shapecolor).toEqual("blue");
            })
        });
        describe("render", () => {
            it("Renders circles", () => {
                const circle = new Shapes.Circle("abc", "red", "blue");
                expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <style>
            /* Inline CSS styles applied to SVG elements */
            circle {
                stroke: blue;
                fill: blue;
                stroke-width: 5;
            }
            text {
                font-family: serif;
                font-size: 50px;
                fill: red; /* Text color */
                dominant-baseline: middle; /* Vertical alignment */
                text-anchor: middle; /* Horizontal alignment */
            }
        </style>
        <circle cx="150" cy="100" r="97"/>
        <text x="150" y="100">abc</text>
    </svg>`);
            });
        });
    });
