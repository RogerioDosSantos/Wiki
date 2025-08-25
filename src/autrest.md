# Autorest 

[Autorest](https://github.com/Azure/autorest) is a tool that generates client libraries for accessing RESTful web services. The generation is done automatically from the *Swagger json file* and it supports generate clients for several languages including: JS, C#, Powershell, Python, Java, TypeScript, Go, Ruby

```sh
# Generate C# client for Swagger specification version 3.0.6274 
autorest --version=3.0.6274 --csharp --input-file:<swagger_json_file_path>
```

## Reference 

- [GitHub repository](https://github.com/Azure/autorest)
- [Introduction Video](https://azure.microsoft.com/en-us/resources/videos/inside-autorest-with-david-justice/)
