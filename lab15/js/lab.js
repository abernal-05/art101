$(document).ready(function(){
    console.log("Doc loaded");

    $("#activate").click(function(){
        console.log("I choose you!");

        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/",
            type: "GET",
            dataType: "json",
            success: function(data) {
                console.log("List of Pokémon:", data);

                // Get the URL of the first Pokémon in the list
                // Some code from ChatGPT
                // Some code from Lab 15 Canvas Module
                
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const firstPokemonUrl = data.results[randomIndex].url;

                // Details for that Pokémon
                $.ajax({
                    url: firstPokemonUrl,
                    type: "GET",
                    dataType: "json",
                    success: function(pokemonData) {
                        console.log("First Pokémon data:", pokemonData);

                        // Get the image URL
                        const imageUrl = pokemonData.sprites.front_default;
                        const name = pokemonData.name;

                        // Show on the page
                        $("#output").html(`
                            <p> I choose you: ${name.toUpperCase()}</p>
                            <img src="${imageUrl}" alt="${name}">
                        `);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log("Error getting Pokémon details:", textStatus, errorThrown);
                    }
                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
            }
        });
    });
});
