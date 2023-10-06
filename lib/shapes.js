// This file contains the Shape class, which is the parent class for Circle, Square, and Triangle
class Shape {
    constructor(color) {
        this.color = color;
    }
};

class Circle extends Shape {
    constructor(color) {
        this.color = color;
    }
}