console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bandsintown = {
  secret: process.env.BANDSINTOWN_SECRET
}

exports.omdb = process.env.OMDB_APIKEY