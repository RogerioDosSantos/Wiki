# Nuget 

[NuGet](https://www.nuget.org/) is the package manager for .NET. The NuGet client tools provide the ability to produce and consume packages. 

## How-to 

### Connect to a Nuget Package in the Azure DevOps 

- Click in artifacts on the bottom of the left nav in the azure portal 

![](http://tinyurl.com/y3nl9pqu)

- Click connect to feed: 

![](http://tinyurl.com/y24a8hxw)


### Provide Content with your NuGet package 

Content are files that will appear in the project of the consumer of your package. This is very utile to deliver configuration files with your packages or certificates that your package uses. 

To add a file as a *content* in the package, change the *Build Action* property of the file to be *Content*:

![](http://tinyurl.com/y3ulnzga)

## References

- [File Build Actions](https://docs.microsoft.com/en-us/visualstudio/ide/build-actions?view=vs-2019)
