require("dotenv").config();

// ========================================================================================================================

var Command = require("./command");

// Create a new command object
var term = new Command();

// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or command show name may contain spaces
var term = process.argv.slice(3).join(" ");
console.log("Search term: " + term);

// By default, if no search type is provided, search 
if (!search) {
  search = "concert";
}

// By default, if no search term is provided, search for "Carbon Leaf"
if (!term) {
  term = "Carbon Leaf";
}

// Print statements to the console and print the search term as well
if (search === "concert-this") {
  console.log("Find next concert: " + term);
  getConcert();
} else if (search === "spotify-this-song") {
  console.log("Find song data: " + term);
  getSong();
} else if (search === "movie-this") {
  console.log("Find movie data: " + term);
  getMovie();
} else if (search === "do-what-it-says") {
  console.log("Create a command: " + term);
  getCommand();
}