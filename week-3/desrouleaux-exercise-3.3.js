/*
============================================
; Title:  desrouleaux exercise3.3.js
; Author: Lance Desrouleaux
; Date:  6th May 2019
; Modified By: Lance Desrouleaux
; Description: Singleton Test
;===========================================
*/

const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "Exercise 3.3"));
console.log('');

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Same database instance? true
*/

// start program



// Here I Create a singleton class.
var DatabaseSingleton = (function() {
  var instance;
  function createInstance() {
     var postgresDatabase = new Object("Database instance initialized!");
     return postgresDatabase;
  }
  return {
  getInstance: function() {
      if (!instance) {
       instance = createInstance();
         }
        return instance;
  }
  }
 })();


 //Here I Create a function that creates to database instances.
 function databaseSingletonTest(){
   var databaseOne = DatabaseSingleton.getInstance();
   var databaseTwo = DatabaseSingleton.getInstance();
   ///Here I log whether the two objects are similar or different.
   console.log("Same Database Instance? " + (databaseOne===databaseTwo))



 }


 //Here I call the function.
 databaseSingletonTest();


// end program
