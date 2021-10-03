const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const generatePage = require('./src/generateHTML');


const employeeList = []

const addManager = () => {
    return inquirer.prompt([
        {
            //Team Manager's Name
            type: 'input',
            name: 'name',
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
            name: 'id',
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
            name: 'email',
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
            name: 'officeNumber',
            message: 'What is the team managers office number? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter the team managers office number!');
                    return false;
                }
            }
        },
    ]).then(managerAnswers => {
        //fills in manager variable 
        const { name, id, email, officeNumber } = managerAnswers;
        const manager = new Manager(name, id, email, officeNumber);

        employeeList.push(manager)
        addEmployee()
    })
};

const addEmployee = () => {
    console.log(`
    =====================
    Add new team member
    =====================`)
    inquirer.prompt([
        {
            //Employee's Role
            type: 'list',
            name: 'role',
            message: 'What is the employees role? (Required)',
            choices: ['Engineer', 'Intern'],
        },
        {
            //Employee's Name
            type: 'input',
            name: 'name',
            message: 'What is the employees name? (Required)',
            validate: nameInput => {
                if (nameInput) {
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
            name: 'id',
            message: 'What is the employees ID? (Required)',
            validate: idInput => {
                if (idInput) {
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
            name: 'email',
            message: 'What is the employees email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the employees email!');
                    return false;
                }
            }
        },
        {
            //Engineer's GitHub
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: ({ role }) => role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's github username!")
                }
            }
        },
        {
            //Intern's School
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: ({ role }) => role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'addNewEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
        .then(employeeData => {
            //fills in employee variable 
            let { name, id, email, role, github, school, addNewEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
            }

            employeeList.push(employee);

            if (addNewEmployee) {
                return addEmployee();
            } else {
                console.log(employeeList)
                writeFile(employeeList)
                
            }
        })
}

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', generatePage(data), err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the profile has been created 
        } else {
            console.log("File created")
        }
    })
};

addManager()



