function Greeter(greeting) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function () {
    return "Hello" + this.greeting;
}

//Example of simple errors not catched when working with JS
var greeter = new Greeter({ audience: "Code Campers" });

var greetDiv = document.createElement("div");
greetDiv.innerHTML = greeter.greet();

document.body.appendChild(greetDiv);