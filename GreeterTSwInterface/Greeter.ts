// [[1]] try as is without implements;
//       duck typing
// [[2]] add 
// implements Person
class Student {
    constructor(public firstname: string, public lastname: string) {
    }

// [[3]] comment out fullname() and see the mismatch error due to duck typing
//You don't have to explicitly implement an interface
    fullname() {
        return this.firstname + " " + this.lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
    fullname(title?: string);
}


function greet(person: Person, title?: string) { //Optional params can only be followed by optional, Person can not be 2nd here.
    return "Hello, " + (title ? title : "") + person.fullname();
}

var user = new Student("Jane", "Smith");

// [[4]] The DOM elements has intellisense
// demo fixing the error:
//document.getElementById("content").innerHTML = greet(user);
document.body.innerHTML = greet(user, "Ms ");
