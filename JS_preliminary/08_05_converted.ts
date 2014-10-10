//use in playground: http://www.typescriptlang.org/Playground
class Animal{ 
    drink(){
        return "schoop";    
    }
}

class Rabbit extends Animal{
    runFast(){
	   return "zoom zoom";
    }    
} 

var snowBall: Rabbit = new Rabbit();

var myDiv = document.createElement('div');
myDiv.textContent = snowBall.drink();
document.body.appendChild(myDiv);

var myDiv2 = document.createElement('div');
myDiv2.textContent = snowBall.runFast();
document.body.appendChild(myDiv2);