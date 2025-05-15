/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Arantxa Bernal
   Date: 2025
*/

// load doc

$(document).ready(function() {

console.log("document loaded");

// append to section
$("#toggle").click(function(){
console.log("button is clicked"); 
// code here
 $("#output").toggleClass("special");

});

})