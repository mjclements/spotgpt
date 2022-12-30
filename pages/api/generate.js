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
// console.log(completion.data.choices[0].text);
const trimmings = completion.data.choices[0].text.trim(/^[d.]+\./).split(/[\n,]+/);
//trimmings = completion.data.choices[0].text.trim(/^[d.]+\./);
//trimmings = trimmings.replace('"','');
res.status(200).json({ result: trimmings });

}