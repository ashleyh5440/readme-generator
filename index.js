// packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// questions for user
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the description of your project?"
      },
      {
        type: 'input',
        name: 'usage',
        message: "What problem does your project solve?"
      },
      {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions for your project?"
      },
      {
        type: 'input',
        name: 'contributors',
        message: "Who are the contributors of your project (GitHub usernames)?"
      },
      {
        type: 'list',
        name: 'license',
        message: "What license did you use?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
        type: 'input',
        name: 'test',
        message: "Please provide a walkthrough of required tests if applicable"
      },
      {
        type: 'input',
        name: 'github',
        message: "Please enter your GitHub username."
      },
      {
        type: 'input',
        name: 'email', 
        message: "Please enter your email."
      }
  ])
  .then((answers) => {
    //user feed back
    console.log(answers);
    const readmeContent = generateMarkdown(answers);
    fs.writeFile("dist/readme.md", readmeContent, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully created README");
      }
    });
   })
