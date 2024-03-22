class Shapes {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" color= ${this.shapecolor}>`
    }    
}
class Circle extends Shapes {
    constructor(text, textcolor, shapecolor,) 
    {
        super(text, textcolor, shapecolor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <style>
            /* Inline CSS styles applied to SVG elements */
            circle {
                stroke: ${this.shapecolor};
                fill: ${this.shapecolor};
                stroke-width: 5;
            }
            text {
                font-family: serif;
                font-size: 50px;
                fill: ${this.textcolor}; /* Text color */
                dominant-baseline: middle; /* Vertical alignment */
                text-anchor: middle; /* Horizontal alignment */
            }
        </style>
        <circle cx="150" cy="100" r="97"/>
        <text x="150" y="100">${this.text}</text>
    </svg>`
    }
} 
class Triangle extends Shapes {
    constructor(text, textcolor, shapecolor,) 
    {
        super(text, textcolor, shapecolor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <style>
            /* Inline CSS styles applied to SVG elements */
            polygon {
                stroke: ${this.shapecolor};
                fill: ${this.shapecolor};
                stroke-width: 5;
            }
            text {
                font-family: serif;
                font-size: 50px;
                fill: ${this.textcolor}; /* Text color */
                dominant-baseline: middle; /* Vertical alignment */
                text-anchor: middle; /* Horizontal alignment */
            }
        </style>
        <polygon points="20, 10 280, 10 150, 190"/>
        <text x="150" y="60">${this.text}</text>
    </svg>`
    }
} 
class Square extends Shapes {
    constructor(text, textcolor, shapecolor,) 
    {
        super(text, textcolor, shapecolor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <style>
            /* Inline CSS styles applied to SVG elements */
            rect {
                stroke: ${this.shapecolor};
                fill: ${this.shapecolor};
                stroke-width: 5;
            }
            text {
                font-family: serif;
                font-size: 50px;
                fill: ${this.textcolor}; /* Text color */
                dominant-baseline: middle; /* Vertical alignment */
                text-anchor: middle; /* Horizontal alignment */
            }
        </style>
        <rect x="0" y="0" width="300" height="200"/>
        <text x="150" y="100">${this.text}</text>
    </svg>`
    }
} 
module.exports = {Shapes, Circle, Square, Triangle};