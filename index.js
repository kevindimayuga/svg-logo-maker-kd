// import filesystem
const fs = require('fs');

// import inquirer
const inquirer = require('inquirer');

// import shapes
const {circle, square, triangle} = require('./lib/shapes');

// create a class svg that contains a constructor with methods to render and set the text and shape elements in the svg string
class svg {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.setShapeElement = shape.render()
    }
}

// list of questions for user to answer using the inquirer library
const questions = [
    
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo:',
    },
    
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color you would like the text of the logo to be:',
    },
    
    {
        type: 'list',
        name: 'shape',
        message: 'Pick a shape from the drop-down list for your logo:',
        choices: [
            'Circle',
            'Triangle',
            'Square',
        ]
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color you would like the shape of the logo to be:',
    },

];

// function to write the data to file
function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}