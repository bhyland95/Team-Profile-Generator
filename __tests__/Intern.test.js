const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('test', 1, 'test@gmail.com', 'School');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('test', 1, 'test@gmail.com', 'School');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('test', 1, 'test@gmail.com', 'School');

    expect(intern.getRole()).toEqual("Intern");
}); 