// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license === 'None') {
        return '';
    }
    return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}

// Function to return the license link
function renderLicenseLink(license) {
    if (license === 'None') {
        return '';
    }
    return `\n* [License](#license)\n`;
}

// Function to return the license section of README
function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    }
    return `## License

This project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
For any questions, please contact me with the information below:

GitHub: [${data.github}](https://github.com/${data.github})  
Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;