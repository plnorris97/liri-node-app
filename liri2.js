require("dotenv").config();

var keys = require("./keys");
var request = require("request");
var Spotify = require('node-spotify-api');
var fs = require('fs');
var inquirer = require('inquirer');

inquirer.prompt([
  {
  type: "list",
  message: "Whats would you like to do?",
  choices: ["spotify-this-song", "movie-this", "concert-this", "do-what-it-says"],
  name: "selections",
  }
])
.then(function(inquirerResponse) {
  if(inquirerResponse.confirm) {
    console.log("You chose: " + inquirerResponse.name);
  }
  // else{

  // }

});

var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

// Take in command line arguments
var command = process.argv[2];
var term = process.argv.slice(3).join(" ");
console.log("Command: " + command);
console.log("Search term: " + term);
getInput();


function getInput(command, term) {
  if (logged()) {
    switch (command) {
      case "spotify-this-song":
        if (term) {
          console.log("Spotify this song: " + term);
          spotifySong();
        }
        else {
          if (process.argv[3] != null) {
            var song = process.argv.slice(3).join('+');
            spotifySong(song);
          }
          else {
            spotifySong('The Sign');
          }
        }
    }
    switch (command) {
      case "movie-this":
        if (term) {
          console.log("Movie this movie: " + term);
          movieSearch();
          break;
        }
    }
    switch (command) {
      case "concert-this":
        if (term) {
          console.log("Concert this band: " + term);
          concertSearch();
          break;
        }
    }
    switch (command) {
      case "do-what-this-says":
        if (term) {
          console.log("Do what this says: " + term);
          doWhatSays();
          break;
        }
    }
  }
}

// Spotify-This-Song code
function spotifySong() {
  spotify.search({
    type: 'track',
    query: term
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log('Artist: ' + data.tracks.items[0].album.artists[0].name);
    console.log('')
    console.log('Song Name: ' + data.tracks.items[0].name);
    console.log('')
    console.log('Preview URL: ' + data.tracks.items[0].preview_url);
    console.log('')
    console.log('Album Name: ' + data.tracks.items[0].album.name);
  });
}

// Movie-This code
function movieSearch() {
  var query = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&r=json&tomatoes=true';
  request(query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var movieInfo = JSON.parse(body);
      // if no movie entered use below movieDetails for movie
      if (movieInfo.Response === 'False') {
        movieSearch('Mr. Nobody');
      }
      else {
        console.log("***")
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log("Title: " + JSON.parse(body)["Title"]);
        console.log("Release Year: " + JSON.parse(body)["Release Year"]);
        console.log("IMDB Rating: " + JSON.parse(body)["IMDB Rating"]);
        console.log("Country: " + JSON.parse(body)["Country"]);
        console.log("Language: " + JSON.parse(body)["Language"]);
        console.log("Plot: " + JSON.parse(body)["Plot"]);
        console.log("Actors: " + JSON.parse(body)["Actors"]);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["Tomato Rating"]);
        console.log("Rotten Tomatoes URL: " + JSON.parse(body)["Tomato URL"]);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log("***");
      }
    }
  });
}

// Concert This code

function concertSearch() {
  var query = "" + band + "";

  request(query, function (err, response, body) {
    if (!error && response.statusCode == 200) {
      var concertInfo = JSON.parse(body);
      // if no band entered return Carbon Leaf
      if (concertInfo === "false") {
        concertSearch("Carbon Leaf");
      }
      else {
        console.log("Name of venue: " + JSON.parse(body)["Name"]);
        console.log("Venue location: " + JSON.parse(body)["Location"]);
        console.log("Date of Concert: " + JSON.parse(body)["Date"]);
      }
    }
  });
}

function doWhatSays() {
  fs.readFile('random.txt', 'utf-8', function (error, data) {
    var fileCommands = data.split(',');
    getInput(fileCommands[0], fileCommands[1]);
  });
}

function logged() {
  // captures all command line inputs
  var inputs = process.argv.slice(2).join(" ");
  // feeeds the data to the log file
  // appends data to the log file after each run
  fs.appendFile("log.txt", "node liri2.js: " + inputs + "\n", function (error) {
    if (error) {
      throw error;
    }
    else {
      console.log("Log file has been updated.");
    }
  });
  return true;
}



// Joining the remaining arguments since an actor or command show name may contain spaces


// // By default, if no search type is provided, search 
// if (!search) {
//   search = "";
// }

// // By default, if no search term is provided, search for "Carbon Leaf"
// if (!term) {
//   term = "";
// }