const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const configuration = {
  ID: process.env.SPOT_ID,
  SEC : process.env.SPOT_API_KEY,
};

async function searchTrack(artist, name) {
  // Replace YOUR_CLIENT_ID and YOUR_CLIENT_SECRET with your own Spotify API credentials
  const clientId = configuration.ID;
  const clientSecret = configuration.SEC;

  // Use the Spotify API to search for a track with the given artist
  const searchUrl = `https://api.spotify.com/v1/search?q=artist:${artist}&name= &type=track`;
  const authOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
    },
    body: 'grant_type=client_credentials'
  };
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', authOptions);
  const token = (await tokenResponse.json()).access_token;
  const searchOptions = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  };
  const searchResponse = await fetch(searchUrl, searchOptions);
  const searchResult = await searchResponse.json();

  // Return the first track in the search results
  return searchResult.tracks.items[0];
}

// Example usage: search for a track with the artist "Drake"
searchTrack("Drake").then(track => {
  console.log(track);  // prints the name of the track
});
