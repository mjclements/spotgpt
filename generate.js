export default async function (req,res) {

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion =  await openai.createCompletion({
  model: "text-davinci-003",
  prompt: req.body.playlist,
  max_tokens: 500
});
res.status(200).json({ result: completion.data.choices.map(choice => choice.text) });
console.log(completion.data.choices);

}