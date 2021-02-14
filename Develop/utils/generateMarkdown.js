const licenceLink = [
  {license: 'Apache 2.0', link: 'https://opensource.org/licenses/Apache-2.0'},
  {license: 'Boost Software 1.0', link: 'https://www.boost.org/LICENSE_1_0.txt'},
  {license: 'BSD 3-Clause', link: 'https://opensource.org/licenses/BSD-3-Clause'},
  {license: 'BSD 2-Clause', link: 'https://opensource.org/licenses/BSD-2-Clause'}
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let formed = license.split(' ').join('%20')
  return license ? `https://img.shields.io/badge/Licnese-${formed}-red` : ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  for (let item of licenceLink) {
    if (item.license === license) {return item.link}
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license)
  let link = renderLicenseLink(license)
  return `[![Licnese](${badge})](${link})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let section = renderLicenseSection(data.license)
  return `
# ${data.projectName}

${section}

## Discription

${data.discription}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Contact](#contact)

## Installation

\`\`\`
${data.install}
\`\`\`

## Usage

\`\`\`
${data.usage}
\`\`\`

## Contribution

${data.contribution}

## Tests

${data.test}

## Contact

[GitHub Page](https://github.com/${data.github}) 

Please send me [Email](mailto:${data.email}?subject=[GitHub]%20Source%20Han%20Sans) if you have any questions.
`
}

module.exports = generateMarkdown;
