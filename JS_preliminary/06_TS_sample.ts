//use in playground: http://www.typescriptlang.org/Playground
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("world");

var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

var onTheFlyPerson = { name: "Ozgur", lastname: "Ozturk"}

var myDiv = document.createElement('div');
//type this part, 
var greeter2 = new Greeter("How are you, " + onTheFlyPerson.name)
myDiv.textContent = greeter2.greet();
document.body.appendChild(myDiv);

document.body.appendChild(button);
