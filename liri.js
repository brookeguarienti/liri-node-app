// code to read and set any environment variables with dotenv package
require("dotenv").config();

// importing and storing the keys.js file within the key variable
var keys = require("./keys");

// grab the axios package
var axios = require("axios");

// grab the moment package
var moment = require('moment');

//
var fs = require("fs");

// accessing spotify key and set to spotify variable
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

var input = process.argv.slice(3).join(" ");


switch (command) {
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

function concert() {
  var concertUrl = `https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`;
    
  axios.get(concertUrl).then(function (response) {  
      
    for (var i = 0; i < response.data.length; i++){
        // console.log(response.data[i].venue.name);
        // console.log(response.data[i].venue.city);
        // console.log(moment(response.data[i].datetime).format("MM/DD/YYYY LT"));
        console.log(`\nVenue Name: ${response.data[i].venue.name}\nLocated in: ${response.data[i].venue.city}, ${response.data[i].venue.country}\nDate and Time: ${moment(response.data[i].datatime).format("MM/DD/YYYY LT")}\n\n////////////////////////////////////`);
        
    }
  })
}

function music(){
    if (command === "spotify-this-song" && process.argv[3] === undefined){
        input = "The Sign";
    }
    spotify
    .search({ type: "track", query: input, limit: 1 }, function(err, data){
        if (err){
            console.log(`an error occured: ${err}`);
        }else{
            console.log(`\nArtist: ${data.tracks.items[0].artists[0].name}\nSong Name: ${data.tracks.items[0].name}\nPreview Link: ${data.tracks.items[0].preview_url}\nAlbum: ${data.tracks.items[0].album.name}\n\n////////////////////////////////////`);
            
        }
    })
}
