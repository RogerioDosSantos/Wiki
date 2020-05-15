# .Net Core

## Commands

`dotnet new console` : Create a new console application project

`dotnet new webapi` : Create a new ASP.NET Core Web API project

`dotnet restore` : Calls into NuGet (.NET package manager) to restore the tree of dependencies. The *.csproj* project file is analyzed to get the dependencies. Note: Starting with .NET Core 2.0, you don't have to run dotnet restore because it's run implicitly by all commands, such as dotnet build and dotnet run, that require a restore to occur.

`dotnet run` : Calls dotnet build to ensure that the build targets have been built, and then calls dotnet `<assembly.dll>` to run the target application.

`dotnet build` : Compile the project

`dotnet <dotnet_assembly_dll>` : Run an .Net assembly dll.

`dotnet build --runtime <platform></platform>` : Build the assembly for a specific platform. `E.g.: dotnet build --runtime ubuntu.16.04-x64`

`dotnet add package <package name>`: Add package to the project. E.g.: `dotnet add package System.IdentityModel.Tokens.Jwt`

## Installations

### .Net Core

```bash
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-xenial-prod xenial main" > /etc/apt/sources.list.d/dotnetdev.list'
sudo apt-get update
sudo apt-get install dotnet-sdk-2.0.2
```

## How-to 

### Create a new project

```sh 
# Create a class library project
dotnet new classlib 

# Create a new console application project
dotnet new console 

# Create a new ASP.NET Core Web API project
dotnet new webapi 

# Create a new XUnit Unity Test project
dotnet new xunit
```

### Create and Publish NuGet package

- Open your project file (.csproj) and add the following minimal properties inside the existing <PropertyGroup> tag

```xml 
<PackageId>package_name</PackageId>
<Version>1.0.0</Version>
<Authors>your_name</Authors>
<Company>your_company</Company>
```

You can add any [optional properties](https://docs.microsoft.com/en-us/dotnet/core/tools/csproj#nuget-metadata-properties) if desired 

- To build a NuGet package (a .nupkg file) from the project folder, run: 

```sh 
dotnet pack -c Release -o /workspace/stage/release
```

### NuGet Package - Add Local Folder as Packages Sources 

You can add additional folders to allow *NuGet* packages to be searched. This is usefull when you want to put local dependencies in your projects by using *Local NuGet packages*. 

To do it change your *<project_csproj>* file as following:

```xml
...
<PropertyGroup>
  ...
  <RestoreSources>$(RestoreSources);<desired_relative_folder>;https://api.nuget.org/v3/index.json</RestoreSources>
  ...
</PropertyGroup>
...
```

This technique will allow the following commands to be executed and get the packages locally:

```sh 
dotnet add package <package_name>
dotnet restore 
dotnet run
```

**Note:** During development, if you change the *NuGet* package but do not increment it's version, in both the project that produces the nupkg and in the project that consumes it, you'll need to clear your local packages cache before restoring again:

```sh
dotnet nuget locals all --clear
dotnet restore
```

You can also list the location of the nuget folders using the following command:

```sh
dotnet nuget locals all --list
```

### Set an output directory without the .Net platform being appended 

By default the *.Net Core Platform* (E.g.: *netcoreapp2.0*) is appended in the *output directory* independent of the configuration:

![](http://tinyurl.com/y3m5jo4c)

To disable it change the (csproj) file to add the following:

```xml
<PropertyGroup>
  ...
  <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>
  ...
</PropertyGroup>
```

### Create and Consuming a JWT

- Add the dependencies to the project

```sh
# Provide support for creating, serializing and validating JSON Web Tokens
dotnet add package System.IdentityModel.Tokens.Jwt
```

### Copy folder to the output directory during the build

The example below copy the folder *resources* located in the same directory than the *(csproj)* file to the *build output* directory.

```xml
<ItemGroup>
  ...
  <None Include="resources\**" CopyToOutputDirectory="PreserveNewest"/>
  ...
</ItemGroup>
```

### Proxy - Set Global Default Proxy for an Application

By default, a *.Net* application, running on *Windows*, uses the *default proxy* which is the same configured in the *Internet Explorer*. However, there are some *OSs* as for example the *Windows servercore* where the *Internet Explorer* is not used. 

For this reason, it is a good practice to check is the *Proxy Environment Variable (http_proxy, https_proxy)* is set and if so, add a *default proxy* for your *.Net Application*. This can be done using the code below: 

```c#
string proxyUrl = Environment.GetEnvironmentVariable("http_proxy");
proxyUrl = String.IsNullOrEmpty(proxyUrl) ? Environment.GetEnvironmentVariable("https_proxy") : proxyUrl;
if (!String.IsNullOrEmpty(proxyUrl))
    System.Net.WebRequest.DefaultWebProxy = new WebProxy(proxyUrl);
```

### QA - Run test dll from Nuget Package

```shell
#/usr/bin/env bash

nuget::RunTestDllFromPackage()
{
  # Create test project
  mkdir -p ./test
  cd ./test
  dotnet new console
  dotnet add package dummy_qa
  dotnet publish ./test.csproj -o ./win64 --self-contained true -c Release -r win7-x64
  cd ./win64
  dotnet vstest ./dummy_qa.dll 
}

nuget::RunTestDllFromPackage
```

### HTTP Client - Make asynchronous HTTP requests without using dependency injection 

There are several available *HTTP Clients* on the *.Net Framework*, however [the one that is recomended for asynchronous call and therefore the most used is the *HTTPClient*](https://visualstudiomagazine.com/articles/2017/06/01/calling-web-services.aspx). However, you can have [several socket problems](https://aspnetmonsters.com/2016/08/2016-08-27-httpclientwrong/) if you do not properly intanciate the *HTTPClient* the right way.

It is recomended to use the [IHttpClientFactory](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/http-requests) since it controls the *sockets lifetime*, *DNS* renew, etc. for you. However, using the [IHttpClientFactory requires you to use dependency injection](https://github.com/dotnet/extensions/issues/1345). [An alternative to IHttpClientFactory without using dependency injection](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/http-requests?view=aspnetcore-3.1#alternatives-to-ihttpclientfactory) is shown in the code below: 

```c#
//TODO(Roger)
```

## Code Examples

### Fire and forget

![](http://tinyurl.com/txc8oe7)

### Task that is executed with timeout and can handle exceptions

![](http://tinyurl.com/sbx9mea)

### Publish and Packing Solutions - How to filter which projects can be published and packed

You can define if a Project in a Solution will be published or packaged adding the following items on the Project file:

```xml
<PropertyGroup>
  <IsPackable>false</IsPackable>
  <IsPublishable>false</IsPublishable >
</PropertyGroup>
```

## References 

- [Host .Net Core into a Native Application](https://github.com/dotnet/samples/tree/master/core/hosting)
- [Correcting Common Async/Await Mistakes in .NET - Brandon Minnick](https://www.youtube.com/watch?v=J0mcYVxJEl0)
- [Writing high performance code in .NET - Bart De Smet](https://www.youtube.com/watch?v=fI1XGVIQjkA&list=PLqP1vtrAMlCF_yJiZLGN79skxhHfPavPR&index=74&t=0s)
- [How to create pluggins](https://docs.microsoft.com/en-us/dotnet/core/tutorials/creating-app-with-plugin-support)
- [Create Dump using dotnet dump](https://docs.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-dump)



