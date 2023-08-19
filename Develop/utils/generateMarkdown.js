// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLabel = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(license)})
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkUrl = license.toLowerCase().replace(" ", "-");
  return `https://choosealicense.com/licenses/${linkUrl}/.`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#Description)
  * [License](#License)
  * [Questions](#Questions)

  ## Description
  ${data.projectDes}

  ## License
  This project is licensed under ${data.projectLicense}

  ## Questions
  If you have any questions about this project, please contact me directly at ${data.usersEmail}. You can view more of my projects at https://github.com/${data.usersGitHub}.
`;
}


module.exports = generateMarkdown;