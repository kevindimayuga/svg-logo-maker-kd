// import filesystem
const fs = require('fs');

// import inquirer
const inquirer = require('inquirer');

// import shapes
const {circle, square, triangle} = require('./lib/shapes');

const questions = [
    
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
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
