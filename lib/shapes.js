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
};

// This is the Square class, which (extends from) and is a child class of Shape
// Updated this.color to super(color) to inherit properties from the parent class
class Square extends Shape {
    constructor(color) {
        super(color);
    }
};

// This is the Triangle class, which (extends from) and is a child class of Shape
// Updated this.color to super(color) to inherit properties from the parent class
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
};

module.exports = { Circle, Square, Triangle };