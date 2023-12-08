/**
 * file: src/main.ts
 * description: file responsible for create list completion code sample
 * data: 12/08/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import * as dotenv from "dotenv";

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT || '';
const azureApiKey = process.env.AZURE_OPENAI_KEY || '';

const prompt = ['What is human life expectancy in the United States?'];

export async function main() {
  console.log("== List Completion Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentName = 'deployment-name-completion';
  const events = await client.listCompletions(deploymentName, prompt, {
    maxTokens: 128
  });

  for await (const event of events) {
    for (const choice of event.choices) {
      console.log(choice.text);
    }
  }
}

main().catch((error) => {
  console.error('The sample encountered an error:', error);
});