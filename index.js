// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to you project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: [
      'No License',
      'MIT',
      'GNU_GPLv3',
      'Apache_2.0',
      'BSD_3_Clause',
      'Affero_GPL',
      'Microsoft_Public_License',
      'Unlicense',
    ],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  if (!fs.existsSync('readmefiles')) {
    fs.mkdirSync('readmefiles');
  }

  const filePath = path.join('readmefiles', fileName);

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error(`Error writing ${filePath}:`, err);
    } else {
      console.log(`${filePath} has been generated successfully`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readMeContent = generateMarkdown(answers);
      writeToFile('README.md', readMeContent);
    })
    .catch((err) => {
      console.error('Error with inquirer:', err);
    });
}

// Function call to initialize app
init();
