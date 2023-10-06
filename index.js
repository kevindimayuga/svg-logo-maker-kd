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
        message: 'Enter a color for the text that is displayed on the logo (color name or hex value):',
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
function writeToFile(folderName, fileName, data) {
    // Set the file name
    const userFileName = `${fileName}-logo.svg`;
    // set the path for the created file
    const filePath = `${folderName}/${userFileName}`;
    fs.writeFile(filePath, data, (error) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Success! Your logo has been created.');
        }
    });
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

        let shapeInstance;

        // Create an instance of the selected shape class
        switch (logoShape) {
            case 'circle':
                shapeInstance = new Circle(logoColor);
                break;
            case 'square':
                shapeInstance = new Square(logoColor);
                break;
            case 'triangle':
                shapeInstance = new Triangle(logoColor);
                break;
            default:
                console.log('Please choose another shape.');
                return;
        }

        // Generate the SVG logo using the shape instance
        const svgLogo = `<?xml version="1.0" encoding="UTF-8"?>
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        ${shapeInstance.render()}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="40" fill="${logoTextColor}">${logoText}</text>
      </svg>`;

        // Call the writeToFile function to create the file
        writeToFile('output', logoText, svgLogo);
    });
}

// call to initialize the application
init();

// export the writeToFile function
module.exports = writeToFile;