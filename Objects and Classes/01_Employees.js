function solve(names) {
    names.forEach(personName => new Employee(personName).ToString())
}

class Employee{
    constructor(name) {
        this.name = name;
        this.personalNum = Number(name.length);
    }

    ToString(){
        console.log(`Name: ${this.name} -- Personal Number: ${this.personalNum}`);
    }
}

solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    );