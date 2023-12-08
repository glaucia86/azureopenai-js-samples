/**
 * file: src/index.js
 * description: file responsible for run the code sample chat completion
 * data: 10/23/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import dotenv from 'dotenv';

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT || '';
const azureApiKey = process.env.AZURE_OPENAI_KEY || '';

async function main() {
  console.log('== Chat Completions Sample ==');

  const client = new OpenAIClient(
    endpoint,
    new AzureKeyCredential(azureApiKey)
  );
  const deploymentName = 'deployment-name-completion';
  const result = await client.getChatCompletions(deploymentName, [
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
      content: "What's the Brazilian currency?",
    },
  ]);

  for (const choice of result.choices) {
    console.log(choice.message);
  }
}

main().catch((error) => {
  console.error('The sample encountered an error:', error);
});
