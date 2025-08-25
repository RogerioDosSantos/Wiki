# DocFX 

[DocFX](https://dotnet.github.io/docfx/tutorial/docfx_getting_started.html) is an API documentation generator for .NET, which currently supports C#, VB and F#. It generates API reference documentation from triple-slash comments in your source code. It also allows you to use Markdown files to create additional topics such as tutorials and how-tos, and to customize the generated reference documentation. DocFX builds a static HTML website from your source code and Markdown files, which can be easily hosted on any web server (for example, github.io).

## Installation 

- Download [docfx zip file](https://github.com/dotnet/docfx/releases/tag/v2.56.7)
- Extract the contents 
- Add the extracted folder to PATH variable

## Configuration 

- *docfx.json*: Contains the configuration that allow to xxx 
- *toc.yml*: Contains the configuration that describes the structure of the files and the menu. You can have one file per folder.

## Build 

From the folder that contains the *docfx.json* file, you can run the following command: 

```powershell 
docfx build 
```

### Run 

From the folder that contains the *docfx.json* file, you can run the following command: 

```powershell 
docfx build --serve
```

Once the server is up, you can open the *Browser* and execute [http://localhost:8080](http://localhost:8080)

## References 

- [DocFX Website](https://dotnet.github.io/docfx/tutorial/docfx_getting_started.html)


