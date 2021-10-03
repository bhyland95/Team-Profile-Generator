const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

generateHTML = (data) =>{
   return "hello"

    //generateManager

    //generateEngineer

    //generateIntern
   

    const teamCards = []
    teamCards.push(data.filter(employee=>employee.getrole()==="Manager").map(manager=>generateManager(manager)))
    teamCards.push(data.filter(employee=>employee.getrole()==="Intern").map(intern=>generateIntern(intern)))
    teamCards.push(data.filter(employee=>employee.getrole()==="Engineer").map(engineer=>generateEngineer(engineer)))

    return teamCards.join("")
}


// generate html page 
let generatePage = (data) =>{   

return  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                    ${generateHTML(data)}            
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>  
  </html>
`
}

module.exports = generatePage
