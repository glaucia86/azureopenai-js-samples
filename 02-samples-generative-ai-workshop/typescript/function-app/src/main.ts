import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT || "";
const azureApiKey = process.env.AZURE_OPENAI_KEY || "";
const bingMapsBaseUrl = process.env.BING_MAPS_BASE_URL || "";
const bingApiKey = process.env.BING_API_KEY || "";

async function findWeather(currentLocation: string, placeType: string) {
  const url = `${bingMapsBaseUrl}?query=${encodeURIComponent(currentLocation)}&type=${placeType}&key=${bingApiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('Error...: ', error);
  }
}

const getCurrentWeather = {
  name: "get_current_weather",
  description: "Get the current weather in a given location",
  parameters: {
    type: "object",
    properties: {
      location: {
        type: "string",
        description: "The city and state, e.g. San Francisco, CA",
      },
      unit: {
        type: "string",
        enum: ["celsius", "fahrenheit"],
      },
    },
    required: ["location"],
  },
};

async function main() {
  try {
    console.log("== Chat Completions Sample With Functions ==");

    const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
    const deploymentName = "gpt-4";
    const result = await client.getChatCompletions(
      deploymentName,
      [{ role: "user", content: "What's the weather like in Boston?" }],
      {
        functions: [getCurrentWeather],
      },
    );

    for (const choice of result.choices) {
      console.log(choice.message?.functionCall);
      if (choice.message?.functionCall) {
        let res = await findWeather("Boston", "celsius");
        console.log("Result...:", res);
      }
    }
  } catch (error) {
    console.error("The sample encountered an error:", error);
  }
}

main();