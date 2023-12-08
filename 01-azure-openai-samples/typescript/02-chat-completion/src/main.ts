/**
 * file: src/main.ts
 * description: file responsible for create chat completion code sample
 * data: 12/08/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */


import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import * as dotenv from "dotenv";

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT || '';
const azureApiKey = process.env.AZURE_OPENAI_KEY || '';

export async function main() {
  console.log("== Chat Completion Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentName = 'deployment-name-completion';
  const result = await client.getChatCompletions(deploymentName, [
    {
      role: 'system', content: 'You are a helpful assistant. You will talk like a pirate.'
    },
    {
      role: 'user', content: 'Can you help me?'
    },
    {
      role: 'assistant', content: 'Arr! Of course, me hearty! What can I do for ye?'
    },
    {
      role: 'user', content: 'Who won the Oscar for best picture in 2019?'
    }
  ]);

  for (const choice of result.choices) {
    console.log(choice.message);
  }
}

main().catch((error) => {
  console.error('The sample encountered an error:', error);
});
