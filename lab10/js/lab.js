/*
lab 10 JS file
appends to elemnts to an output div
*/

// load doc

$(document).ready(function(){

    console.log("js & doc loaded");


function generateRandomText() {
    const text = "Scramble this text";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the text
    return text.slice(randStart, randStart + randLen);
  }

// get new fake dialogue

const newText = generateRandomText();

// click listener for button
$("#Scrambled").click(function(){
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    console.log("button is clicked");
});

})

