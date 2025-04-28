// index.js - Lab 6 - Arrays and Objects
// Author: Arantxa Bernal
// Date: 4/28/25

// Define Variables

myTransport = ["BMW 740 iL", " bus", " train", " bike"];

// object myMainRide

myMainRide = {
  make: "BMW",
  model: "740 iL",
  color: "White",
  year: 1993,
  age: function() {
    return 2025 - this.year;
  }
}


// output
document.writeln("Getting around: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");