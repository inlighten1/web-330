/*
============================================
; Title:  desrouleaux exercise3.2.js
; Author: Lance Desrouleaux
; Date:  6th May 2019
; Modified By: Lance Desrouleaux
; Description:The Factory pattern
;===========================================
*/

const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "Exercise 3.2"));
console.log('');


/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }
 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }
*/

// start program


//Here I have created a class constructor with 4 properties
function Oracle(properties) {
  this.username = properties.username ;
  this.password = properties.password;
  this.server = properties.server ;
  this.version = properties.version
}

//Here I have created a class constructor with three properties
function Informix(properties) {
  this.username = properties.username ;
  this.password = properties.password ;
  this.server = properties.server ;

}

//Here I created an empty  constructor
function DatabaseFactory() {}


//Here I set the protoypes of the DatabaseFactory
DatabaseFactory.prototype.databaseClass = Oracle;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  } else {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
                                                                };


//Created two functions which call the prototpes function created for DatabaseFactory
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "DuckSauce",
  server: "Home-Living",
  version: "3.0"
});


var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "Anonymous",
  password: "Occupy",
  server:"localhost:8080"
});


//Log oracle
console.log(oracle)

//log informix

console.log(informix)
// end program

