# Azure Machine Learning Development

## Narrow AI
Narrow AI, also known as Weak AI, refers to AI systems that are designed and trained for a specific task. Unlike General AI, which aims to understand and reason about the world like a human, Narrow AI focuses on a single domain or problem. Examples include image recognition, natural language processing, and recommendation systems. Azure Machine Learning provides tools and services to develop, train, and deploy Narrow AI models efficiently.

## General AI
General AI, or Strong AI, refers to AI systems that possess the ability to understand, learn, and apply knowledge across a wide range of tasks, similar to human intelligence. General AI can reason, plan, solve problems, and adapt to new situations without being specifically programmed for each task. While General AI remains a theoretical concept and has not yet been realized, Azure Machine Learning offers advanced capabilities that can contribute to the development of more sophisticated AI systems in the future.

## AI Benefits

- Time Efficiency: AI can automate repetitive tasks, allowing humans to focus on more complex and creative work.
- Cost Effective: AI can reduce operational costs by optimizing processes and improving productivity.
- Help make decisions: AI can analyze large datasets to provide insights and recommendations, aiding in better decision-making.
- Consept is scalable: AI systems can be scaled up or down based on demand, making them adaptable to various business needs.

## Machine Learning Problem Types

- Classification: Assigning data points to predefined categories based on their features. Example: Email spam detection.
- Regression: Predicting a continuous value based on input features. Example: House price prediction.
- Time Series Forecasting: Predicting future values based on historical data. Example: Stock price prediction.
- Anomaly Detection: Identifying unusual patterns or outliers in data. Example: Fraud detection in financial transactions.

## Supervised Learning

Supervised learning is a type of machine learning where the model is trained on a labeled dataset, meaning that each input data point is paired with the correct output. The goal is for the model to learn the mapping from inputs to outputs so it can make accurate predictions on new, unseen data. Common algorithms used in supervised learning include decision trees, support vector machines, and neural networks.

### Predictive Modeling

Predictive modeling involves using historical data to create a model that can predict future outcomes. In supervised learning, this typically involves training a model on a dataset with known outcomes and then using that model to make predictions on new data. Predictive modeling is commonly used in various applications, such as customer churn prediction, sales forecasting, and risk assessment.

### Classification

Classification is a supervised learning task where the goal is to assign input data points to one of several predefined categories or classes. The model learns from a labeled dataset, where each data point is associated with a specific class label. Common algorithms used for classification include logistic regression, decision trees, and support vector machines. Examples of classification tasks include email spam detection, image recognition, and sentiment analysis.

### Regression

Regression is a supervised learning task that involves predicting a continuous numerical value based on input features. The model learns from a labeled dataset, where each data point has an associated continuous output. Common algorithms used for regression include linear regression, polynomial regression, and decision trees. Examples of regression tasks include predicting house prices, stock prices, and sales forecasts.

## Unsupervised Learning

Unsupervised learning is a type of machine learning where the model is trained on an unlabeled dataset, meaning that the input data does not have associated output labels. The goal of unsupervised learning is to identify patterns, structures, or relationships within the data without prior knowledge of the outcomes. Common algorithms used in unsupervised learning include clustering and dimensionality reduction techniques.

### Clustering

Clustering is an unsupervised learning technique that involves grouping similar data points together based on their features. The goal is to identify natural clusters or patterns within the data without any predefined labels. Common clustering algorithms include K-means, hierarchical clustering, and DBSCAN. Clustering is often used in market segmentation, customer profiling, and anomaly detection.

### Association Rules

Association rules are a type of unsupervised learning technique used to discover interesting relationships or patterns between variables in large datasets. The goal is to identify rules that describe how the presence of certain items or features is associated with the presence of others. Common algorithms for generating association rules include the Apriori algorithm and the FP-Growth algorithm. Association rules are often used in market basket analysis, recommendation systems, and customer behavior analysis.

### Dimensionality Reduction

Dimensionality reduction is an unsupervised learning technique that involves reducing the number of features or variables in a dataset while retaining as much relevant information as possible. The goal is to simplify the data, improve model performance, and reduce computational complexity. Common dimensionality reduction techniques include Principal Component Analysis (PCA) and t-Distributed Stochastic Neighbor Embedding (t-SNE). Dimensionality reduction is often used in data visualization, noise reduction, and feature extraction.

## Supervised vs Unsupervised Learning

| Aspect               | Supervised Learning                          | Unsupervised Learning                        |
|----------------------|---------------------------------------------|---------------------------------------------|
| Definition            | Trained on labeled data                      | Trained on unlabeled data                   |
| Goal                  | Predict outcomes for new data               | Find patterns or structures in data        |
| Data Requirements     | Requires labeled data                        | Does not require labeled data               |
| Common Algorithms     | Linear Regression, Decision Trees, SVM     | K-means, Hierarchical Clustering, PCA      |
| Use Cases             | Fraud detection, image classification       | Customer segmentation, anomaly detection    |

## Semi-Supervised Learning

Semi-supervised learning is a type of machine learning that combines elements of both supervised and unsupervised learning. In semi-supervised learning, the model is trained on a dataset that contains a small amount of labeled data along with a larger amount of unlabeled data. The goal is to leverage the limited labeled data to improve the model's performance while also utilizing the unlabeled data to discover patterns and structures within the data.

## Reinforcement Learning

Reinforcement learning is a type of machine learning where an agent learns to make decisions by interacting with an environment. The agent receives feedback in the form of rewards or penalties based on its actions, and the goal is to learn a policy that maximizes the cumulative reward over time. Reinforcement learning is commonly used in applications such as game playing, robotics, and autonomous systems.

The main challenge in reinforcement learning is balancing exploration (trying new actions to discover their effects) and exploitation (choosing actions that are known to yield high rewards). Common algorithms used in reinforcement learning include Q-learning, Deep Q-Networks (DQN), and policy gradient methods.

## Deep Learning

Deep learning is a subset of machine learning that focuses on using artificial neural networks with multiple layers (deep neural networks) to model and understand complex patterns in data. Deep learning has been particularly successful in tasks such as image recognition, natural language processing, and speech recognition.

Artificial neural networks are inspired by the structure and function of the human brain, consisting of interconnected nodes (neurons) that process and transmit information. Deep learning models can automatically learn hierarchical representations of data, allowing them to capture intricate relationships and features.

It is consistent of 03 layers:

1. Input Layer: The input layer receives the raw data and passes it to the next layer for processing.
1. Hidden Layers: Hidden layers perform computations and transformations on the input data. Deep learning models typically have multiple hidden layers, allowing them to learn complex features and representations.
1. Output Layer: The output layer produces the final predictions or classifications based on the learned features from the hidden layers.

### History of Deep Learning

- 1943: Warren McCulloch and Walter Pitts proposed the first mathematical model of a neural network.
- 1957: Frank Rosenblatt developed the Perceptron, an early neural network model for binary classification.
- 1960: Bernard Widrow and Ted Hoff introduced the ADALINE (Adaptive Linear Neuron) model.
- 1962: The backpropagation algorithm was developed by Paul Werbos, allowing for the training of multi-layer neural networks.
- 1965: Alexey Ivakhnenko and Valentin Lapa introduced the Group Method of Data Handling (GMDH), an early form of deep learning.
- 1970: Kunihiko Fukushima developed the Neocognitron, a hierarchical, multilayered artificial neural network.
- 2008: GPUs were first used to accelerate deep learning computations.
- 2016: DeepMind's AlphaGo defeated the world champion Go player, marking a significant milestone in AI.

### Key Areas to Consider

- Data Storage: Efficient storage solutions for large datasets, such as cloud storage or distributed file systems.
- Computational Power: Access to powerful hardware, such as GPUs or TPUs, to handle the intensive computations required for training deep learning models.
- Training Time: Strategies to reduce training time, such as using pre-trained models, transfer learning, or distributed training.

## Machine Learning vs Deep Learning

Machine learning uses statistical techniques to enable computers to learn from data and make predictions or decisions without being explicitly programmed. It encompasses a wide range of algorithms, including decision trees, support vector machines, and clustering techniques.
Deep learning is a subset of machine learning that focuses on using artificial neural networks with multiple layers to model and understand complex patterns in data. Deep learning has been particularly successful in tasks such as image recognition, natural language processing, and speech recognition.

In machine learning we must provide features manually, while in deep learning the model can automatically learn hierarchical representations of data.

Computationally, deep learning requires significantly more power due to the complexity of neural networks and the large amounts of data involved.

## Clustering

Is a type of unsupervised learning that involves grouping a set of objects in such a way that objects in the same group (or cluster) are more similar to each other than to those in other groups. Clustering is commonly used in various applications, such as market segmentation, customer profiling, and anomaly detection.
Taking a set of objects and grouping them into subsets or clusters based on their similarities. The goal is to ensure that objects within the same cluster are more similar to each other than to those in other clusters.

Type of Clustering:
- Exclusive Clustering: Each object belongs to only one cluster. Example: K-means clustering.
- Overlapping Clustering: Objects can belong to multiple clusters. Example: Fuzzy C-means clustering.
- Hierarchical Clustering: Clusters are organized in a tree-like structure, allowing for nested clusters. Example: Agglomerative clustering.

- K-means Clustering Algorithm:
1. Initialize K centroids randomly.
2. Assign each data point to the nearest centroid.
3. Update centroids by calculating the mean of assigned points.
4. Repeat steps 2-3 until convergence (no change in assignments).

- Fuzzy k-means Clustering Algorithm:
1. Initialize K cluster centers randomly.
2. Assign membership levels to each data point for all clusters.
3. Update cluster centers by calculating the weighted mean of assigned points.
4. Repeat steps 2-3 until convergence (no change in membership levels).

- Hierarchical Clustering Algorithm:
1. Compute the similarity or distance matrix between all data points.
2. Merge the two closest clusters.
3. Update the distance matrix.
4. Repeat steps 2-3 until all points are in a single cluster or a stopping criterion is met.

## Classification

Process of predicting the category or class label of a given input based on its features. The goal is to assign the input to one of several predefined classes based on patterns learned from a labeled training dataset.

- Binary Classification: Involves two classes (e.g., spam vs. not spam).
- Multi-class Classification: Involves more than two classes (e.g., classifying types of animals).
- Multi-label Classification: Each input can belong to multiple classes simultaneously (e.g., tagging images with multiple labels).
- Imbalanced Classification: One class is significantly more frequent than others, requiring special handling (e.g., fraud detection).

### Logistic Regression

Logistic regression is a statistical model used for binary classification tasks. It predicts the probability of an input belonging to a particular class by modeling the relationship between the input features and the log-odds of the outcome. The output is transformed using the logistic (sigmoid) function to produce a probability value between 0 and 1.

### K-Nearest Neighbors (KNN)

K-Nearest Neighbors (KNN) is a simple and intuitive classification algorithm that assigns a class label to a new data point based on the majority class of its K nearest neighbors in the feature space. The distance between data points is typically measured using Euclidean distance or other distance metrics.

### Decision Trees

Decision trees are a type of supervised learning algorithm used for both classification and regression tasks. They work by recursively splitting the data into subsets based on feature values, creating a tree-like structure where each internal node represents a decision based on a feature, each branch represents the outcome of that decision, and each leaf node represents a class label or continuous value.

### Random Forest

Random Forest is an ensemble learning method that combines multiple decision trees to improve classification or regression performance. Each tree in the forest is trained on a random subset of the data and features, and the final prediction is made by aggregating the predictions of all individual trees (e.g., majority voting for classification or averaging for regression). Random Forest helps to reduce overfitting and increase model robustness.

## Machine Learning Lifecycle

The machine learning lifecycle consists of several stages that guide the development and deployment of machine learning models. The key stages include:

1. Define the Problem Statement: Clearly articulate the business problem or objective that the machine learning model aims to address.
1. Analyze and Preprocess Data: Collect, clean, and preprocess the data to ensure it is suitable for modeling. This may involve handling missing values, outliers, and feature scaling.
1. Spliting the Data Set: Divide the dataset into training, validation, and test sets to evaluate model performance and prevent overfitting.
1. Chose the Right Algorithm (Baseline Model): Select an appropriate machine learning algorithm based on the problem type (e.g., classification, regression) and data characteristics.
1. Training the Baseline Model: Train an initial model using the training dataset to establish a performance baseline.
1. Chose the Evaluation Metrics: Select relevant metrics to evaluate model performance, such as accuracy, precision, recall, F1-score, or mean squared error.
1. Refining the Data Set: Iterate on data preprocessing and feature engineering to improve model performance.

## Azure Machine Learning Tool

Azure Machine Learning is a cloud-based service provided by Microsoft that enables data scientists and developers to build, train, and deploy machine learning models at scale. It offers a comprehensive set of tools and services to streamline the machine learning lifecycle, from data preparation to model deployment.

### Who is it for?

- Data Scientists: Azure Machine Learning provides a collaborative environment for data scientists to develop and experiment with machine learning models using popular frameworks like TensorFlow, PyTorch, and Scikit-learn.
- Application Developers: Developers can integrate machine learning models into their applications using Azure Machine Learning's APIs and SDKs, enabling intelligent features and capabilities.
- DevOps Engineers: Azure Machine Learning supports continuous integration and deployment (CI/CD) pipelines, allowing DevOps engineers to automate the deployment and management of machine learning models in production environments.

## MLOps

MLOps, or Machine Learning Operations, is a set of practices and tools that aim to streamline and automate the deployment, monitoring, and management of machine learning models in production environments. MLOps combines principles from DevOps and machine learning to ensure that models are reliable, scalable, and maintainable throughout their lifecycle

![](./resources/resources/ai_azure_machine_learning_development/ai_azure_machine_learning_development_line_192.png)

1. Exploratory Data Analysis (EDA): Analyze and visualize the data to understand its characteristics and identify patterns or anomalies.
1. Data Preparation: Clean, preprocess, and transform the data to make it suitable for modeling.
1. Build Model: Develop and train machine learning models using appropriate algorithms and techniques.
1. Test App: Validate the model's performance using a separate test dataset to ensure it generalizes well to unseen data.
1. Deploy Model: Deploy the trained model to a production environment where it can be accessed by applications or users.
1. Monitor Model: Continuously monitor the model's performance in production to detect any issues or degradation over time.

### MLOps Teams Roles

- Project Manager: Oversees the project, coordinates between teams, and ensures that milestones are met.
- Business Analyst: Gathers requirements, defines the problem statement, and translates business needs into technical specifications.
- Data Scientist: Analyzes data, develops machine learning models, and evaluates their performance.
- Developer: Implements the machine learning models into applications and ensures seamless integration.
- Data Engineer: Manages data pipelines, ensures data quality, and prepares data for modeling.
- DevOps Engineer: Automates deployment processes, manages infrastructure, and ensures continuous integration and delivery (CI/CD) of machine learning models.

