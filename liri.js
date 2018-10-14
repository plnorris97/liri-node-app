require("dotenv").config();

// ========================================================================================================================

var keys = require("./keys.js");

// Include the node packages
var request = require("request");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var fs = require("fs");

// var band = require("request");

var moment = require("moment");
moment().format();

var band = new BandsinTown(keys.bands);


// Grab search command line argument to find a concert for a band
var search = process.argv[2];
// Joining the remaining arguments since a band name may contain spaces
var term = process.argv.slice(3).join(" ");
console.log(band);

// By default, if no search type is provided, search for a band
if (!search) {
  search = "band";
}

// By default, if no search term is provided, search for "Carbon Leaf"
if (!term) {
  term = "Carbon Leaf";
}

// Print whether searching for a movie, print the term as well
if (search === "band") {
  console.log("Searching for band");
  tv.findShow(term);
  
} 

// Create the band constructor
var band = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

    // findShow takes in the name of a tv show and searches the tvmaze API
    this.findShow = function(band) {
      var URL = "https://rest.bandsintown.com/artists/" + band;
  
      request(URL, function(err, response, body) {
      // Parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body)[0];
  
      // showData ends up being the string containing the show data we will print to the console
      // Name of the venue
      // Venue location
      // Date of the Event (use moment to format this as "MM/DD/YYYY") 

      var showData = [
          "Name: " + jsonData.name,
          "Venue: " + jsonData.venue.name,
          "Date: " + jsonData.datetime,
      ].join("\n\n");
  
      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, function(err) {
          if (err) throw err;
          console.log(showData);
      });
      });
  };
};



// Grab search command line argument to find an artist's song
var search = process.argv[2];
// Joining the remaining arguments since an artist name may contain spaces
var term = process.argv.slice(3).join(" ");
console.log(artist);

// By default, if no search type is provided, search for a song
if (!search) {
  search = "song";
}

// By default, if no search term is provided, search for "The Sign"
if (!term) {
  term = "The Sign";
}

// Print whether searching for a song, print the song name as well
if (search === "song") {
  console.log("Searching for song");
  tv.findSong(term);
  
} 
// Create the music constructor
var artist = function() {
    // divider will be used as a spacer between the data we print in log.txt
    var divider = "\n------------------------------------------------------------\n\n";
    
    //  takes in the name of a song and searches the spotify API
    this.findSong = function(song) {
        var URL = "" + song;
    
        request(URL, function(err, response, body) {
        // Parse the response body (string) to a JSON object
        var jsonData = JSON.parse(body);
    
        // showData ends up being the string containing the show data we will print to the console
        var artistData = [
            "Show: " + jsonData.name,
            "Genre(s): " + jsonData.genres.join(", "),
            "Rating: " + jsonData.rating.average,
            "Network: " + jsonData.network.name,
            "Summary: " + jsonData.summary
        ].join("\n\n");
    
        // Append showData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", artistData + divider, function(err) {
            if (err) throw err;
            console.log(artistData);
        });
        });
    }; 
};


var omdb = keys.omdb;

// Grab search command line argument to search for a movie
var search = process.argv[2];
// Joining the remaining arguments since movie title may contain spaces
var term = process.argv.slice(3).join(" ");

// By default, if no search type is provided, search for a movie
if (!search) {
  search = "movie";
}

// By default, if no search term is provided, search for "Mr. Nobody"
if (!term) {
  term = "mr. nobody";
}

// Print whether searching for a movie, print the term as well
if (search === "movie") {
  console.log("Searching for movie");
  tv.findMovie(movie);
  
} 

// Create the movie constructor
var movie = function() {
    // divider will be used as a spacer between the tv data we print in log.txt
    var divider = "\n------------------------------------------------------------\n\n";
  
    // findShow takes in the name of a tv show and searches the tvmaze API
    this.findMovie = function(movie) {
      var URL = "http://www.omdbapi.com/?t=" + movie + "&apikey=" + omdb;
  
      request(URL, function(err, response, body) {
        // Parse the response body (string) to a JSON object
        var jsonData = JSON.parse(body);
  
        // showData ends up being the string containing the show data we will print to the console
        var movieData = [
          "Title: " + jsonData.title,
          "Year: " + jsonData.year,
          "IMDB Rating: " + jsonData.search.imdbRating,
          "Rotten Tomatoes Rating: " + jsonData.ratings[1],
          "Country: " + jsonData.search.country,
          "Language: " + jsonData.search.language,
          "Plot: " + jsonData.search.plot,
          "Actors: " + jsonData.search.actors
        ].join("\n\n");
  
        // Append showData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", movieData + divider, function(err) {
          if (err) throw err;
          console.log(movieData);
        });
      });
    };
};

