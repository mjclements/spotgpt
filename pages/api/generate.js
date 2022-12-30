import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
export default async function (req,res) {

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const completion =  await openai.createCompletion({
  model: "text-davinci-003",
  prompt: req.body.playlist + ". separate the song title from the artist name using a comma",
  max_tokens: 500
});
console.log("<==========>");
let trimmings = completion.data.choices[0].text.trim(/^[d.]+\./);
trimmings = trimmings.replaceAll('"','');
trimmings = trimmings.replaceAll("\"", '');
console.log(trimmings);
console.log("<==========>");
let list = trimmings.split("\n");

//list.forEach((element) => {element = element.trim(/\d+/)});

list = list.map(element => element.replace(/\d+/,''));
console.log(list);
console.log("<===========>");

list.forEach( (element, index) => { const spl = element.split(","); element = {song: spl[0], artist: spl[1]}; list[index] = element;});

console.log(list);

res.status(200).json({ result: completion.data.choices[0].text });

}
