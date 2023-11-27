// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
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
        message: "Please provide a walkthrough of required tests if acclicable"
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
    const readmeContent = generateMarkdown(answers)
    fs.writeFile("readme.md", readmeContent, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully created README");
      }
    });
   })
  // .catch((error) => {
  //   if (error.isTtyError) {
  //       //error prompt
  //   } else {
  //       //something else went wrong
  //   }
  //  });

// TODO: Create a function to write README file
// function writeToFile(fileName, readmeContent) {
//   fs.writeFile(fileName, readmeContent, function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully created README");
//     }
//   });

// }

// // TODO: Create a function to initialize app
// function init() {
//     //ask questions here
//     let responses = {
//         title: "Turtle"
//     }
//     console.log(generateMarkdown(responses));
// }

// // Function call to initialize app
// init();
