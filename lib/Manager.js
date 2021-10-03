const Employee = require('./Employee');

//CONSTRUCTOR FOR MANAGER

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    // returns role from input
    getRole() {
        return "Manager";
    }

}

module.exports = Manager