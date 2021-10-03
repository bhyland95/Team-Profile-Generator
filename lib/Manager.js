const Employee = require('./Employee');

//CONSTRUCTOR FOR MANAGER

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getrole(){
        return "Manager"
    }
}

module.exports = Manager