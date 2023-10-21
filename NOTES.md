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

## Criando a aplicação Node.js para consumir o Azure OpenAI Service

Para criar a aplicação Node.js, vamos utilizar o **[Visual Studio Code](https://code.visualstudio.com/)**. Caso você não tenha instalado, basta acessar o link e fazer o download.

Após instalar o Visual Studio Code, vamos criar a aplicação Node.js. Para isso, basta seguir os passos abaixo:

> o exemplo abaixo é relacionado ao **[Completion Code Sample]()**

1.










