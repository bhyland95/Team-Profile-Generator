const Employee = require('./Employee');

//CONSTRUCTOR FOR INTERN

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school
    }

    // returns school from input 
    getSchool () {
        return this.school;
    }

    // returns role from input
    getRole () {
        return "Intern";
    }
}

module.exports = Intern