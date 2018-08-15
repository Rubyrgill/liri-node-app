
require("dotenv").config();

//Import keys.js file
var keys = require("./keys");

//fs
var fs = require("fs");

//access keys information 
//-------------------------
//Spotify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
//request
var request = require("request");
//input
var liriReturn = process.argv[2]
var movieName = process.argv[3]

//Twitter
var Twitter = require("twitter");
var client = new Twitter(keys.twitter);


//----------------------------
//Take in following commands 

switch (liriReturn) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "move-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
}

//TWITTER FUNCTION
function myTweets() {
    //username
    var parameter = { screen_name: "rubyrgill1" };
    //grabbing information from user
    client.get("statuses/user_timeline", parameter, function (err, tweets, response) {
        //if error, then display
        if (err) {
            console.log(err);
            return;
        } else {
            //otherwise, display recent 20 tweets
            for (var i = 0; i < 21; i++) {
                console.log(tweets[i].text);
                console.log(response);
            };
        }
    });
}

//SPOTIFY FUNCTION
function spotifyThisSong(trackName) {
    //store user input 
    var trackName = process.argv[3];
    //user input == null, take default selection
    if (!trackName) {
        trackName: "The Sign";

    };
    //search spotify based on track
    songRequest = trackName;
    spotify.search({
        type: "track",
        query: songRequest
    },
        function (err, data) {
            //if error, display
            if (err) {
                console.log(err);
            } else {
                //otherwise...
                var trackInfo = data.tracks.items;
                //display "A" song, in relation to track name with the following details
                for (var i = 0; i < 1; i++) {
                    if (trackInfo[i] != undefined) {
                        var spotifyResults =
                            "Artist: " + trackInfo[i].artists[0].name + "\n" +
                            "  Song: " + trackInfo[i].name + "\n" +
                            "  Preview Link: " + trackInfo[i].preview_url + "\n" +
                            " Album: " + trackInfo[i].album.name;


                        console.log(spotifyResults)
                        console.log("___________________________")
                    };
                };
            }
        }
    )
}

//MOVIE FUNCTION
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

request(queryUrl, function (error, response, body) {

})