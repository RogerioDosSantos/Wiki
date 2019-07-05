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




## References 

- [Azure IoT EdgeHub Dev Tool (Git Repository)](https://github.com/Azure/iotedgehubdev)
- [Use Visual Studio Code to develop and debug modules for Azure IoT Edge](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-vs-code-develop-module)
- [Use Visual Studio 2019 to develop and debug modules for Azure IoT Edge](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-visual-studio-develop-module)
