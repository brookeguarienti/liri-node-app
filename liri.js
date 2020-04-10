// code to read and set any environment variables with dotenv package
require("dotenv").config();

// importing and storing the keys.js file within the key variable
var keys = require("./keys");

// grab the axios package
var axios = require("axios");

// grab the moment package
var moment = require('moment');

// grab the filesource for text documents
var fs = require("fs");

// accessing spotify key and set to spotify variable
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// set var command to the third user input 
var command = process.argv[2];

// set var input to the fourth user input, slice, and join as a string
var input = process.argv.slice(3).join(" ");

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


// function concert for case "concert-this"
function concert() {
  var concertUrl = `https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`;
    
  axios.get(concertUrl).then(function (response) {  
      
    for (var i = 0; i < response.data.length; i++){
        // console.log(response.data[i].venue.name);
        // console.log(response.data[i].venue.city);
        // console.log(moment(response.data[i].datetime).format("MM/DD/YYYY LT"));
        console.log(`\nVenue Name: ${response.data[i].venue.name}\nLocated in: ${response.data[i].venue.city}, ${response.data[i].venue.country}\nDate and Time: ${moment(response.data[i].datatime).format("MM/DD/YYYY LT")}\n\n////////////////////////////////////`);
        
    }
  });
  logCommands(command, input);
}

// function music for case "spotify-this-song"
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
    });
    logCommands(command, input);

}

// function movie for case "movie-this"
function movie(){
    if (command === "movie-this" && process.argv[3] === undefined){
        input = "Mr. Nobody";
    }
    var omdbUrl = `http://www.omdbapi.com/?t=${input}&y=&plot=short&apikey=trilogy`;
    axios.get(omdbUrl).then(
  function(response) {
    console.log(`\nTitle: ${response.data.Title}\nYear: ${response.data.Year}\nIMDB Rating: ${response.data.imdbRating}\nRotten Tomatoes Rating: ${response.data.Ratings[1].Value}\nCountry Produced: ${response.data.Country}\nLanguage: ${response.data.Plot}\nActors: ${response.data.Actors}\n\n////////////////////////////////////\n`);
  });
  logCommands(command, input);

  
}

// function random pulling from random.txt file
function random(){
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(", ");
        if(dataArr[0] === "spotify-this-song"){
            input = dataArr[1];
            music();
        }else if(dataArr[0] === "concert-this"){
            input = dataArr[1];
            concert();
        }else if(dataArr[0] === "movie-this"){
            input = dataArr[1];
            movie();
        }else{
            console.log(`Need a command!`);
            
        }
    
      });
}

// function log commands will log commands entered from user into log.txt file
function logCommands (command, input) {
    fs.appendFile("log.txt", `\n${command}, ${input}`, function(error){
        if (error){
            console.log(error);
            
        }else{
            console.log(`\nThe Command: ${command} was logged.\nThe input: ${input} was also logged.\n`);
            
        }
    });
}
