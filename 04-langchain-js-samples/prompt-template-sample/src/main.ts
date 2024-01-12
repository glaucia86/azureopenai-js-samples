import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import * as dotenv from "dotenv";
import { HumanMessage } from "@langchain/core/messages";

dotenv.config();

const model = new ChatOpenAI({
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY || "",
  azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION || "",
  azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME || "",
  azureOpenAIApiEmbeddingsDeploymentName: process.env.AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME || "",
  azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME || "",
});

const prompt = ChatPromptTemplate.fromMessages([
  `What are three good names for a company that makes {product}?`,
]);

async function generatePrompt(product: string) {
  const formattedPrompt = await prompt.format({ product });
  return formattedPrompt;
}

async function main() {
  const product = "colorful socks";
  const finalPromptResult = await generatePrompt(product);

  //const result = await model.invoke([finalPromptResult]);
  const result = await model.invoke([
    new HumanMessage(finalPromptResult),
  ]);

  console.log(result);
}

main();