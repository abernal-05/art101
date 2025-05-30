$(document).ready(function(){
    console.log("Document loaded")

function getHouse(num) {
    let remainder = num % 4;
    let str = "";
    // assign
    if (remainder == 0) {
        str = "Hufflepuffs are known for being dedicated, patient and loyal.";
    } else if (remainder == 1) {
        str = "Ravenclaws love to learn and are intelligent and witty.";
    } else if (remainder == 2) {
        str = "Griffindor is the house of courage and determinination.";
    } else if (remainder == 3) {
        str = "Slytherin is home to many ambitious and cunning people.";
    } 
    return str;
}

$("#button").click(function(){
    let name = $("#input").val()
    console.log(name);

    let nameLength = name.length;
    console.log(nameLength);

    let house = getHouse(nameLength);
    console.log(house);

    $("#output").append('<p>' + house + '</div></p>');
})
})   