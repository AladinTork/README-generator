// TODO: Include packages needed for this application
const { default: Choices } = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title?",
  "What is the description?",
  "What is the installation instructions?",
  "What are the usage informations?",
  "What are the contribution guidelines?",
  "What are the test instructions?",
  "What is the liscence?",
  "What is your GitHub username?",
  "What is your email address?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
      },
      {
        type: "input",
        name: "installation",
        message: questions[2],
      },
      {
        type: "input",
        name: "usage",
        message: questions[3],
      },
      {
        type: "input",
        name: "contribution",
        message: questions[4],
      },
      {
        type: "input",
        name: "test",
        message: questions[5],
      },
      {
        type: "list",
        name: "license",
        message: questions[6],
        choices: ["Apache 2.0", "MIT", "BSD2", "BSD3", "None"],
      },
      {
        type: "input",
        name: "username",
        message: questions[7],
      },
      {
        type: "input",
        name: "email",
        message: questions[8],
      },
    ])
    .then(function (response) {
      writeToFile("README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();
