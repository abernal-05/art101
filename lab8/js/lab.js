// Lab 8: Anon Functions and Callbacks
// working code from console

// initial function
function isEven (x){
    return (x % 2 == 0);
}

// test function

console.log("Is 6 even? ", isEven(6));
console.log("Is 13 even? ", isEven(13));

// map on your array using your function as a callback to operate on all the numbers in your array
array = [4, 5, 11, 16, 21]
console.log("MyArray", array);

var result = array.map(isEven);
console.log("Test of evenness of array:", result);

// new anonymous function
var result = array.map(function(x) {
    return x ** 2;
})

// Try setting a variable to the results of your map function and print it out

var mapResults = array.map(isEven);
console.log("Doubled Array: ", result);
