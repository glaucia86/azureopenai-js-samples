/**
 * file: src/main.ts
 * description: file responsible for create completion code sample
 * data: 10/23/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */


import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import * as dotenv from "dotenv";

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT || '';
const azureApiKey = process.env.AZURE_OPENAI_KEY || '';

const prompt = ['When Microsoft was founded?'];

export async function main() {
  console.log('=== Get completions Sample ===');

  const client = new OpenAIClient(
    endpoint,
    new AzureKeyCredential(azureApiKey)
  );

  const deploymentName = 'deployment-name-completion';
  const result = await client.getCompletions(deploymentName, prompt, {
    maxTokens: 50,
    temperature: 0.3,
  });

  for (const choice of result.choices) {
    console.log(choice.text);
  }
}

main().catch((error) => {
  console.error('The sample encountered an error:', error);
});
