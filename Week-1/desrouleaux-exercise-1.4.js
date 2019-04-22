
/*
============================================
; Title:  desrouleaux-exercise1.4js
; Author: Lance Desrouleaux
; Date:  22 April 2019
; Modified By: Lance Desrouleaux
; Description:
;===========================================
*/

const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "Exercise 1.4"));
console.log('');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/



//start program


//Here made a few constructor functions for various vehicle types.
function Car(model){
  this.model=model

}
Car.prototype.start = function(){
console.log('Car added to the racetrack!');
}
function Truck(model,year){
  this.model=model;
  this.year=year;

}
Truck.prototype.start = function(){
  console.log('Truck added to the racetrack!');

}
function Jeep(model,year,color)
{
  this.model = model;
  this.year =year;
  this.color = color;

}
Jeep.prototype.start = function(){
  console.log( 'Jeep added to the racetrack!');

}

var raceTrack = [];
//Here I write a function to start the vehicle and add it to the raceTrack Array
function driveIt(vehicle){
  vehicle.start();
  raceTrack.push(vehicle)
}

//Created three vehicle classes and passwed them through the driveIt() function
vehicle1 = new Car('BMW')
vehicle2 = new Truck('Ford',2019)
vehicle3 = new Jeep('Jeep',1999,'Blue')

driveIt(vehicle1)
driveIt(vehicle2)
driveIt(vehicle3)

console.log('');
//Here I iterate over the raceTrack array and output the results.
console.log(' -- The following vehicles have been added to the racetrack --')
for( x=0 ; x < raceTrack.length; x++){
  console.log(raceTrack[x].constructor.name + ":"+ raceTrack[x].model)
}
