# ngrok 

[ngrok](https://ngrok.com/) allow to route a public URL to your machine localhost. This tool can be very handy when executing tests 

## How-tos 

### Tunnel messages to your localhost 

- [Download ngrok](https://ngrok.com/download)
- Unzip the package and run ngrok.exe
- Create the tunnel using the command below:
 
```powershell
ngrok http <port_number> -host-header=localhost:<port_number>
```

## References 

- [ngrok Website](https://ngrok.com/)
