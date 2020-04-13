# liri-node-app
Language Interpretation and Recognition Interface Node Application 

## What problem does liri-node-app solve?
The liri-node-app is able to quickly pull data for songs, concerts, and movies.

## Concert
Using the OMDB API, a user is able to search for upcoming concerts based on the artist they search for
  
## Spotify
Using the Spotify API, a user is able to search by song title to find the following information:
- Artist name
- Album name
- Providing a preview link to the song
      
## Movie
Using the OMDB API, a user is able to search by movie title to find the following information:
- Year released
- IMDB Rating
- Rotten Tomatoes Rating
- Country Produced
- Language
- Plot
- Actors

## Organization of the app
The liri-node-app consists of the following files:
- liri.js
- keys.js
- random.txt
- log.txt
- package.json 
- package-lock.json
- .gitignore
- .env
- node_modules
      
 # JavaScript
 **Liri.js **
    
*Global Variables*
* Using Node, require the dotenv file which holds the Spotify API keys -- Spotify ID and Spotify Secret
* The dotenv (.env) folder is hidden from other users by using the .gitignore file
``` 
// code to read and set any environment variables with dotenv package
require("dotenv").config();
```
    
* "keys" allows for importing and storing the keys.js file which is used to export the Spotify API information from the dotenv file.
```
// importing and storing the keys.js file within the key variable
var keys = require("./keys");
```
    
* "axios" grabs the axios package, which is used to grab data for OMDB (movie search) and Bands In Town (concert search)
```
// grab the axios package
var axios = require("axios");
```
    
* "moment" grabs the moment package, a lightweight JavaScript date library for parsing, validating, manipulating, and formatting          dates.
```
// grab the moment package
var moment = require('moment');
```
    
* "fs" allows for linking the javascript file to text files 
```
// grab the filesource for text documents
var fs = require("fs");
```
    
* "Spotify" requires the node-spotify-api package
* "spotify" sets the new keys to what has been pulled from the node-spotify-api package 
```
// accessing spotify key and set to spotify variable
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
```

* "command" takes in the user's third input 
```
// set var command to the third user input 
var command = process.argv[2];
```

* "input" takes in the user's fourth input, slices, and then joins as a string
```
// set var input to the fourth user input, slice, and join as a string
var input = process.argv.slice(3).join(" ");
```

*Switch Case*
Switch (command) takes in the command variable, and runs one of the following functions based on what the user enters
Note that if the user does not enter a valid case, the default ersponse is "Please submit a valid request"
```
// set up switch cases
switch (command) {
  case "concert-this":
    concert();
    break;
  case "spotify-this-song":
    music();
    break;
  case "movie-this":
    movie();
    break;
  case "do-what-it-says":
    random();
    break;
  default:
    console.log("Please submit a valid request");
}
```


## Instructions to run the app

## Screenshots of app functioning

## Deployed version link 

## Technologies used
* Node Spotify API
* Axios
* OMDB API
* Bands in Town API
* Moment
* DotEnv

## My role 
