async function execu() {

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion =  await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "Give me a JSON object I can use on the spotify API to create a playlsit of 10 jazz songs",
  max_tokens: 500
});
console.log(completion.data.choices);

}

execu();
