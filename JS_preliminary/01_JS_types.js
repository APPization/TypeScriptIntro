function Person(fname, lname){
	this.fname = fname;
	this.lname = lname;
	this.getFullName = function(){
		return this.fname + " " + this.lname;
	}
}

var prsn1 = new Person("John","Smith");

console.log(prsn1.getFullName())