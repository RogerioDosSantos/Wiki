# AI Fundamentals

## Generative AI vs Traditional AI

Generative AI and Traditional AI are two different approaches to artificial intelligence, each with its own characteristics and applications.

### Supervised Learning vs Unsupervised Learning

Supervised learning is a type of machine learning where the model is trained on a labeled dataset, meaning that each input data point is paired with the correct output. The goal is for the model to learn the mapping from inputs to outputs so it can make accurate predictions on new, unseen data. Common algorithms used in supervised learning include decision trees, support vector machines, and neural networks.
Supervised is a great option when you know the data and the outcome you want to predict.

Unsupervised learning is a type of machine learning where the model is trained on an unlabeled dataset, meaning that the input data does not have associated output labels. The goal of unsupervised learning is to identify patterns, structures, or relationships within the data without prior knowledge of the outcomes. Common algorithms used in unsupervised learning include clustering and dimensionality reduction techniques.
Unsupervised is useful when you want to explore the data and find hidden patterns without specific labels.

## Deep Learning

Deep learning is a subset of machine learning that focuses on using artificial neural networks with multiple layers (deep neural networks) to model and understand complex patterns in data. Deep learning has been particularly successful in tasks such as image recognition, natural language processing, and speech recognition.

## Machine Learning Model

Model is a mathematical representation of a real-world process or system that is created using machine learning algorithms. It is trained on a dataset to learn patterns and relationships within the data, allowing it to make predictions or decisions based on new, unseen data.

Generative AI models are designed to create new content, such as images, text, or music, that is similar to the training data. They learn the underlying patterns and structures of the data and use that knowledge to generate novel outputs. Examples of generative AI models include Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs).

### Foundation Models

Foundation models are large-scale pre-trained models that serve as a starting point for various downstream tasks in machine learning. They are trained on massive datasets and can be fine-tuned for specific applications, such as natural language processing or computer vision. Examples of foundation models include BERT, GPT-3, and CLIP.

### Large Language Models (LLMs)

Large Language Models (LLMs) are a type of foundation model specifically designed for natural language processing tasks. They are trained on vast amounts of text data and can generate human-like text, understand context, and perform various language-related tasks. Examples of LLMs include OpenAI's GPT-3 and Google's BERT.

Data and Probability is what makes the model work. The more data you have, the better the model can learn and generalize to new situations. Probability helps the model make predictions based on the patterns it has learned from the data.

### Small Language Models (SLMs)

Small Language Models (SLMs) are more compact versions of large language models that are designed to be efficient and lightweight. They are typically trained on smaller datasets and have fewer parameters, making them suitable for deployment on devices with limited computational resources, such as mobile phones or edge devices. Examples of SLMs include DistilBERT and TinyBERT.

Why to use a SLM over a LLM:

- Resource Efficiency: SLMs require less computational power and memory, making them suitable for deployment on devices with limited resources.
- Faster Inference: SLMs can provide quicker response times for real-time applications due to their smaller size.
- Cost-Effectiveness: SLMs can be more cost-effective to deploy and maintain, especially in large-scale applications.
- Privacy and Security: SLMs can be deployed locally on devices, reducing the need to send sensitive data to cloud-based LLMs.
- Customization: SLMs can be fine-tuned for specific tasks or domains, allowing for more tailored solutions.

### Diffusion Models

Diffusion models are a class of generative models that learn to generate data by simulating a diffusion process. They work by gradually transforming a simple noise distribution into a complex data distribution through a series of steps. Diffusion models have been successfully applied to various tasks, including image generation, text generation, and audio synthesis.

After training, diffusion models can generate new samples by reversing the diffusion process, starting from noise and iteratively refining it to produce realistic outputs.

Dalle-2 and Stable Diffusion are examples of diffusion models used for image generation.

### Generative Pre-trained Transformer (GPT)

Generative Pre-trained Transformer (GPT) is a type of large language model developed by OpenAI. It is based on the transformer architecture and is pre-trained on vast amounts of text data to learn the patterns and structures of human language. GPT models can generate coherent and contextually relevant text, making them suitable for various natural language processing tasks, such as text completion, translation, and summarization.

The more data GPT is trained on, the better it can understand and generate human-like text. The model learns to predict the next word in a sentence based on the context provided by the preceding words, allowing it to generate fluent and coherent text.

## Predictive and Generative AI Systems

There is an overlap between predictive and generative AI systems, as both types of systems can use similar underlying technologies and techniques. For example, both predictive and generative AI systems can utilize machine learning algorithms, neural networks, and natural language processing techniques.

However, the primary focus and objectives of these systems differ:

- Predictive AI Systems: These systems are designed to analyze historical data and make predictions about future events or outcomes. They focus on forecasting, classification, and regression tasks. Examples include predicting customer churn, stock prices, or disease outbreaks.
- Generative AI Systems: These systems are designed to create new content, such as images, text, or music, that is similar to the training data. They focus on generating novel outputs based on learned patterns and structures. Examples include generating realistic images, writing articles, or composing music.

Predictive AI are less complex and require less computational power compared to generative AI systems, which often involve more sophisticated architectures and larger datasets.
Generative AI are more flexible and can be adapted to a wider range of applications, while predictive AI systems are typically more specialized and focused on specific tasks.

Predictive AI uses data that was already pre-classified (labeled data), while generative AI is trained on large datasets that are not be labeled, defining patterns and structures within the data.

Engineers might use predictive AI to test the accuracy of a generative AI model by comparing its outputs to known outcomes or classifications.

Foundational models can be much more easily retasked for different applications, while predictive models are often built for a specific task and may not generalize well to other domains.

## Prompt Engineering

Prompt engineering is the process of designing and refining prompts to effectively communicate with AI models, particularly large language models (LLMs) and generative AI systems. The goal of prompt engineering is to create prompts that elicit accurate, relevant, and contextually appropriate responses from the AI model.

## Generative Adversarial Networks (GANs)

Generative Adversarial Networks (GANs) are a class of generative models that consist of two neural networks, a generator and a discriminator, that are trained simultaneously in a competitive setting. The generator creates synthetic data samples, while the discriminator evaluates the authenticity of the samples, distinguishing between real and generated data.

GANs were adversarial because the two networks are in competition with each other. The generator aims to produce data that can fool the discriminator, while the discriminator strives to accurately identify real versus generated data. This adversarial process leads to the improvement of both networks over time.

### How GANs Work

1. The generator takes random noise as input and generates synthetic data samples.
1. The discriminator receives both real data samples from the training dataset and synthetic samples from the generator.
1. The discriminator evaluates the samples and provides feedback to the generator based on its ability to distinguish between real and fake data.
1. The generator uses this feedback to improve its ability to create realistic data samples.
1. The process is repeated iteratively, with both networks improving their performance over time.
1. The training continues until the generator produces data that is indistinguishable from real data, and the discriminator can no longer reliably differentiate between the two.

For asks that requires precise and accurate images, GANs are often the preferred choice due to their ability to generate high-quality and realistic images. GANs can capture intricate details and textures, making them suitable for applications such as image synthesis, super-resolution, and style transfer.
For tasks that require more abstract or creative images, diffusion models may be more suitable. Diffusion models can generate diverse and imaginative outputs, making them ideal for applications such as artistic image generation, text-to-image synthesis, and creative content creation.

## Self-Supervised Learning

Self-supervised learning is a type of machine learning that leverages unlabeled data to learn useful representations and features without the need for explicit labels. In self-supervised learning, the model is trained to predict certain aspects of the input data based on other parts of the data, effectively creating its own supervision signal.
Self-supervised learning is particularly useful in scenarios where labeled data is scarce or expensive to obtain, as it allows models to learn from large amounts of unlabeled data. Common techniques used in self-supervised learning include contrastive learning, masked language modeling, and autoencoding.

They are used in various applications, such as natural language processing, computer vision, and speech recognition, to improve model performance and generalization.

Purple hat in a yellow dog is an example of a prompt that could be used in prompt engineering to generate an image using a generative AI model. The prompt provides specific details about the desired image, including the color and type of hat (purple hat) and the color and type of animal (yellow dog). By providing clear and concise instructions, the prompt helps guide the AI model to generate an image that matches the user's expectations.

## Autoencoders

Autoencoders are a type of neural network used for unsupervised learning and dimensionality reduction. They consist of an encoder network that compresses the input data into a lower-dimensional representation (latent space) and a decoder network that reconstructs the original input data from the compressed representation. The goal of autoencoders is to learn an efficient encoding of the data while minimizing the reconstruction error.


### Variational Autoencoders (VAEs)

Variational Autoencoders (VAEs) are a type of generative model that combines principles from autoencoders and variational inference. VAEs consist of an encoder network that maps input data to a latent space and a decoder network that reconstructs the input data from the latent representation. The key idea behind VAEs is to learn a probabilistic mapping between the input data and the latent space, allowing for the generation of new samples by sampling from the latent distribution.

#### How VAEs Work

1. The encoder network takes input data and maps it to a latent space, producing a mean and variance for each dimension of the latent representation.
1. A latent vector is sampled from the learned distribution using the reparameterization trick, which allows for backpropagation during training.
1. The decoder network takes the sampled latent vector and reconstructs the input data.
1. The model is trained to minimize the reconstruction loss (the difference between the original input and the reconstructed output) and the Kullback-Leibler (KL) divergence (which encourages the learned latent distribution to be close to a prior distribution, typically a standard normal distribution).
1. The training continues until the model learns to generate realistic data samples from the latent space.
1. After training, new samples can be generated by sampling from the latent distribution and passing the sampled vectors through the decoder network.

A main challenge when training VAEs is balancing the trade-off between reconstruction quality and latent space regularization. If the KL divergence term is too heavily weighted, the model may prioritize learning a smooth latent space at the expense of reconstruction quality, leading to blurry or unrealistic outputs. Conversely, if the reconstruction loss is prioritized, the model may overfit to the training data and fail to learn a meaningful latent representation.

Anomaly detection is a common application of VAEs, where the model learns to reconstruct normal data patterns and can identify anomalies based on high reconstruction errors. VAEs can also be used for image generation, data compression, and representation learning.

## Building a Generative AI Model

Building a generative AI model involves several key steps, from data collection to model deployment. Here is a high-level overview of the process:

Foundation model: This model will be trained on unsupervised data.
Architecture selection: Choose an appropriate architecture for the generative model, such as GANs, VAEs, or diffusion models, based on the specific application and data characteristics.
Training: Train the generative model using the prepared dataset, optimizing the model's parameters to minimize the loss function and improve the quality of generated outputs.

The foundational model will have inference capabilities. Inference is the process of using a trained machine learning model to make predictions or generate outputs based on new, unseen data. In the context of generative AI models, inference involves feeding input data (such as random noise or a prompt) into the trained model and obtaining generated outputs (such as images, text, or audio).
Inference is costly to train but cheap to run.

## Inferencing 

Inferencing is the process of using a trained machine learning model to make predictions or generate outputs based on new, unseen data. In the context of generative AI models, inferencing involves feeding input data (such as random noise or a prompt) into the trained model and obtaining generated outputs (such as images, text, or audio).

## Augmentation Techniques

### Retrieval-Augmented Generation (RAG)

Retrieval-Augmented Generation (RAG) is a technique that combines the strengths of retrieval-based models and generative models to improve the quality and relevance of generated content. In RAG, a retrieval model is used to fetch relevant information from a large corpus or knowledge base based on a given input query. This retrieved information is then used as context for a generative model, which produces the final output.

### Contextual Augmented Generation (CAG)

Contextual Augmented Generation (CAG) is a technique that enhances the capabilities of generative models by incorporating additional context or information into the generation process. In CAG, the generative model is provided with relevant context, such as user preferences, historical data, or external knowledge, to guide the generation of content.

While RAG focuses on retrieving relevant information from a corpus to inform the generation process, CAG emphasizes the use of contextual information to shape and influence the generated content. Both techniques aim to improve the quality and relevance of generated outputs, but they do so through different mechanisms.

### Fine-Tuning

Fine-tuning is the process of taking a pre-trained machine learning model and adapting it to a specific task or dataset by continuing the training process on the new data. Fine-tuning leverages the knowledge and features learned by the pre-trained model, allowing it to quickly adapt to the new task with relatively little additional training.

## Agents

Agents are autonomous software programs that can perform tasks, make decisions, and interact with their environment to achieve specific goals. In the context of artificial intelligence and machine learning, agents can be designed to learn from data, adapt to changing conditions, and improve their performance over time.
AI Agents or Agentic AI are AI systems that can operate autonomously, make decisions, and perform tasks without human intervention. These agents are designed to learn from their environment, adapt to new situations, and achieve specific goals.
Agents needs to be smarter enough to review the answers until the same are precise enough to fulfill the task.

## Context Windows

LLMs have a limit to the amount of text they can process at one time, known as the context window. The context window defines the maximum number of tokens (words or subwords) that the model can consider when generating a response. If the input text exceeds the context window size, the model may truncate or ignore parts of the input, potentially leading to incomplete or less accurate responses.

The more you talk the less context you have. The less context you have the less accurate the answer will be.

This can make awkward hallucinations more likely.

## Traceable decisions making

Generative AI (GenAI) can be destructive if it generates incorrect or misleading information, especially in critical applications such as healthcare, finance, or legal domains. To mitigate these risks, it is essential to implement traceable decision-making processes that allow users to understand how and why a GenAI model arrived at a particular output.

Transparency on how are we using GenAI is key to build trust and ensure accountability.

Bias in GenAI can arise from various sources, including biased training data, model architecture, and the way prompts are designed. To address bias in GenAI, it is crucial to:

Be open and fair when using GenAI.

## Halucinations liabilities

Hallucinations in generative AI refer to instances where the model produces outputs that are not grounded in reality or are factually incorrect. These hallucinations can occur due to various reasons, such as limitations in the training data, model architecture, or the inherent uncertainty in generative processes.

Make sure that unsupervised data that the system uses are filled with valid and accurate information.

Do not use LLM for experts advices.

## Copyright

Generative AI models are typically trained on large datasets that may include copyrighted material. The use of copyrighted content in training data can raise legal and ethical concerns, particularly if the generated outputs closely resemble or replicate the original copyrighted works.

To address copyright issues in generative AI, it is essential to:

- Use publicly available or licensed datasets for training.
- Implement mechanisms to detect and prevent the generation of copyrighted content.
- Provide proper attribution when using or sharing generated content that may be derived from copyrighted works.
- Stay informed about evolving copyright laws and regulations related to AI-generated content.

### Fair Use

Fair use is a legal doctrine that allows limited use of copyrighted material without obtaining permission from the copyright holder, under certain conditions. Fair use is determined based on four factors:

Under current law in the US, trainning AI models are considered fair use.

If is legal does not mean is ethical.

## Mass Data Collection and Privacy

Generative AI models often require large amounts of data for training, which can raise concerns about mass data collection and privacy. Collecting and using personal or sensitive data without proper consent can lead to ethical and legal issues.

## Expertise death expiral

The syste can be trainned on data created by experts many years ago.
The model can reduce the amount of experts needed, but by doing so, no more new data will be created by experts.
Retraining the model becomes less relevant as the data used to train the model becomes outdated.

The model will eventually become obsolete as the knowledge it was trained on becomes outdated or irrelevant.
This is like if you freeze the knowledge of the world at a certain point in time and never update it.

Think about experts as a treasure resource.


