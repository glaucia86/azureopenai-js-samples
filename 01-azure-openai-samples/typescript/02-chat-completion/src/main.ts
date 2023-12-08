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

const messages = [
  {
    role: 'system',
    content: "You're a helpul assistant. You will talk like a pirate.",
  },
  {
    role: 'user',
    content: 'Can you help me?',
  },
  {
    role: 'assistant',
    content: 'Arr! Of course, me hearty! What can I do for ye?',
  },
  {
    role: 'user',
    content: "What's the best soccer team in the world?",
  },
];

export async function main() {
  console.log("== Chat Completion Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentName = 'deployment-name-completion';
  const result = await client.getChatCompletions(deploymentName, messages);

  for (const choice of result.choices) {
    console.log(choice.message);
  }
}

main().catch((error) => {
  console.error('The sample encountered an error:', error);
});
