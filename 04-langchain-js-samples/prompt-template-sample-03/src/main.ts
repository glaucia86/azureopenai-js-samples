import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { SystemMessagePromptTemplate, HumanMessagePromptTemplate } from "@langchain/core/prompts";
import * as dotenv from "dotenv";

dotenv.config();

const model = new ChatOpenAI({
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY || "",
  azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION || "",
  azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME || "",
  azureOpenAIApiEmbeddingsDeploymentName: process.env.AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME || "",
  azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME || "",
});

const promptFromMessages = ChatPromptTemplate.fromMessages([
  //SystemMessagePromptTemplate.fromTemplate("You are an expert at picking company names."),
  //HumanMessagePromptTemplate.fromTemplate("What are three good names for a company that makes {product}?"),

  // Another way to do this is to use the `fromMessages` method on the `ChatPromptTemplate` class.
  ["system", "You are an expert at picking company names."],
  ["human", "What are three good names for a company that makes {product}?"]
]);

async function generatePrompt(product: string) {
  const formattedPrompt = await promptFromMessages.formatMessages({ product });
  return formattedPrompt;
}

async function main() {
  const product = "shiny objects";
  const finalPromptResult = await generatePrompt(product);

  const result = await model.invoke(finalPromptResult);

  console.log(result);
}

main();




