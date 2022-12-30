async function execu(val) {

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion =  await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "List 10 " + val + " and who they are by. separate the song title from the artist name usign a comma",
  max_tokens: 500
});
console.log(completion.data.choices[0].text);
console.log(completion.data.choices[0].text.trim(/^[d.]+\./).split(/[\n,]+/));
}

execu("happy jazz songs");
