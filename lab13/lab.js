$(document).ready(function(){
    console.log("Doc loaded")

//get input from html

function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        // if either value is blank, don't use it
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

// FizzBuzz function

function fizzBuzzBoom(maxNums, factorObj) {
    // iterate over all numbers
    for (var num=0; num<maxNums; num++) {
        debugger;
        // reset output string
        var outputStr = "";
        // iterate over the factors from user input
        for (var factor in factorObj) {
            // check to see if num is a multiple of factor
            if (num % factor == 0) {
                // if yes, then add the text to output string
                outputStr += factorObj[factor];
            }
        }
        // words in outputStr, format it like " - FizzBuzz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
        // compile one long string as you output numbers
        oneLongString += num + " Fizz!<br>"; 
    }

    // append to output div
   
    $("#output").append(oneLongString);
}



})