// function lab
// In the function, declare a variable userName and use window.prompt() to get the user's name from the user. 
// Sort the letters of the user's name and return those from the function.
// Hint: You can't sort strings, but you can sort arrays. Can you convert it back and forth?
// Outside of the function, call the function and output the results with document.writeln() to neatly output the user's sorted name.

function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

// output

document.writeln("Oh hey, I fixed your name: ",
    sortUserName(), "</br>");

    