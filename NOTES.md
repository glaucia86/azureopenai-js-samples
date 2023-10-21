# 📔 Notes of Study

## 📝 OpenAI Resources

Here you can find the documentation for the OpenAI Service.

- **[OpenAI Official Documentation](https://platform.openai.com/docs/introduction)**
- **[OpenAI API Reference](https://platform.openai.com/docs/api-reference)**
- **[OpenAI Node API Library](https://github.com/openai/openai-node)**

## 📝 Azure Open A.I Reference documentation

Here you can find the documentation for the Azure Open A.I Service.

- **[@azure/openai package](https://learn.microsoft.com/pt-br/javascript/api/%40azure/openai/?view=azure-node-preview)**
- **[Azure OpenAI Service Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/)**
- **[OpenAI Azure SDK for JavaScript](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/openai/openai)**

## The main features of OpenAI

- **[GPTs](https://platform.openai.com/docs/introduction/gpts)**: Generative Pre-trained Transformers. The GPTs provide text outputs in response to their inputs. The inputs for GPTs are called "prompts," and the outputs are called "completions."

- **[Embeddings](https://platform.openai.com/docs/introduction/embeddings)**: Embeddings are a numerical representation of text that can be used to measure the relationship between two pieces of text.

- **[Tokens](https://platform.openai.com/docs/introduction/tokens)**: Tokens represent sequences of characters that commonly occur in texts. For example: "Hello, my name is John" -> "Hello," ",", "my", "name", "is", "John".

* **[Tokenizer tool](https://platform.openai.com/tokenizer)**

[![openai-01.png](https://i.postimg.cc/0jXgV7F3/openai-01.png)](https://postimg.cc/rR4YmR8C)

## Entendendo o que é Azure OpenAI Service

O Azure OpenAI Service nos fornece acesso ao REST API para fazer uso dos modelos de linguagem do:

- **[GPT-4](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#gpt-4)**
- **[GPT-3.5-Turbo](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#gpt-35)**
- Modelos de Embeddings

Para entender mais sobre os modelos disponíveis no Azure OpenAI Service, poderá acessar através do link **[Azure OpenAI Service models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models)**

## Criando o recurso do Azure OpenAI Service

> O uso do Azure OpenAI é limitado. Assim sendo, se faz necessário solicitar o acesso ao serviço em **[Azure OpenAI Service](https://aka.ms/oai/access)**. Assim que você tiver a aprovação, poderá começar a usar e testar o serviço!

Assim que você tiver com o seu acesso aprovado, entre o no **[Portal Azure](https://azure.microsoft.com/)** e vamos criar o recurso do Azure OpenAI. Para isso, basta seguir os passos abaixo:

1. Clique no botão **Create a resource**

[![azure-openai-01.png](https://i.postimg.cc/L6k0TcgP/azure-openai-01.png)](https://postimg.cc/fJLKWgKW)

2. Na caixa de pesquisa, digite **Azure OpenAI** e depois clique em **Create**

[![azure-openai-02.png](https://i.postimg.cc/X7N9RmDd/azure-openai-02.png)](https://postimg.cc/xq7kHxQ1)

[![azure-openai-03.png](https://i.postimg.cc/fWqbbPRx/azure-openai-03.png)](https://postimg.cc/RqfmsXfF)

3. Na tela de criação do recurso, preencha os campos conforme abaixo:

[![azure-openai-04.png](https://i.postimg.cc/QdhNYZ4Z/azure-openai-04.png)](https://postimg.cc/gntPrQbg)

Observe que, no campo `Pricing tier`, você poderá testar o Azure OpenAI Service gratuitamente, porém, com algumas limitações. Para ter acesso a todas as funcionalidades, você deverá escolher um plano pago. Para mais informações em relação a preços, acesse o link **[Azure OpenAI Service pricing](https://azure.microsoft.com/pricing/details/cognitive-services/openai-service/)**.

4. Na aba **Network** escolha a opção: `All networks, including the internet, can access this resource.` e depois clique em **Next**.

5. Após todos os passos, clique no botão **Create** para criar o recurso.

[![azure-openai-05.png](https://i.postimg.cc/hPwbVMpm/azure-openai-05.png)](https://postimg.cc/QHQT3gLN)

6. Aguarde alguns minutos até que o recurso seja criado.

[![azure-openai-06.png](https://i.postimg.cc/KY45Twyt/azure-openai-06.png)](https://postimg.cc/1gh6hWXz)

Perfeito! Agora, vamos criar a aplicação Node.js para consumir o Azure OpenAI Service.

## Implantando um Modelo

Antes de começar a consumir o Azure OpenAI Service, você deverá fazer o deploy de um modelo. Para isso, basta seguir os passos abaixo:

1. Dentro do recurso recém criado, vá até **Model deployments** e clique no botão **Manage Deployments**.

[![azure-openai-07.png](https://i.postimg.cc/HnGKB50W/azure-openai-07.png)](https://postimg.cc/xJRtdXFB)

2. Após clicar nesse botão, você será direcionado para a página do **[Azure OpenAI Studio](https://oai.azure.com/portal)**. Depois clique no botão **Create new deployment**

[![azure-openai-08.png](https://i.postimg.cc/Gt7DbPMd/azure-openai-08.png)](https://postimg.cc/64Zq0ZJm)

> observe na imagem no canto superior direito que estamos criando justamente a implantação do modelo do recurso recém criado no Portal Azure.

3. Aparecerá uma janela chamada **Deploy model**. Nessa janela, você preencherá os seguintes campos:

- **select a model**: escolha o modelo que deseja implantar. Nesse caso, escolha o modelo `gpt-35-turbo`.

- **model version**: escolha a opção `0301 (default)`.

- **deployment name**: digite um nome para a implantação (que seja um nome único).

E finalmente clique no botão **Create**.

[![azure-openai-09.png](https://i.postimg.cc/CLC1CsC1/azure-openai-09.png)](https://postimg.cc/N5MBBTzq)

4. Aguarde alguns minutos até que a implantação seja criada.

[![azure-openai-10.png](https://i.postimg.cc/j59vRJMV/azure-openai-10.png)](https://postimg.cc/CBGbNdyJ)

Agora, estamos prontos para consumir o Azure OpenAI Service diretamente no código. Vamos criar agora a aplicação Node.js para consumir o Azure OpenAI Service.

## Criando a aplicação Node.js para consumir o Azure OpenAI Service

Para criar a aplicação Node.js, vamos utilizar o **[Visual Studio Code](https://code.visualstudio.com/)**. Caso você não tenha instalado, basta acessar o link e fazer o download.

Após instalar o Visual Studio Code, vamos criar a aplicação Node.js. Para isso, basta seguir os passos abaixo:

> o exemplo abaixo é relacionado ao **[Completion Code Sample]()**. Se desejar testar a aplicação, poderá fazer uso do Codespaces do repositório exemplo.

1. Crie uma pasta para o projeto e dentro da pasta, digite o comando:

```bash
npm init -y
```

O arquivo `package.json` será criado.

> observação: defini para usar esm (ECMAScript Modules) no projeto. Para isso, basta adicionar o campo `type` com o valor `module` no arquivo `package.json`.

<details><summary><b>package.json</b></summary>
<br/>

```json
{
  "name": "javascript",
  "version": "1.0.0",
  "description": "a simple code sample how to use Azure OpenAI Service with JavaScript",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "nodemon src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "javascript",
    "ai",
    "artificial intelligence",
    "azure-openai"
  ],
  "author": "Glaucia Lemos <Twitter: @glaucia_lemos86>",
  "license": "MIT",
  "dependencies": {
    "@azure/openai": "^1.0.0-beta.6",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

</details>
<br/>

2. Instale o pacote do Azure OpenAI Service:

```bash
npm install @azure/openai
```

3. Vamos instalar também os pacotes: `dotenv` e `nodemon`:

```bash
npm install dotenv --save
```

```bash
npm install nodemon --save-dev
```

4. Vá até o arquivo `package.json` e adicione o script abaixo:

```json
"scripts": {
    "start": "nodemon src/index.js"
  },
```

5. Crie um arquivo chamado `.env` e dentro do arquivo, digite o código abaixo:

```bash
AZURE_OPENAI_ENDPOINT="https://<resource name>.openai.azure.com"
AZURE_OPENAI_KEY="<azure api key>"
```

Para obter o `endpoint` e a `key`, basta acessar o recurso do Azure OpenAI Service criado no Portal Azure e depois clicar em **Keys and Endpoint**.

[![azure-openai-11.png](https://i.postimg.cc/ZKMSdf0p/azure-openai-11.png)](https://postimg.cc/nCBg8G4h)

6. Crie uma pasta chamada `src` e dentro da pasta, crie um arquivo chamado `index.js`. Dentro do arquivo `index.js`, digite o código abaixo:

<details><summary><b>src/index.js</b></summary>
<br/>

```javascript
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
    temperature: 0.25
  });

  for (const choice of result.choices) {
    console.log(choice.text);
  }
}

main().catch((err) => {
  console.error('The sample encountered an error:', err);
});
```
</details>
<br/>

Observe que no código que, colocamos o `deploymentName` que criamos no Azure AI Studio!

Outro ponto a ser mencionado é que no `result` definimos a quantidade de tokens que queremos que o modelo retorne. No caso, definimos para retornar `200` tokens. Mas, você poderá definir a quantidade que desejar.

E, o `temperature` é o que contralará as conclusões geradas. Quanto maior for esse valor, mais criativas serão as conclusões geradas. Enquanto que valores mais baixos retornará conclusões mais focados e determinísticos.

Se vocês desejarem entender o que as classes como: `OpenAIClient` e `AzureKeyCredential` fazem, basta acessar o link **[Azure OpenAI Service Node.js API Reference](https://learn.microsoft.com/en-us/javascript/api/%40azure/openai/?view=azure-node-preview)**.

1. Agora, basta executar o comando abaixo para executar a aplicação:

```bash
npm start
```

E, vejam o resultado:

[![gif-azureopenai-js.gif](https://i.postimg.cc/XvJ8R8nN/gif-azureopenai-js.gif)](https://postimg.cc/TKzgmnyB)

## 📚 Recursos Adicionais

Abaixo segue alguns recursos adicionais sobre o Azure OpenAI Service:

- **[Curso Grátis - Introdução à IA generativa](https://learn.microsoft.com/pt-br/training/paths/introduction-generative-ai/)**

- **[Curso Grátis - Conceitos básicos de IA do Microsoft Azure: Introdução à inteligência artificial](https://learn.microsoft.com/pt-br/training/paths/get-started-with-artificial-intelligence-on-azure/)**

- **[Azure OpenAI Service Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/)**

- **[Azure OpenAI Service Node.js API Reference](https://learn.microsoft.com/en-us/javascript/api/%40azure/openai/?view=azure-node-preview)**

- **[Azure OpenAI Service pricing](https://azure.microsoft.com/pricing/details/cognitive-services/openai-service/)**

- **[QuickStarts for JavaScript](https://learn.microsoft.com/en-us/azure/ai-services/openai/chatgpt-quickstart?source=recommendations&tabs=command-line&pivots=programming-language-javascript)**













