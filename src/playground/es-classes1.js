class Person {
    constructor(name = 'Anonymus', age = '26') {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi! I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    } 
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor) {
            description += ` His major is ${this.hasMajor}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
} 

const me = new Student('Andrew Mead', 33, 'Computer Science');
console.log(me.getDescription());

const other = new Student('Thomas', 26);
console.log(other.getDescription());