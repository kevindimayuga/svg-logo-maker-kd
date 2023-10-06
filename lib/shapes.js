// This file contains the Shape class, which is the parent class for Circle, Square, and Triangle
class Shape {
    constructor(color) {
        this.color = color;
    }
};

// This is the Circle class, which (extends from) and is a child class of Shape
// Updated this.color to super(color) to inherit properties from the parent class
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    // render() method returns the SVG code for a circle
    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
    }
};

// This is the Square class, which (extends from) and is a child class of Shape
// Updated this.color to super(color) to inherit properties from the parent class
class Square extends Shape {
    constructor(color) {
        super(color);
    }
    // render() method returns the SVG code for a square
    render() {
        return `<rect x="25" y="25" width="60" height="60" fill="${this.color}" />`;
    }
};

// This is the Triangle class, which (extends from) and is a child class of Shape
// Updated this.color to super(color) to inherit properties from the parent class
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    // render() method returns the SVG code for a triangle
    render() {
        return `<polygon points="20,50 80,50 50,90" fill="${this.color}" />`;
    }
};

module.exports = { Circle, Square, Triangle };