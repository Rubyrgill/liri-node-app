
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

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
}


//TWITTER FUNCTION
function myTweets() {
    //username
    var parameter = { screen_name: "rubyrgill1", count: 20 };
    //grabbing information from user
    client.get("statuses/user_timeline", parameter, function (err, tweets, response) {
        //if error, then display
        if (err) {
            console.log(err);
            return;
        } else {
            //otherwise, display recent 20 tweets
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
                console.log(response);
            };
        }
    });
}

var trackName = process.argv[3];

//SPOTIFY FUNCTION
function spotifyThisSong() {
    //store user input 

    //user input == null, take default selection
    if (!trackName) {
        trackName: "The Sign";

    };
    //search spotify based on track
    songRequest = trackName;
    spotify.search({
        type: "track",
        query: songRequest,
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
                            "Song: " + trackInfo[i].name + "\n" +
                            "Preview Link: " + trackInfo[i].preview_url + "\n" +
                            "Album: " + trackInfo[i].album.name;

                        console.log("___________________________")
                        console.log(spotifyResults)
                        console.log("___________________________")
                    };
                };
            }
        }
    )
}

//MOVIE FUNCTION
function movieThis() {

    //if no user input, display default
    if (!movieName) {
        movieName = "mr nobody";
        console.log("If you haven't watched 'Mr. Nobody,' then you should: ")
        console.log("It's on Netflix!")
    }

    //url 
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";



    request(queryUrl, function (err, response, body) {
        //if no error
        if (!err && response.statusCode === 200) {
            var movieData = JSON.parse(body);

            //grabbing data from object
            var queryUrlResults =
                "Title: " + movieData.Title + "\n" +
                "Year: " + movieData.Year + "\n" +
                "IMDB Rating: " + movieData.Ratings[0].Value + "\n" +
                "Rotten Tomatoes Rating: " + movieData.Ratings[1].Value + "\n" +
                "Country: " + movieData.Country + "\n" +
                "Language: " + movieData.Language + "\n" +
                "Plot: " + movieData.Plot + "\n" +
                "Actors: " + movieData.Actors + "\n";

            console.log("______________________")
            console.log(queryUrlResults);
            console.log("______________________")

        } else {
            console.log(err);
        }


    });
}

function doWhatItSays() {
    //grabbing information on random.txt file
    fs.readFile("random.txt", "utf8", function (error, data) {

        //split it into two, option and parameter
        var dataArray = data.split(",");
        var option = (dataArray[0]);
        var parameter = (dataArray[1]);
        // console.log(option, parameter)

        //if error, display
        if (error) {
            console.log(error);
            //if movie-this, display and take as input for function
        } else if (option == "movie-this") {
            movieName = parameter;
            movieThis()
            //if spotify-this-song, display and take as input for function
        } else if (option = "spotify-this-song") {
            trackName = parameter;
            spotifyThisSong()
            //otherwise, display tweets
        } else {
            myTweets()
        }
    });
}

// console.log(command);
// console.log(parameter)

// parameter = parameter.replace('"', '');
// parameter = parameter.replace('"', '');

// console.log(parameter)
// switch (command) {
//     case 'my-tweets':
//         Value = parameter;
//         myTweets();
//         break;
//     case 'spotify-this-song':
//         Value = parameter;
//         spotify();
//         break;

//     case 'movie-this':
//         Value = parameter;
//         imdb();
//         break;
// }


