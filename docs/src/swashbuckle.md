# Swashbuckle

[Swashbuckle.AspNetCore](https://github.com/domaindrivendev/Swashbuckle.AspNetCore) is an open source project for generating Swagger documents for ASP.NET Core Web APIs.

There are three main components to Swashbuckle:

[Swashbuckle.AspNetCore.Swagger](https://www.nuget.org/packages/Swashbuckle.AspNetCore.Swagger/): a Swagger object model and middleware to expose SwaggerDocument objects as JSON endpoints.

[Swashbuckle.AspNetCore.SwaggerGen](https://www.nuget.org/packages/Swashbuckle.AspNetCore.SwaggerGen/): a Swagger generator that builds SwaggerDocument objects directly from your routes, controllers, and models. It's typically combined with the Swagger endpoint middleware to automatically expose Swagger JSON.

[Swashbuckle.AspNetCore.SwaggerUI](https://www.nuget.org/packages/Swashbuckle.AspNetCore.SwaggerUI/): an embedded version of the Swagger UI tool. It interprets Swagger JSON to build a rich, customizable experience for describing the web API functionality. It includes built-in test harnesses for the public methods.

## How-To

### Install and Configure Swashbuckle into a new project

```shell
# Create a new ASP.NET Core Web API application
dotnet new webapi

# Add Swashbuckle into your project
dotnet add <your_project>.csproj package Swashbuckle.AspNetCore
```

Change the *Startup.cs* to: 

```C#

... 
//Import the following namespace to use the Info class
using Swashbuckle.AspNetCore.Swagger;
...

// Add the Swagger generator to the services collection in the *Startup.ConfigureServices*
public void ConfigureServices(IServiceCollection services)
{
...
  // Register the Swagger generator, defining 1 or more Swagger documents
  services.AddSwaggerGen(c =>
  {
    c.SwaggerDoc("v1", new Info
    {
        Version = "v0.0.0",
        Title = "Your Application Title",
        // All Configuration below are optional
        Description = "Your Application Description",
        TermsOfService = "None",
        Contact = new Contact
        {
            Name = "Contact Name",
            Email = string.Empty,
            Url = "https://www.google.com/"
        },
        License = new License
        {
            Name = "MIT",
            Url = "https://opensource.org/licenses/MIT"
        }
    });
  });
... 
}

// Enable the middleware for serving the generated JSON document and the Swagger UI
public void Configure(IApplicationBuilder app)
{
    // Enable middleware to serve generated Swagger as a JSON endpoint.
    app.UseSwagger();
    // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
    // specifying the Swagger JSON endpoint.
    app.UseSwaggerUI(c =>
    {
        //Note: Use relative path to the swagger endpoint in this way the swagger page will always be reached independent if you are into a reverse proxy
        c.SwaggerEndpoint("../swagger/v1/swagger.json", "My API V1");
        c.RoutePrefix = "api-doc";
    });
    app.UseMvc();
}
```

### Enable XML Comments 

Change `<your_project>.csproj` to have the following:

```xml
<PropertyGroup>
  <GenerateDocumentationFile>true</GenerateDocumentationFile>
  <NoWarn>$(NoWarn);1591</NoWarn>
</PropertyGroup>
```

This creates the documentation file and suppresses the `CS1591: Missing XML comment for publicly visible type or member` warning

Change the `Startup.cs` file into the function `ConfigureServices` as following:

```C#
... 
using System.IO;
using System.Reflection;
... 

public void ConfigureServices(IServiceCollection services){
  ...
  services.AddSwaggerGen(c =>
  {
    ...
    // Set the comments path for the Swagger JSON and UI.
    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    c.IncludeXmlComments(xmlPath);
  });
  ...
}
```

### Serve the Swagger UI at the app's root

```C#
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    c.RoutePrefix = string.Empty;
});
```

## References

- [Getting Started with Swashbuckle](https://docs.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-2.2&tabs=netcore-cli)




