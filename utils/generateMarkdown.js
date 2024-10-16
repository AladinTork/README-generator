// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else if (license == "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "BSD2") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license == "BSD3") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  } else {
    return `## License
    
    The license used in this project is ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.liscence)}

  ## Description
  
  ${data.description}

  ## Table of Content

  1. [Installation](##installation) 
  2. [Usage](## Usage) 
  3. [License](## License) 
  4. [Contributing](##contributing)
  5. [Tests](##tests)
  6. [Questions](##questions) 
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.liscence)}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.test}
  
  ## Questions
  
  Github: [https://github.com/${data.username}](https://github.com/${
    data.username
  })
  Email: 
  
`;
}

module.exports = generateMarkdown;
