//FizzBuzzBoom Function

$(document).ready(function () {

$("#button").click(function() {

    //User input factor

    let i = parseInt($("#userInput").val());

    // for loop to print numbers 1 - 100
    // FizzBuzz Function
    // // multiple of 3 & 5
    for (; i <= 100; i++) {
    if (i % 15 == 0){

    console.log("FizzBuzz!");
    str = i + " FizzBuzz!"; 
    $("#output").append('<p>' + str + '</p>');
    }

    //if statement: if multiple of 3 print "Fizz!"

    else if (i % 3 == 0){

    console.log("Fizz!");
    str = i + " Fizz!"; 
    $("#output").append('<p>' + str + '</p>');
    }

    //else if: multiple of 5 print "Buzz!"

    else if (i % 5 == 0){

    console.log("Buzz!");
    str = i + " Buzz!"; 
    $("#output").append('<p>' + str + '</p>');
    }
 
    else {
    console.log(i);
    }
  
}

})

$("#clear").click(function() {

    $("#output").hide();
})

})