# HTTP.sys

[Hypertext Transfer Protocol Stack (HTTP.sys)](https://docs.microsoft.com/en-us/iis/get-started/introduction-to-iis/introduction-to-iis-architecture#hypertext-transfer-protocol-stack-httpsys) is a kernel mode device driver in Windows that passess *HTTP* requests to the *IIS* or any other *web server*. 

HTTP.sys is a web server for ASP.NET Core that only runs on Windows. 

- HTTP.sys supports the following features:
    - Windows Authentication
    - Port sharing
    - HTTPS with SNI
    - HTTP/2 over TLS (Windows 10 or later)
    - Direct file transmission
    - Response caching
    - WebSockets (Windows 8 or later)

- Supported Windows versions:
    - Windows 7 or later
    - Windows Server 2008 R2 or later

![](http://tinyurl.com/y49brh76)

## References

[HTTP.sys web server implementation in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/servers/httpsys?view=aspnetcore-2.2)


