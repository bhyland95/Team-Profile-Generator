const inquirer = require('inquirer');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//Manager variable 
let manager
const employeeList = []

const buildTeam = () => {
    return inquirer.prompt([
        {
            //Team Manager's Name
            type: 'input',
            name: 'managerName',
            message: 'What is the team managers name? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your team managers name!');
                    return false;
                }
            }
        }, {
            //Team Manager's Employee ID
            type: 'input',
            name: 'managerID',
            message: 'Please enter the team managers employee ID. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter the team managers employee ID!');
                    return false;
                }
            }
        }, {
            //Team Manager's Email
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team managers email address? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter the team managers email address!');
                    return false;
                }
            }
        }, {
            //Team Manager's office numeber
            type: 'input',
            name: 'managerOffice',
            message: 'What is the team managers office number? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter the team managers office number!');
                    return false;
                }
            }
        }, {
            //Add Team Member??
            type: 'list',
            name: 'teamMember',
            message: 'Would you like to add a team member? Or is the team finished?',
            choices: ['Yes. Add a team member.', 'No.Team is complete'],
        },

    ]).then(managerAnswers => {
        //fills in manager variable 
        manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.managerOffice)
        employeeList.push(manager)
        //Routes depending on answer to add new team member
        if (managerAnswers.teamMember === 'Yes. Add a team member.') {
            addEmployee();
        } else {
            console.log(employeeList)
            return;
        }
    }
    )

};

function addEmployee() {
    inquirer.prompt([
        {
            //Employee's Role
            type: 'list',
            name: 'employeeRole',
            message: 'What is the employees role? (Required)',
            choices: ['Engineer', 'Intern'],
        },
        {
            //Employee's Name
            type: 'input',
            name: 'employeeName',
            message: 'What is the employees name? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the employees name!');
                    return false;
                }
            }
        },
        {
            //Employee's ID
            type: 'input',
            name: 'employeeID',
            message: 'What is the employees ID? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the employees ID!');
                    return false;
                }
            }
        },
        {
            //Employee's Email
            type: 'input',
            name: 'employeeEmail',
            message: 'What is the employees email? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the employees email!');
                    return false;
                }
            }
        }
    ]).then(function ({ employeeName, employeeRole, employeeID, employeeEmail }) {
        let uniqueInfo = "";
        if (employeeRole === "Engineer") {
            uniqueInfo = "GitHub username";
        } else if (employeeRole === "Intern") {
            uniqueInfo = "school name";
        } else {
            uniqueInfo = "office phone number";
        }
        inquirer.prompt([
            {
                //Employee's Unique Info
                type: 'input',
                name: 'employeeInfo',
                message: `What is the employees ${uniqueInfo}? (Required)`,
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log(`Please enter the employees ${uniqueInfo}`);
                        return false;
                    }
                }
            }, {
                //Add Team Member??
                type: 'list',
                name: 'anotherTeamMember',
                message: 'Would you like to add a team member? Or is the team finished?',
                choices: ['Yes. Add a team member.', 'No.Team is complete'],
            }
        ]).then(function ({employeeInfo,anotherTeamMember}) {
        
            let newEmployee;
            if (employeeRole === "Engineer") {
                newEmployee = new Engineer(employeeName,employeeID,employeeEmail,employeeInfo);
            } else if (employeeRole === "Intern") {
                newEmployee = new Intern(employeeName,employeeID,employeeEmail,employeeInfo);
            }
            employeeList.push(newEmployee)

            if(anotherTeamMember === 'Yes. Add a team member.'){
                addEmployee()
            } else{
                console.log(employeeList)
                return
            }
        })
    })
};



buildTeam();
