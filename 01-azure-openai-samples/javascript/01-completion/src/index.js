/**
 * file: src/index.js
 * description: file responsible for run the code sample completion
 * data: 10/20/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import dotenv from 'dotenv';

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT || '';
const azureApiKey = process.env.AZURE_OPENAI_KEY || '';

const prompt = ['What is Azure OpenAI?'];

async function main() {
  console.log('=== Get completions Sample ===');

  const client = new OpenAIClient(
    endpoint,
    new AzureKeyCredential(azureApiKey)
  );
  const deploymentName = 'deployment-name-completion';
  const result = await client.getCompletions(deploymentName, prompt, {
    maxTokens: 200,
    temperature: 0.25,
  });

  for (const choice of result.choices) {
    console.log(choice.text);
  }
}

main().catch((err) => {
  console.error('The sample encountered an error:', err);
});
