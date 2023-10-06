// import filesystem and inquirer
const fs = require('fs');
const inquirer = require('inquirer');

// defines the questions to be asked using inquirer and stores the answers in a variable
const questions = [
    {
        type: 'input',
        name: 'logo-text',
        message: 'Enter up to 3 characters to be displayed on the logo:',
    },
    {
        type: 'input',
        name: 'logo-text-color',
        message: 'Enter a color for the text (color name or hex value):',
    },
    {
        type: 'list',
        name: 'logo-shape',
        message: 'Please select a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'logo-color',
        message: 'Enter a color for the logo (color name or hex value):',
    },
];

// function to generate the SVG logo
function writeToFile(fileName, data) {
    try {
        fs.writeFile(fileName, data);
        console.log('Success! Your logo has been created.');

    } catch (error) {
        console.log(error);
    }
}

module.exports = writeToFile;