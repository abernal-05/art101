$(document).ready(function() {

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.allorigins.win/get?url=https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(response) {
        // actual XKCD data
        const data = JSON.parse(response.contents)

        console.log("Today's Comic", data);
        // Get the image URL
        const imageUrl = data.img;
        const name = data.title;
        const alt = data.alt;

         // Show on the page
        $("#output").html(`
            <p> ${data.alt}</p>
            <img src="${imageUrl}" alt="${name}">
        `);
        
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})

})