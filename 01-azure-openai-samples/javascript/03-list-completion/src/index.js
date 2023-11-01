/**
 * file: src/index.js
 * description: file responsible for run the list completion code sample
 * data: 11/01/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import dotenv from 'dotenv';

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT || '';
const azureApiKey = process.env.AZURE_OPENAI_KEY || '';

const prompt = ['What is the Brazilian currency?'];

async function main() {
  console.log('=== List Completions Sample ===');

  const client = new OpenAIClient(
    endpoint,
    new AzureKeyCredential(azureApiKey)
  );
  const deploymentName = 'deployment-name-completion';

  const results = client.listCompletions(deploymentName, prompt, {
    maxTokens: 128,
    temperature: 0.3,
  });

  for await (const result of results) {
    for (const choice of result.choices) {
      console.log(choice.text)
    }
  }
}

main().catch((err) => {
  console.error('The sample encountered an error:', err);
});
