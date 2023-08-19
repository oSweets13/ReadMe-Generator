// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown");
const { error } = require('console');

// TODO: Create an array of questions for user input
const questions = [
   //name
   {
    type: 'input',
    name: 'usersName',
    message: 'Please enter your full name',

    validate: usersNameInput => {
        if(usersNameInput) {
            return true;
        }   else {
            console.log('Please enter your name!');
            return false;
        }
    }
   },
   //email
   {
    type: 'input',
    name: 'usersEmail',
    message: 'Please enter your email address',

    validate: usersEmailInput => {
        if(usersEmailInput) {
            return true;
        }   else {
            console.log('Please enter your email!');
            return false;
        }
    }
   },
   //github
   {
    type: 'input',
    name: 'usersGitHub',
    message: 'Please enter your GitHub User',

    validate: usersGitHubInput => {
        if(usersGitHubInput) {
            return true;
        }   else {
            console.log('Please enter your GitHub User!');
            return false;
        }
    }
   },
   //projectTitle
   {
    type: 'input',
    name: 'projectTitle',
    message: 'Please enter the title for your project',

    validate: projectTitleInput => {
        if(projectTitleInput) {
            return true;
        }   else {
            console.log('Please enter the title for your project!');
            return false;
        }
    }
   },
   //projectDescription
   {
    type: 'input',
    name: 'projectDes',
    message: 'Please enter a brief description of your project',

    validate: projectDesInput => {
        if(projectDesInput) {
            return true;
        }   else {
            console.log('Please enter a description for the project!');
            return false;
        }
    }
   },
   //projectLicense
   {
    type: 'list',
    name: 'projectLicense',
    message: 'Select the license being used for the project',
    choices: ['Apache License 2.0','MIT License','Boost Software License 1.0','Mozilla Public License 2.0','Other','N/A'],
    default: 'N/A'
   },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (err) {
        if(err) {
            return console.log(error)
        };
        console.log('ReadMe Successfully Generated!')
    })
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions).then(function(data){
    const fileName = 'README.md';
    writeToFile(fileName, data)
   });
}

// Function call to initialize app
init();