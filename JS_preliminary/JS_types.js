//// Example 1
//// Types flexible in java
//var onTheFlyPerson = "Ozgur Ozturk";
////can assign different type later
//onTheFlyPerson =	{ name: "Ozgur", lastname: "Ozturk"};
//console.log(onTheFlyPerson.name);

//// Example 2
//// Classes in JS
//function Person(fname, lname) {
//    this.fname = fname;
//    this.lname = lname;
//    this.getFullName = function () {
//        return this.fname + " " + this.lname;
//    }
//}

//var prsn1 = new Person("John", "Smith");

//console.log(prsn1.getFullName())

//// Example 3
//// Better way to classes put functions to prototype
//function Person(fname, lname) {
//    this.fname = fname;
//    this.lname = lname;
//}

//Person.prototype.getFullName = function () {
//    return this.fname + " " + this.lname;
//}

//var prsn1 = new Person("John", "Smith");

//console.log(prsn1.getFullName());

//// Example 4
//// Class Hierarchy, using Object.create
//var animal = { eats: true };

//rabbit = Object.create(animal);
//console.log(rabbit.eats);


//// Example 5
// Changing class after instantiating 
var animal = function () {
    this.drink = function () {
        console.log("schoop");
    }
};

var rabbit = new animal();

animal.prototype.eat = function () {
    console.log("nom nom");
}
rabbit.drink();
rabbit.eat();
