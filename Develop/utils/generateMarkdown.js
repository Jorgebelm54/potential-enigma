// TODO: Create a function that returns a license badge based on which license is passed in

const { getBadge } = require("./api");

// If there is no license, return an empty string
async function renderLicenseBadge(data) {
  const response = await getBadge(data.repo, data.title)
  return response;

  
}
//call get badge function ,pass in user name and repo name,interperate the response 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
async function generateMarkdown(data) {
await renderLicenseBadge(data)
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
