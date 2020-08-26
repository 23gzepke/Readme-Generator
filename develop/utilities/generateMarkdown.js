// function to generate markdown for README
function generateMarkdown(data) {
  // const credits = [];
  let creditsTemplate = "";


  for(let credit of data.credits){
    creditsTemplate += `* ${credit}\n `
  };
  const creditArray = data.credits[0].split(" ").filter(el => el.trim().length > 0);
  const githubAccount = creditArray.pop();

  const date = new Date();
  const licenses = {
    MIT: `MIT License
    Copyright (c) [${date.getFullYear()}] [${creditArray.join(" ")}]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`
  ,
    GNUGPLv3: `GNU GPLv3 License  
    https://www.gnu.org/licenses/gpl-3.0.en.html`
  ,
    mozilla: `Mozilla Public License Version 2.0  
    https://www.mozilla.org/en-US/MPL/2.0/`
  }
  
  return `# ${data.title}
  ![Github Language Count](https://img.shields.io/github/languages/count/${githubAccount}/${data.repo})
  ![Github Top Language](https://img.shields.io/github/languages/top/${githubAccount}/${data.repo})
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits  
  Name and GitHub Username
  ${creditsTemplate}
  ## License 
  ${licenses[data.license]}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Contact me with any questions you have regarding my project.   
  Email: ${data.email}  
  Github: https://github.com/${githubAccount}  
`;
}

module.exports = generateMarkdown;
