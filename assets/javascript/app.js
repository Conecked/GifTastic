var apiKey = "I5RP2BAIKQhvP6OMlZb2xBZphgtNby1a";
var sports = ["boxing", "baseball", "football", "NCAA", "roll tide", "soccer", "world cup", "badminton", "cornhole"];


// create function to allow user to create new sport buttons that add to screen
// button click, ajax code will be inside of this
// display the rating, create <p> tag to display
// event listener for user click to start/stop the displayed gif when clicked on

function displayGifs() {

    var sport = $(this).attr("data-sport");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=" + apiKey + "&limit=10";
    $("#gifs-view").html("");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var newDiv = $("<div>");
            var p = $(`<p>Rating: ${results[i].rating}</p>`);

            let img = $('<img class="gif">').attr("src", results[i].images.fixed_height.url);

            newDiv.append(p);

            newDiv.append(img);

            $("#gifs-view").append(newDiv);

        }
    });
};

function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < sports.length; i++) {
        var a = $("<button>");
        a.addClass("gif-btn");
        a.attr("data-sport", sports[i]);
        a.text(sports[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-sport").on("click", function(event) {
    event.preventDefault();
    var sport = $("#sport-input").val().trim();
    sports.push(sport);
    renderButtons();
});

// Adding a click event listener to all elements with a class of "gif-btn"
$(document).on("click", ".gif-btn", displayGifs);

// Calling the renderButtons function to display the intial buttons
renderButtons();

$(".gif").on("click", function() {
    var state = $(this).attr("src");

    if (state === results[i].images.fixed_height.url) {
        $(this).attr("src", results[i].images.fixed_height_still.url);
        // $(this).attr("src")
    }

})