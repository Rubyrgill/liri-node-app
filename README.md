# The Liri-Bot

## Objective:
```
The Liri-Bot is command line node app that takes in parameters and gives you back data based on input
```

## Resources Used: 
```
- Node.js
- Javascript
- Twitter NPM
- Spotify NPM
- Request NPM
- OMDB API
```



## The Commands Liri-Bot will accept:

* `my-tweets`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`

## Getting Set-Up: 

```
1. Clone Repo
2. Run command 'npm install' in Terminal/GitBash
3. Run command 'node liri.js' followed by any command listed above 
```

## Command Results & Steps: 

1. node liri.js `my-tweets`
    ```
    - Displays twenty of my most recent tweets and When it was created
    ```
 
2. node liri.js `spotify-this-song` and `<INPUT_SONG_TITLE>`
    ```
    This will show the following information about the song in your terminal/bash window
       - Artist(s)
       - The song's name
       - A preview link of the song from Spotify
       - The album that the song is from
       
      ** If no song title is entered, then default will display ("The Sign", by Ace of Base)
    ```
 
2. node liri.js `movie-this` and `<INPUT_MOVIE_TITLE>`
    ```
    This will show the following information about the movie in your terminal/bash window
       - Title of the movie.
       - Year the movie came out.
       - IMDB Rating of the movie.
       - Rotten Tomatoes Rating of the movie.
       - Country where the movie was produced.
       - Language of the movie.
       - Plot of the movie.
       - Actors in the movie.
       
      ** If no movie title is entered, then default will display ("Mr. Nobody")
    ```
    
 2. node liri.js `do-what-it-says`
    ```
    LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
       
      ** Feel free to change the text in that document to test out the feature for other commands.
    ```
