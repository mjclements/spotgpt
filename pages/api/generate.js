import { Configuration, OpenAIApi } from "openai";
const axios = require('axios');
const qs = require('qs');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const getAuth = async () => {
  try{
    const client_id = process.env.SPOTIFY_API_ID; // Your client id
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
    const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    console.log('spotify success', response.data.access_token)
    //return access token
    return response.data.access_token;
    //console.log(response.data.access_token);   
  }catch(error){
    //on fail, log the error in console
    console.log(error);
  }
}
export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    max_tokens: 200,
    prompt: req.body.playlist,
    temperature: 0.6,
  });
  console.log(completion)
  getAuth()
  res.status(200).json({ result: completion.data.choices.map(choice => choice.text) });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}
