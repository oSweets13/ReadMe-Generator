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
  * [Questions](#Questions)
  * [License](#License)

  ## Description
  ${data.projectDes}


  ## Questions
  If you have any questions about this project, please contact me directly at ${data.usersEmail}. You can view more of my projects at https://github.com/${data.usersGitHub}.
`;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {

    return `
  ### License
  ${license}
  ${renderLicenseBadge(license)}
  `
}
}

module.exports = generateMarkdown;