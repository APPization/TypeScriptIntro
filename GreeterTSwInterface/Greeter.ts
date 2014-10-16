module School {
// [[1]] try as is without implements;
//       duck typing
// [[2]] addd
// implements Person
    export class Student{
        constructor(public firstname: string, public lastname: string) {
        }

//comment out fullname() and see the mismatch error due to duck typing
//You don't have to explicitly implement an interface
        fullname() {
            return this.firstname + " " + this.lastname;
        }
    }

    export interface Person {
        firstname: string;
        lastname: string;
        fullname();
    }
}

function greet(person: School.Person) {
    return "Hello, " + person.fullname();
}

var user = new School.Student("Jane", "Smith");

document.body.innerHTML = greet(user);