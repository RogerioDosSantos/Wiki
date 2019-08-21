# Rabbit MQ 

[RabbitMQ](https://www.rabbitmq.com/) is a open source lightweight *message broker* easy to deploy on premises and in the cloud. It supports multiple messaging protocols. RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements.

*RabbitMQ* ise the implementation of the *broker* of the *Advanced Message Protocol (AMQP)* protocol (*Publisher* >> *Broker* >> *Consumer*)

## Type of Messages

- `Direct`: Send a message to the *queue* where the *routing* is the same as the *bind key* of the *queue*

- `Fanout`: Send a message to all the *queues*

- `Topip`: Send a message to the *queue* where the *routing* is partially the same as the *bind key* of the *queue* (E.g.: *queue bind key* = topic11 and *message routing key* = topic1 will be send to the *queue bind key* = topic11)

- `Header`: Uses the *message header* steady of the *routing key* 

- `Nameless (Default on *RabbitMQ*)`: This exchange compares the *messaging routing key* with the *queue name* and not the *queue bind key*

## References 

- [RabbitMQ Website](https://www.rabbitmq.com/)
- [Introduction to RabbitMQ Video](https://www.youtube.com/watch?v=deG25y_r6OY)
- [RabbitMQ Best Practices Video](https://www.youtube.com/watch?v=HzPOQsMWrGQ)
