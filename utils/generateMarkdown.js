//returns a license badge; if none, returns empty string
function renderLicenseBadge(license) { 
  if(license !== "None") 
  return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`; //makes a badge and gets rid of spaces
  return "";
}

//returns the license link; if none, returns empty string
function renderLicenseLink(license) {
  if(license !== "None")  
  return `- [License](#license)`;
  return "";
}

//returns the license section of README; if none, returns empty string
function renderLicenseSection(license) {
  if(license !== "None") 
  return `## License \n This project is licensed under the ${license} license.`;
  return "";
}

//generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} 
  ## Description 
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributors}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions, you can email me at ${data.email}.
  You can see more of my work at [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
