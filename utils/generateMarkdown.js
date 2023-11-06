// function to generate markdown for README

const renderLicenceBadge = (data) => {
  if (data.license !== "None") {
    return `![${data.repo}](https://img.shields.io/github/languages/top/${data.github}/${data.repo})
![${data.repo}](https://img.shields.io/github/languages/count/${data.github}/${data.repo})
![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)`
  } else if (data.license == "Apache 2.0") {
    return `![${data.repo}](https://img.shields.io/github/languages/top/${data.github}/${data.repo})
![${data.repo}](https://img.shields.io/github/languages/count/${data.github}/${data.repo})
[GitHub](https://img.shields.io/github/license/${data.github}/${data.repo})`
  }
  return ''
}

const renderLicenseLink = (data) => {
  if (data.license !== "None") {
    return `\n* [License](#license)\n`
  }
  return '';
}


const renderLicenseText = (data) => {
  if (data.license !== "None") {
    return `\n
## License
This project is licensed under the ${data.license} License.
\n`
  }
  return '';
}

const renderGitHubLink = (data) => {
  return `https://github.com/${data.github}/`;
}


function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenceBadge(data)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Tests](#tests)
* [Usage](#usage)
${renderLicenseLink(data)}
* [Contributing](#contributing)

* [Questions](#questions)

## Installation
To install the dependencies, run:

\`\`\`
${data.installations}
\`\`\`

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Usage

${data.usage}

${renderLicenseText(data)}

## Contributing
${data.contributions}

## Questions
Should you have any questions please reach out by email: ${data.email}, or open an issue on the GitHub repo for this ${data.title} project.

You may follow me and find more of my work at [@${data.github}](${renderGitHubLink(data)}).


`

    ;
}

module.exports = generateMarkdown;
