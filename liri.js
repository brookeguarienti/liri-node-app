// code to read and set any environment variables with dotenv package
require("dotenv").config();

// importing and storing the keys.js file within the key variable
var keys = require("./keys.js");

// grab the axios package
var axios = require("axios");

// grab the moment package
var moment = require("moment");

//
var fs = require("fs");

// accessing spotify key and set to spotify variable
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);


var command = process.argv[2];

var input = process.argv.slice(3).join(" ");
console.log("command: " + command,"input: " + input);

switch(command) {
    case "concert-this":
        concert();
        break;
    case "spotify-this-song":
        music();
        break;
    case "do-what-it-says":
        movie();
        break;
    default:
        console.log("Please submit a valid request");
}

function concert(){
    var concertUrl = `https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`;
}
