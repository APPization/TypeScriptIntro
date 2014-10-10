var animal = function(){}; //constructor
animal.drink= function(){
	console.log("schoop");
};

var rabbit = Object.create(animal);
rabbit.runFast = function(){
	console.log("zoom");
}

var snowBall = Object.create(rabbit);
snowBall.drink();
snowBall.runFast();
