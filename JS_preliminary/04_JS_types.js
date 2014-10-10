var animal = function(){
	this.drink= function(){
	console.log("schoop");
	}
};

var rabbit = new animal();

animal.prototype.eat = function(){
	console.log("nom nom");
}
rabbit.drink();
rabbit.eat();
