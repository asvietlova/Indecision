class OldSyntax {
    constructor() {
        this.name = 'Mike'
    }

    getGreeting() {
        return `Hi, my name is ${this.name}.`
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax); // oldSyntax {name: 'Mike'}
console.log(oldSyntax.getGreeting()); // 'Hi, my name is Mike'
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());  // error!
// To solve this error we should bind context.
// in constractor we should add: 
//  this.getGreeting = this.getGreeting.bind(this);

//--------------------------------------------------

class NewSyntax {
    name = 'Anna'
    getGreeting = () => {
        return `Hi, my name is ${this.name}.`  
    }
}

const newSyntax = new NewSyntax();
console.log(newSyntax);  //   newdSyntax {name: 'Anna'}
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());  //  "Hi, my name is Anna."