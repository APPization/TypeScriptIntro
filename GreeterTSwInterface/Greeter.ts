class Student {
    constructor(public firstname: string, public lastname: string) {
    }
    fullname(){
        return this.firstname + " " + this.lastname;    
    }
}

interface Person {
    firstname: string;
    lastname: string;
    fullname();
}

function greet(person: Person) {
    return "Hello, " + person.fullname();
}

var user = new Student("Jane", "Smith");

document.body.innerHTML = greet(user);