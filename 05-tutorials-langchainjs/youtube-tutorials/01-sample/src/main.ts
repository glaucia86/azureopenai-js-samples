import { createOpenAIFunctionsAgent, AgentExecutor } from 'langchain/agents';
import { AzureChatOpenAI } from '@langchain/azure-openai';
import { SerpAPI } from '@langchain/community/tools/serpapi';
import { Calculator } from 'langchain/tools/calculator';
import { ChatPromptTemplate } from '@langchain/core/prompts';

import * as dotenv from 'dotenv';

dotenv.config();

const model = new AzureChatOpenAI({
  modelName: "gpt-35-turbo",
  azureOpenAIEndpoint: process.env.AZURE_OPENAI_API_ENDPOINT || "",
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY || "",
  azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME || "",
  temperature: 0.7,
  maxTokens: 50,
  maxRetries: 2,
});

const serpApiKey = process.env.SERP_API_KEY || "";

const tools = [new Calculator(), new SerpAPI(serpApiKey)];

const createAgent = async () => {
  const promptTemplate = ChatPromptTemplate.fromMessages([
    'By searching the Internet, find how many albums has Boldy James dropped since 2010 and how many albums has Nas dropped since 2010? Find who dropped more albums and show the difference in percent.'
  ]);

  const agent = await createOpenAIFunctionsAgent({
    llm: model,
    tools,
    prompt: promptTemplate
  });

  return new AgentExecutor({
    agent,
    tools
  });
};

async function main() {
  const executor = await createAgent();
  const result = await executor.invoke(executor);

  console.log(result);
};

main().catch(console.error);

