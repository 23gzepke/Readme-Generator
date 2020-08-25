// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  # **${data.title}**

  ${data.badge}

  ## Description

  ${data.description}
  ## Table of Contents
  - [Repository](#Repository)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Development](#Development)
  - [Contact Author](#Contact)

  ## Repository

  - [Project Repo](${data.repo})

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributors

  ${data.contributors}

  ## Tests

  ${data.tests}

  ## Development

  ${data.development}

  ## Contact
  
  - <${github.email}>
  - ${github.name}
  - [GitHub Profile](${github.profile})

`;
}

module.exports = generateMarkdown;
