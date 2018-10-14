var keys = require("./keys");

// Include the node packages
var request = require("request");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var fs = require("fs");

// var band = require("request");
var omdb = keys.omdb;
var moment = require("moment");
moment().format();


function getConcert (band) {
  // all the code to execute the that api
  var divider = "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findShow = function() {
    var URL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";
    console.log("BIT API working");

    request(URL, function(err, response, body) {
      // Parse the response body (string) to a JSON object
      // Name of the venue
      // Venue location
      // Date of the Event (use moment to format this as "MM/DD/YYYY") 

      var result = JSON.parse(body)[0];
        console.log("Venue name " + result.venue.name);
        console.log("Venue location " + result.venue.city);
        console.log("Date of Event " + moment(result.datetime).format("MM/DD/YYYY"));

      var showData = [
          "Venue Name: " + result.venue.name,
          "Venue City: " + result.venue.city,
          "Date: " + result.datetime,
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("random.txt", showData + divider, function(err) {
        if (err) throw err;
        console.log(showData);
      });
    });
  };
}
 
function getSong (song) {
   // all the code to get the movie
  // divider will be used as a spacer between the tv data we print in random.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findSong takes in the name of a tv show and searches the Spotify API
  this.findSong = function(song) {
   
    console.log("Spotify is working");

    request(URL, function(err, response, body) {
      // Parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body);
  
      var songData = [
        "Show: " + jsonData.name,
        "Genre(s): " + jsonData.genres.join(", "),
        "Rating: " + jsonData.rating.average,
        "Network: " + jsonData.network.name,
        "Summary: " + jsonData.summary
    ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("random.txt", songData + divider, function(err) {
        if (err) throw err;
        console.log(songData);
      });
    });
  };
 }

 function getMovie (song) {
  // divider will be used as a spacer between the tv data we print in random.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findMovie takes in the name of a tv show and searches the tvmaze API
  this.findMovie = function() {
    var URL = "http://www.omdbapi.com/?t=" + movie + "&apikey=" + omdb;
    console.log("OMDB API working");

    request(URL, function(err, response, body) {
      // Parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body);
  
      var movieData = [
        "Title: " + jsonData.Title,
        "Year: " + jsonData.Year,
        "IMDB Rating: " + jsonData.search.imdbRating,
        "Rotten Tomatoes Rating: " + jsonData.ratings[1],
        "Country: " + jsonData.search.country,
        "Language: " + jsonData.search.language,
        "Plot: " + jsonData.search.plot,
        "Actors: " + jsonData.search.actors
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("random.txt", movieData + divider, function(err) {
        if (err) throw err;
        console.log(movieData);
      });
    });
  };
}

function getCommand() {
  // divider will be used as a spacer between the tv data we print in random.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findCommand takes in the name of a tv show and searches the tvmaze API
  this.findCommand = function() {
    
    console.log("");

    request(URL, function(err, response, body) {
      // Parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body);

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("random.txt", movieData + divider, function(err) {
        if (err) throw err;
        console.log(movieData);
      });
    });
  };
}

