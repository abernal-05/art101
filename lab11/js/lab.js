/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.
*/

// load doc

$(document).ready(function(){

    console.log("js & doc loaded");

function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
    }    

// click listener for button

$("#submit").click(function(){
    console.log("button clicked.")

    // Sorts the characters of a string in alphabetical order.
    const userName = $("#user-name").val();
    userNameSorted = sortString(userName);

    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
});
    
})