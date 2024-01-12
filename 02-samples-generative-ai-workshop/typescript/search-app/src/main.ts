import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import * as dotenv from "dotenv";

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT || '';
const azureApiKey = process.env.AZURE_OPENAI_KEY || '';

function cosineSimilarity(vector1: number[], vector2: number[]): number {
  if (vector1.length !== vector2.length) {
    throw new Error("Vector dimensions must match for cosine similarity calculation.");
  }

  const dotProduct = vector1.reduce((acc, val, index) => acc + val * vector2[index], 0);
  const magnitude1 = Math.sqrt(vector1.reduce((acc, val) => acc + val ** 2, 0));
  const magnitude2 = Math.sqrt(vector2.reduce((acc, val) => acc + val ** 2, 0));

  if (magnitude1 === 0 || magnitude2 === 0) {
    throw new Error("Magnitude of a vector must be non-zero for cosine similarity calculation.");
  }

  return dotProduct / (magnitude1 * magnitude2);
}

async function main() {
  try {
    console.log("== Document Similarity App ==");
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
    const deploymentName = 'deployment-name-embeddings'; // should be of type ADA embedding for Azure Open AI

    const source = "Car";
    const compareTo = "Vehicle";
    const parrot = "A bird";

    const parrotEmbeddings = await client.getEmbeddings(deploymentName, [parrot]);

    // vector version
    const embeddings = await client.getEmbeddings(deploymentName, [source]);

    // vector version
    const embeddingsCompareTo = await client.getEmbeddings(deploymentName, [compareTo]);

    const carArray = embeddings.data[0].embedding;
    const vehicleArray = embeddingsCompareTo.data[0].embedding;
    const parrotArray = parrotEmbeddings.data[0].embedding;

    const score = cosineSimilarity(carArray, vehicleArray);
    console.log(score.toFixed(7));

    const scoreWithParrot = cosineSimilarity(carArray, parrotArray);
    console.log(scoreWithParrot.toFixed(7));

  } catch (error) {
    console.error("The sample encountered an error:", error);
  }
}

main();
