// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const genMark = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  'What is your project name?',
  'Can you make a brief discription?',
  'How can your user install the application?',
  'How to use your application?',
  'What is your contribution guidline?', // contribution guidlines
  'How to test your application?',
  'Which license are you using?',
  'Your Github username?',
  'Your email address?',
];

const licenseList = [
  'Apache 2.0',
  'Boost Software 1.0',
  'BSD 3-Clause',
  'BSD 2-Clause'
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let content = genMark(data)
  fs.writeFile(fileName, content, function(){})
}

// TODO: Create a function to initialize app
async function init() {
  console.log('Welcome to README generator! \nPlease answer following questions properly.')
  let confirm = await inquirer.prompt([
    {
      name: 'continue', 
      type: 'list', 
      choices: ['yes', 'no'], 
      message: 'Continue?'}
  ])

  if (confirm.continue === 'yes') {
    let answer = await inquirer.prompt([
      {name: 'projectName', message: questions[0]},
      {name: 'discription', message: questions[1]},
      {name: 'install', message: questions[2]},
      {name: 'usage', message: questions[3]},
      {name: 'contribution', message: questions[4]},
      {name: 'test', message: questions[5]},
      {
        name: 'license', 
        type: 'list', 
        choices: licenseList, 
        message: questions[6]
      },
      {name: 'github', message: questions[7]},
      {name: 'email', message: questions[8]}
    ])
    writeToFile('README.md', answer)
  }
  console.log('Thank you for using our production.')
}

// Function call to initialize app
init();
   