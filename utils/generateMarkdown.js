// function to generate markdown for README

function renderLicenceBadge(license) {
  if(license !== "None") {
    return `[Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenceBadge(data.license)}
`;
}

module.exports = generateMarkdown;
