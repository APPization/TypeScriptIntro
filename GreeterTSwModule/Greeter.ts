/// <reference path="school.ts" />

var user = new School.Student("Jane", "Smith");

document.getElementById("content").innerHTML = School.greet(user);

