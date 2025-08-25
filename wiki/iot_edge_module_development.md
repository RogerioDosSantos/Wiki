# IoT-Edge Module Development 

## Requirements 

- [Prepare the a developer machine using Visual Studio Code to develop and debug modules for Azure IoT Edge](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-vs-code-develop-module)

## Azure IoT EdgeHub Dev Tool 

The [Azure IoT EdgeHub Dev Tool](https://github.com/Azure/iotedgehubdev) provide a local development experience with a simulator for creating, developing, testing, running, and debugging Azure IoT Edge modules and solutions.

The following table compares the steps needed to run the solution on the IoT Edge Runtime and iotedgehubdev tool: 

![](http://tinyurl.com/y4rqvxkd)

### Installation

- Install [Docker CE (18.02.0+)](https://www.docker.com/products/container-runtime) and [Docker compose (1.20.0+)](https://docs.docker.com/compose/install/#install-compose)
- Install [Python (2.7/3.5+) and Pip](https://www.python.org/)
- Install iotedgehubdev:

```sh
# Install iotedgehubdev
pip install --upgrade iotedgehubdev
```

**Important Note**

Please make sure there is no *Azure IoT Edge runtime* running on the same machine with *iotedgehubdev* since they require the same ports.

### Setup  

To setup the *iotedgehubdev* you need to create a device in the [IoT-Hub](https://portal.azure.com) and get the connection string for it:

![](http://tinyurl.com/y5s9ezsj) 

![](http://tinyurl.com/yxbl34tl)

![](http://tinyurl.com/y5orr5r6)

![](http://tinyurl.com/y677bepj)

```sh
# Setup an device in the *IoT-Hub* using the *connection string*
iotedgehubdev setup -c "<edge_device_connection_string>"
```

![](http://tinyurl.com/y3wca3ja)

### Start / Stop an IoT-Edge solution in simulator

```sh
# Start Simulator
iotedgehubdev start -d <path_to_deployment_manifest>

# Stop Simulator
iotedgehubdev stop
```

## Create .Net Core Edge Module from sketch

- Create a project and add packages

```sh
# Create .Net Core console application
dotnet new console 

# Add Packages Required for Edge Module Implementation
## MqttTransportSettings 
dotnet add package Microsoft.Azure.Devices.Client
dotnet add package Microsoft.Extensions.Configuration
dotnet add package Microsoft.Extensions.Configuration.Abstractions
dotnet add package Microsoft.Extensions.Configuration.Binder 
dotnet add package Microsoft.Extensions.Configuration.EnvironmentVariables 
dotnet add package Microsoft.Extensions.Configuration.FileExtensions
dotnet add package Microsoft.Extensions.Configuration.Json
## For AssemblyLoadContext
dotnet add package System.Runtime.Loader
```

- Change the project file (.csproj) to add the *AzureIoTEdgeModule* capability:

```xml
<Project Sdk="Microsoft.NET.Sdk">
... 
  <ItemGroup>
    <ProjectCapability Include="AzureIoTEdgeModule"/>
  </ItemGroup>
...
</Project>
```

This will allow your project to be recognized as an *IoT Edge Module*.

- Change the *Program.cs* (Entrypoint) to have the following code representing a simple module:

```cs
using Microsoft.Azure.Devices.Client;
using Microsoft.Azure.Devices.Client.Transport.Mqtt;
using System;
using System.Runtime.Loader;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace edge_module
{
    class Program
    {
        static int counter;

        static void Main(string[] args)
        {
            Init().Wait();

            // Wait until the app unloads or is cancelled
            var cts = new CancellationTokenSource();
            AssemblyLoadContext.Default.Unloading += (ctx) => cts.Cancel();
            Console.CancelKeyPress += (sender, cpe) => cts.Cancel();
            WhenCancelled(cts.Token).Wait();
        }

        /// <summary>
        /// Initializes the ModuleClient and sets up the callback to receive
        /// messages containing temperature information
        /// </summary>
        static async Task Init()
        {
            MqttTransportSettings mqttSetting = new MqttTransportSettings(TransportType.Mqtt_Tcp_Only);
            ITransportSettings[] settings = { mqttSetting };

            // Open a connection to the Edge runtime
            ModuleClient ioTHubModuleClient = await ModuleClient.CreateFromEnvironmentAsync(settings);
            await ioTHubModuleClient.OpenAsync();
            Console.WriteLine("IoT Hub module client initialized.");

            // Register callback to be called when a message is received by the module
            await ioTHubModuleClient.SetInputMessageHandlerAsync("input1", PipeMessage, ioTHubModuleClient);
        }

        /// <summary>
        /// Handles cleanup operations when app is cancelled or unloads
        /// </summary>
        public static Task WhenCancelled(CancellationToken cancellationToken)
        {
            var tcs = new TaskCompletionSource<bool>();
            cancellationToken.Register(s => ((TaskCompletionSource<bool>)s).SetResult(true), tcs);
            return tcs.Task;
        }

        /// <summary>
        /// This method is called whenever the module is sent a message from the EdgeHub. 
        /// It just pipe the messages without any change.
        /// It prints all the incoming messages.
        /// </summary>
        static async Task<MessageResponse> PipeMessage(Message message, object userContext)
        {
            int counterValue = Interlocked.Increment(ref counter);

            var moduleClient = userContext as ModuleClient;
            if (moduleClient == null)
            {
                throw new InvalidOperationException("UserContext doesn't contain " + "expected values");
            }

            byte[] messageBytes = message.GetBytes();
            string messageString = Encoding.UTF8.GetString(messageBytes);
            Console.WriteLine($"Received message: {counterValue}, Body: [{messageString}]");

            if (!string.IsNullOrEmpty(messageString))
            {
                var pipeMessage = new Message(messageBytes);
                foreach (var prop in message.Properties)
                {
                    pipeMessage.Properties.Add(prop.Key, prop.Value);
                }
                await moduleClient.SendEventAsync("output1", pipeMessage);
                Console.WriteLine("Received message sent");
            }
            return MessageResponse.Completed;
        }
    }
}
```

## Using Visual Studio 2019 to debug an Edge Module

- Create a new *IoTEdge Config Project* 

![](http://tinyurl.com/y336ustm) 

![](http://tinyurl.com/yxouyrv8)

- Skip the creation of a new module since we will associate one that already exist 

![](http://tinyurl.com/y4psnt48)

- Ensure that your *Edge Module Project (.vcproj)* has the *AzureIoTEdgeModule* capability

![](http://tinyurl.com/y3yro4m8)

- Add your *Edge Module* as a *module* of your *Edge Config Project*

![](http://tinyurl.com/yy5an5jq)

- Get a connection string for a device configured in the *IoT-Hub* that you would like to use for your debugging session:

![](http://tinyurl.com/y5khvrf6)
 
- Set the *Edge Device Connection String* into the *Edge Config Project*:

![](http://tinyurl.com/y6obrl5r)

This will make the *Visual Studio* to configure the *iotedgehubdev* with the following configuration:

`iotedgehubdev setup -c <device_connection_string>`

- Build the *Edge Config Project*:

![](http://tinyurl.com/y4lg8ek6)

This will make the *Visual Studio* to configure the *iotedgehubdev* with the following configuration: 

`iotedgehubdev start -d "<edge_config_project_dir>\config\deployment_for_local_debug.json"`

- Launch your *Edge Module Project* as *Console application*:

![](http://tinyurl.com/y24unl27)

This will make the *Visual Studio* to start the *iotedgehubdev* with the following command: 

`iotedgehubdev start -i "input1"`

**Note**: If you do not start your *Edge Module Project* as *Console application* (E.g.: Start it as *IISExpress* configuration), *Visual Studio* will not start the *iotedgehubdev* and an *exception* will be thrown when you try to register the `"input1"` using the *ioTHubModuleClient*. 

**Note**: If you registered to other messages input, after the *iotedgehubdev* is started by *Visual Studio*, you can add the input desired with the following command:

`iotedgehubdev start -i <input_name>`

## References 

- [Azure IoT EdgeHub Dev Tool (Git Repository)](https://github.com/Azure/iotedgehubdev)
- [Use Visual Studio Code to develop and debug modules for Azure IoT Edge](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-vs-code-develop-module)
- [Use Visual Studio 2019 to develop and debug modules for Azure IoT Edge](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-visual-studio-develop-module)
