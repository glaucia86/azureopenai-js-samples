/**
 * file: src/main.ts
 * description: file responsible for create list chat completion code sample
 * data: 12/08/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import * as dotenv from "dotenv";

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT || '';
const azureApiKey = process.env.AZURE_OPENAI_KEY || '';

export async function main() {
  console.log("== List Chat Completion Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentName = 'deployment-name-completion';
  const events = client.listChatCompletions(deploymentName, [
    { role: 'system', content: 'Hi! Welcome to Azure OpenAI Chat?' },
    { role: 'user', content: 'I would like to ask a favor' },
    { role: 'assistant', content: 'Of course. How can I help you today' },
    { role: 'user', content: "What is the capital of Curaçao?" },
  ],
    { maxTokens: 128 }
  );

  for await (const event of events) {
    for (const choice of event.choices) {
      console.log(choice.delta?.content)
    }
  }
}

main().catch((error) => {
  console.error('The sample encountered an error:', error);
});