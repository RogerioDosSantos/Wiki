# SignalR 

[ASP.NET SignalR](https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr) is a library for *ASP.NET* developers that simplifies the process of adding *real-time web functionality* to applications. *Real-time web functionality* is the ability to have *server code* push content to connected *clients* instantly as it becomes available, rather than having the *server* wait for a *client* to request new data.

*SignalR* can be used to add any sort of "real-time" web functionality to your *ASP.NET application*. 

*SignalR* is an abstraction of the *Web Sockets* and others *Web Real Time* technologies.

## SignalR Hub 

The *SignalR Hub* lives on the *Server* side and it is responsible to distribute the information received by one *Client* to the other *Clients*. 

You can define if the *SignalR Hub* will send the processing result to all *Clients* connected to it (`Clients.All.doWork()`) or if will return the processing result only to the *caller Client* (`Clients.Caller.doWork()`)

## Transport Layer 

Today *SignalR* has 03 *communication transports types*:

- *Web Sockets* 
- *Server-Sent Events*
- *Long Pooling* 

If order shown above was in priority of use. In case the *Web Sockets* cannot be used, the *SignalR framework* will try to use *Server-Sent Events* and so forth.

### Protocol

The *SignalR protocol* is a protocol for *two way RPC* over any *Message-based transport* there are 02 protocols that can be used:

- JSON (Text based - Better for troubleshoot)
- MessagePack (Binary - Better for performance. The message size becomes around 60% of the JSON message size)

## References 

- [Introduction to SignalR](https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr)

