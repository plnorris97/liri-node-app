```js
require("dotenv").config();
```

// ========================================================================================================================

var keys = require("./keys.js");

// Include the Node Spotify and Request NPM packages for OMDB and Bands in Town
var request = require("request");
var spotify = require("node-spotify-api");
var bands = require("request");

var omdb = new Omdb(keys.Omdb);

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});

var spotify = new Spotify(keys.spotify);

// Then run a request to the Spotify API with the song specified
request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
}
});

var bands = new BandsinTown(keys.bands);

// Then run a request to the Bands in Town API with the band name specified
request("http://www.omdbapi.com/?t=" + band + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
}
});
