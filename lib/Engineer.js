const Employee = require('./Employee');

//CONSTRUCTOR FOR ENGINEER

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        this.github = github
    }
}

module.exports = Engineer