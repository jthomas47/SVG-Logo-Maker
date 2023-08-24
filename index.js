const inquirer = require('inquirer');
const fs = require('fs');

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
