
/*
============================================
; Title:  desrouleaux-exercise1.3.js
; Author: Lance Desrouleaux
; Date:  22 April 2019
; Modified By: Lance Desrouleaux
; Description:
;===========================================
*/

const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "Exercise 1.3"));
console.log('');


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program


//Here I create function that creates and object with several properties of a phone .
function cellPhone(manufacturer, model, color, price) {

  this.Manufacturer = manufacturer;

  this.Model = model;

  this.Color = color;
  this.Price = price


  this.getPrice = function() {

  return this.Price;

  };

  this.getModel = function() {

    return this.Model;

    };

  this.getDetails = function() {



      return ' Manufacturer:' + this.Manufacturer  +'\n Model: '+ this.getModel()  +'\n Color: '+ this.Color +'\n Price: $'+ this.getPrice();

      };
  }

  // Here I create a new phone object.
  var celly = new cellPhone('Apple','iPhone XR', 'green', 2000);

  //Here I log the results of the new object.
  console.log(celly.getDetails())


  //end program
