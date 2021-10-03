const Employee = require('./Employee');

//CONSTRUCTOR FOR ENGINEER

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        this.github = github
    }


    // returns role from input
    getGithub() {
        return this.github
    }

    // returns role from input
    getRole() {
        return "Engineer";
    }

}


module.exports = Engineer