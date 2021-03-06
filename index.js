const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utilities/generateMarkdown");
const axios = require("axios");


const questions = [
   {
      type: "input",
      name: "username",
      message: "What is your GitHub username? ",
      default: "23gzepke",
   },
   {
      type: "input",
      name: "repo",
      message: "Provide the link to your repo: ",
      default: "https://github.com/23gzepke/Readme-Generator",
   },
   {
      type: "input",
      name: "title",
      message: "What is the title of your project/repo? ",
      default: "README.md Generator",
   },
   {
      type: "input",
      name: "description",
      message: "Describe your project: ",
      default: "The user of this program will be provided with a series of prompts using inquirer in order to generate a dynamically-created README.md file. These command-line prompts will obtain the necessary information for a professional README.md file and subsequently create this file for the user's project, program, or application.",
   },
   {
      type: "input",
      name: "installation",
      message: "Provide installation instructions: ",
      default: "Run npm install from the command line.",
   },
   {
      type: "input",
      name: "usage",
      message: "Describe how to use your project: ",
      default: "Run node index.js from the command line.",
   },
   {
      type: "input",
      name: "license",
      message: "Provide license/badge link info: ",
      default: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
   },
   {
      type: "input",
      name: "contributors",
      message: "Who are the contributors? ",
      default: "Grant Zepke",
   },
   {
      type: "input",
      name: "tests",
      message: "Describe the tests: ",
      default: "These tests were performed using node.js, this README.md was created utilizing these tools."
   },
   {
      type: "input",
      name: "development",
      message: "Describe future development of this application/repo: ",
      default: "In the future, add a function to generate unique badges based on user input."
   },
   {
      type: "input",
      name: "badge",
      message: "Add a badge to your README (copy the link here): ",
      default: "[![OpenFaaS](https://img.shields.io/badge/openfaas-cloud-blue.svg)](https://www.openfaas.com)"
   },
];

function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, err => {
      if (err) { throw err; };
      console.log("README.md created successfully!");
   });
};

function init() {
   inquirer.prompt(questions).then(data => {
      axios
         .get("https://api.github.com/users/" + data.username)
         .then(res => {
            const github= {
               email: res.data.email,
               name: res.data.name,
               profile: res.data.html_url,
            };
            writeToFile("README.md", markdown(data, github));
         });
   });
};

init();
