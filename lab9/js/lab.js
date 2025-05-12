/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Arantxa Bernal
   Date: 2025
*/

// add button to challenge section
$("#challenges").append("<button id='toggle'>Toggle Visibility</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenges").toggleClass("special");
});