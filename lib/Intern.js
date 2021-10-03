const Employee = require('./Employee');

//CONSTRUCTOR FOR INTERN

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school
    }

    getrole(){return "Intern"}
}

module.exports = Intern