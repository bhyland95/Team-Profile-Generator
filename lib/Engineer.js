const Employee = require('./Employee');

//CONSTRUCTOR FOR ENGINEER

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        this.github = github
    }

    getrole(){return "Engineer"}
}


module.exports = Engineer