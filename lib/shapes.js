// This file contains the Shape class, which is the parent class for Circle, Square, and Triangle
class Shape {
    constructor(color) {
        this.color = color;
    }
};

// This is the Circle class, which (extends from) and is a child class of Shape
class Circle extends Shape {
    constructor(color) {
        this.color = color;
    }
};


class Square extends Shape {
    constructor(color) {
        this.color = color;
    }
};


class Triangle extends Shape {
    constructor(color) {
        this.color = color;
    }
};

module.exports = { Circle, Square, Triangle };