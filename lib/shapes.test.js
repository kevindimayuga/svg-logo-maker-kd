// This is the test file for the shapes.js file

// import the Shape class from the shapes.js file
const { Circle, Square, Triangle } = require('./shapes');

// This will test the Shape class and the Circle, Square, and Triangle classes that extend from it
describe('Shape', () => {
    describe ('Circle', () => {
        test ('should return the SVG code for a circle', () => {
            const circle = new Circle('red');
            expect(circle.render()).toEqual('<circle cx="50" cy="50" r="40" fill="red" />');
        });
    });
    describe ('Square', () => {
        test ('should return the SVG code for a square', () => {
            const square = new Square('blue');
            expect(square.render()).toEqual('<rect x="25" y="25" width="60" height="60" fill="blue" />');
        });
    });
    describe ('Triangle', () => {
        test ('should return the SVG code for a triangle', () => {
            const triangle = new Triangle('green');
            expect(triangle.render()).toEqual('<polygon points="20,50 80,50 50,90" fill="green" />');
        });
    });
});