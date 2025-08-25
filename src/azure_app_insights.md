# Azure Monitor (Application InSights)


Because *Microservices* are designed to be distributed, it is very hard to identify the point of failure if we do not have a way to monitor all the solution and the correlation among services.

![](http://tinyurl.com/tfmjxnz)

[Azure Monitor](https://azure.microsoft.com/en-us/services/monitor/) allows you to collect telemetry of sour application, infrastrucutre and network.

![](http://tinyurl.com/uejqmwf)

## Enabling Azure Monitor into a ASP .Net Core application to monitor multiple intances

### Install the *Application Insights Nugget Package*

```xml
<ItemGroup>
  <PackageReference Include="Microsoft.ApplicationInsights.AspNetCore" Version="2.12.0" />
</ItemGroup>
```

### Add AddApplicationInsightsTelemetry to the ConfigureServices method in your Startup class

```cpp
// This method gets called by the runtime. Use this method to add services to the container.
public void ConfigureServices(IServiceCollection services)
{
		...
		// The following line enables Application Insights telemetry collection.
		services.AddApplicationInsightsTelemetry();
		...
}
```

### Set up the instrumentation key

Although you can provide the instrumentation key as an argument to *AddApplicationInsightsTelemetry*, we recommend that you specify the instrumentation key in configuration. 

The following code sample shows how to specify an instrumentation key in *appsettings.json*. 

```json
{
	"ApplicationInsights": {
		"InstrumentationKey": "putinstrumentationkeyhere"
	},
	"Logging": {
		"LogLevel": {
			"Default": "Warning"
		}
	}
}
```

Alternatively, specify the instrumentation key in either of the following environment variables:

**APPINSIGHTS_INSTRUMENTATIONKEY**

**ApplicationInsights:InstrumentationKey**


## Reference

- [What can be done using Application InSights](https://channel9.msdn.com/Shows/On-NET/Analyzing-your-applications-with-Application-Insights)
- [How to properly add the Application Insights for ASP.NET Core applications](https://docs.microsoft.com/en-us/azure/azure-monitor/app/asp-net-core)
- [Application Map: Triage Distributed Applications](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-map)
