#Serilog

[Serilog](https://serilog.net/) provides diagnostic logging to files, the console, and elsewhere. It is easy to set up, has a clean API, and is portable between recent .NET platforms.

Serilog is built with powerful structured event data in mind.

## Using Serilog into a .Net Core Application from sketch

- Create an application and add *Serilog* package on it:

```sh 
# Create .Net Core console application
dotnet new console 

# Add Serilog
dotnet add package Serilog
```
- Change the Main function as following:

```cs
using Serilog; 
public static void Main(string[] args)
{
  var log = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

  log.Information("Hello, Serilog!");
}
```

