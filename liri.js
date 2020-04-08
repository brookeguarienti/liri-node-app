// code to read and set any environment variables with dotenv package
require("dotenv").config();

// importing and storing the keys.js file within the key variable
var keys = require("./keys.js");

// accessing spotify key and set to spotify variable
var spotify = new Spotify(keys.spotify);
