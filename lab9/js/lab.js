/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Arantxa Bernal
   Date: 2025
*/

// add a click listener to the challenge button
$("#toggle").click(function(){
    // add the "special" class to the section
    $("#challenges").toggleClass("special");

    $("#challenges").append('<div class="special"></div>');
    console.log("button is clicked")
});