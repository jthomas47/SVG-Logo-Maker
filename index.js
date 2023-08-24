const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shape');

//promt user for logo criteria
function promptUser () {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter the text for your logo (must be three charecters or less)',
                validate: async (input) => {
                    if (input === '') {
                        return 'must include text'
                    } else if (input.length > 3) {
                        return 'text cannot be more than 3 characters'
                    }
                    return true;
                },

            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter the color you would like the text to be',
            },
            {
                type: 'list',
                name: 'selectShape',
                message: 'Please select a shape',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter the color you would like the shape to be',
            },

        ]);
}


//generate svg based on responses
function generateSvg({ text, textColor, shapeColor, selectShape }) {
    const circle = new Circle(text, textColor, shapeColor).render(); 
    const triangle = new Triangle(text, textColor, shapeColor).render(); 
    const square = new Square(text, textColor, shapeColor).render(); 
    switch (selectShape) {
        case 'Circle': 
            return circle;
        case 'Triangle':
            return triangle;
        case 'Square':
            return square;
    }
}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
    );
    
 }


function init() {
    promptUser()
        .then((answers) => {
        const logoContent = generateSvg(answers); 
       writeToFile('logo.svg', logoContent);
    });
}


init(); 