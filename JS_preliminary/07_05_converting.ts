//use in playground: http://www.typescriptlang.org/Playground
var animal = function(){}; //constructor
animal.drink = function(){
	return "schoop";
};

var rabbit = Object.create(animal);
rabbit.runFast = function(){
	return "zoom zoom";
}

var snowBall = Object.create(rabbit);

var myDiv = document.createElement('div');
myDiv.textContent = snowBall.drink();
document.body.appendChild(myDiv);

var myDiv2 = document.createElement('div');
myDiv2.textContent = snowBall.runFast();
document.body.appendChild(myDiv2);