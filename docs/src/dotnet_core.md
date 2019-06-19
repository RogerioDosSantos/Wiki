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
# Create a new console application project
dotnet new console 

# Create a new ASP.NET Core Web API project
dotnet new webapi 
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




