async function execu() {

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion =  await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "List 10 Happy Songs and who they are by",
  max_tokens: 500
});
console.log(completion.data.choices[0].text);
console.log(completion.data.choices[0].text.split("\n"));
}

execu();
