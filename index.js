const inquirer = require('inquirer');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

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
            choices: ['add an engineer', 'add an intern', 'Team is complete'],
        },

    ]).then(managerAnswers => {
        if (managerAnswers.teamMember === 'add an engineer') {
            engineerEmployee();
        } else if (managerAnswers.teamMember === 'add an intern') {
            internEmployee();
        } else {
            return;
        }
    }
    )

};

function engineerEmployee() {
    inquirer.prompt([
        {
            //Engineer's Name
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers name!');
                    return false;
                }
            }
        },
        {
            //Engineer's ID
            type: 'input',
            name: 'engineerID',
            message: 'What is the engineers ID? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers ID!');
                    return false;
                }
            }
        },
        {
            //Engineer's Email
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers email? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers email!');
                    return false;
                }
            }
        },
        {
            //Engineer's Username
            type: 'input',
            name: 'engineerUser',
            message: 'What is the engineers github username? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers github username!');
                    return false;
                }
            }
        },
        {
            //Add Team Member??
            type: 'list',
            name: 'teamMember',
            message: 'Would you like to add a team member? Or is the team finished?',
            choices: ['add an engineer', 'add an intern', 'Team is complete'],
        },
    ]).then(engineerAnswers => {
        if (engineerAnswers.teamMember === 'add an engineer') {
            engineerEmployee();
        } else if (engineerAnswers.teamMember === 'add an intern') {
            internEmployee();
        } else {
            return;
        }
    }
    )
};

function internEmployee() {
    inquirer.prompt([
        {
            //Intern's Name
            type: 'input',
            name: 'InternName',
            message: 'What is the Interns name? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns name!');
                    return false;
                }
            }
        },
        {
            //Intern's ID
            type: 'input',
            name: 'InternID',
            message: 'What is the Interns ID? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns ID!');
                    return false;
                }
            }
        },
        {
            //Intern's Email
            type: 'input',
            name: 'InternEmail',
            message: 'What is the Interns email? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns email!');
                    return false;
                }
            }
        },
        {
            //Intern's School
            type: 'input',
            name: 'internSchool',
            message: 'What is the interns school name? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the interns school name!');
                    return false;
                }
            }
        },
        {
            //Add Team Member??
            type: 'list',
            name: 'teamMember',
            message: 'Would you like to add a team member? Or is the team finished?',
            choices: ['add an engineer', 'add an intern', 'Team is complete'],
        },
    ]).then(internAnswers => {
        if (internAnswers.teamMember === 'add an engineer') {
            engineerEmployee();
        } else if (internAnswers.teamMember === 'add an intern') {
            internEmployee();
        } else {
            return;
        }
    }
    )
};

buildTeam();