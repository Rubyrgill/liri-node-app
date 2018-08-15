
require("dotenv").config();

//Import keys.js file
var keys = require("./keys");

//access keys information 
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


//----------------------------
//Take in following commands 

switch (lirireturn) {
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

