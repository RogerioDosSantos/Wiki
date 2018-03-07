# .Net Core

## Commands

`dotnet new console` : Create a new console application project

`dotnet restore` : Calls into NuGet (.NET package manager) to restore the tree of dependencies. The *.csproj* project file is analyzed to get the dependencies. Note: Starting with .NET Core 2.0, you don't have to run dotnet restore because it's run implicitly by all commands, such as dotnet build and dotnet run, that require a restore to occur.

`dotnet run` : Calls dotnet build to ensure that the build targets have been built, and then calls dotnet `<assembly.dll>` to run the target application.

`dotnet build` : Compile the project

`dotnet <dotnet_assembly_dll>` : Run an .Net assembly dll.

`dotnet build --runtime <platform></platform>` : Build the assembly for a specific platform. `E.g.: dotnet build --runtime ubuntu.16.04-x64`



