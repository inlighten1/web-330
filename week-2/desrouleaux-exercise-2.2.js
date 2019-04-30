/*
============================================
; Title:  desrouleaux exercise2.2.js
; Author: Lance Desrouleaux
; Date:  22 April 2019
; Modified By: Lance Desrouleaux
; Description:Prototypes
;===========================================
*/

const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "Excercise 2.2"));
console.log('');


/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 The person's full name is '<fullname>.'
 The person's age is '<age>.'
*/

//Start program
var person = {

  getAge: function(){
      return this.age
    }

  };

var lance  = Object.create(person, {
  "age": {

    "value": 22

  },

  "fullName" : {
    value:  "Lance Desrouleaux"
  }

});


console.log('The persons full name is '+ lance.fullName)

console.log('The persons age is ' +lance.getAge())


//end program
