// import filesystem and inquirer
const fs = require('fs');
const inquirer = require('inquirer');

// import the shapes from the shapes.js file
const { Circle, Square, Triangle } = require('./lib/shapes.js');

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
        choices: ['circle', 'square', 'triangle',],
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

// function to initialize the application
function init() {
    // call to inquirer to ask the questions and store the answers
    inquirer.prompt(questions).then((answers) => {
        // store the answers in variables
        const logoText = answers['logo-text'];
        const logoTextColor = answers['logo-text-color'];
        const logoShape = answers['logo-shape'];
        const logoColor = answers['logo-color'];

        // create the SVG logo using the answers
        const svgLogo = `<?xml version="1.0" encoding="UTF-8"?>
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="${logoColor}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="50" fill="${logoTextColor}">${logoText}</text>
        </svg>`;

        writeToFile('logo.svg', svgLogo);
    });
}

// call to initialize the application
init();

// export the writeToFile function
module.exports = writeToFile;