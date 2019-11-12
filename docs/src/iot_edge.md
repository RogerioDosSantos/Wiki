# IoT-Edge

Azure IoT Edge is an Internet of Things (IoT) service that builds on top of IoT Hub.

It basically allow you to deploy your application from the Cloud to a IoT-Edge machine. 

An IoT-Edge machine is a machine that has a IoT-Edge runtime module on it.


## Edge Device - Installation / Configuration

### Run Linux Container in Windows Machine 

- Ensure that you are using *Windows 10 Anniversary update (build 14393)* or newer.
- Ensure that you are running *Powershell* as *Administrator*
- Ensure that you have *Powershell (AMD64)* session. To veriry it you can run the following command:

```ps 
# Return the Powershell session (x86 or AMD64) 
(Get-Process -Id $PID).StartInfo.EnvironmentVariables["PROCESSOR_ARCHITECTURE"]
```
- Execute the *Deploy-IoTEdge* from *Microsoft Website Script*
The Deploy-IoTEdge does the following:
    - Checks that your Windows machine is on a supported version
    - Turns on the containers feature
    - Downloads the moby runtime (which is not used for Linux containers) 
    - Downloads IoT Edge runtime

```ps 
. {Invoke-WebRequest -useb aka.ms/iotedge-win} | Invoke-Expression; Deploy-IoTEdge -ContainerOs Linux
```

- Configure the IoT Edge runtime on the machine

```ps 
. {Invoke-WebRequest -useb aka.ms/iotedge-win} | Invoke-Expression; Initialize-IoTEdge -ContainerOs Linux`
```

You will be requested to enter the *DeviceConnectionString* which can be retrieved in the [IoTHub Portal](https://portal.azure.com):

![](http://tinyurl.com/yxtsy5bf)

![](http://tinyurl.com/y6yy7o8a)

**Note**: The device connection string takes the following format, and should not include quotation marks: `HostName={IoT hub name}.azure-devices.net;DeviceId={device name};SharedAccessKey={key}`

- Verify if the installation was successful

```ps 
# Get the status of the IoT Edge service
Get-Service iotedge

# List the running modules 
iotedge list
```

![](http://tinyurl.com/yxmsycxq)

## Uninstalling Azure IoT Edge 

From an elevated command prompt:

```ps 
# Uninstall Azure IoT Edge 
Uninstall-IoTEdge
```

![](http://tinyurl.com/y2fwkol7)


## Troubleshooting Azure IoT Edge

```ps 
# Execute standard check on the current Azure IoT Edge installation and connectivity
iotedge check
```

![](http://tinyurl.com/y3ruk522)

## How to use docker cli into a moby runtime

```shell
# List the available images in the moby engine
docker -H npipe:////./pipe/iotedge_moby_engine images

# Docker uses the following socket by default:
# unix:///var/run/docker.sock
```

## Commands

`pip install -U azure-iot-edge-runtime-ctl` : Install the IoT-Edge runtime module

`pip install azure-iot-edge-runtime-ctl==1.0.0rc19`: Install a specific version of the iotedgectl

`iotedgectl setup --connection-string "<device_connection_string>" --auto-cert-gen-force-no-passwords`: Setup the IoT-Edge runtime linking to an Azure device. The default configuration will be located at `/etc/azure-iot-edge/config.json`

`iotedgectl start` Start the IoT-Edge agent with the default configuration located at `/etc/azure-iot-edge/config.json`

`iotedgectl --verbose DEBUG start`: Start the application with additional logs.

`iotedgectl update`: Update the current container. You can use this command if you want to force the update configuration in the device

`iotedgectl status`: Provides the status of the iotedgectl

`docker logs -f <module_name>`: Allow to know the messages being sent by a module

`iotedgectl login --address <your container registry address> --username <username> --password <password>`: Add the registry credentials to Edge runtime.

`az iot hub module-twin update --device-id jong1 --hub-name jongiothub1 --module-id filtermodule --set properties.desired.TemperatureThreshold=22` : E.g.: `az iot hub module-twin update --device-id jong1 --hub-name jongiothub1 --module-id filtermodule --set properties.desired.TemperatureThreshold=22`

## How IoTEdge Launch the Containers

``` sh
docker pull iotedgemodule01.azurecr.io/filtermodule:latest
docker create --name filterModule iotedgemodule01.azurecr.io/filtermodule:latest
docker start filterModule
```

## Preparing an IoT-Edge Device

```sh
# Pre-requirements
sudo apt-get install python-pip
# Install Docker
# Follow Docker Tutorial

# Install and start the IoT Edge runtime
sudo pip install -U azure-iot-edge-runtime-ctl

## Setup device configuration
sudo iotedgectl setup --connection-string "{device connection string}" --auto-cert-gen-force-no-passwords

## Add Image Registry Credentials
sudo iotedgectl login --address <your container registry address> --username <username> --password <password></password></username></your>

## Start IoTEdge
sudo iotedgectl start
```

At this point you should be able to see the IoT Edge agent is running as a module

```sh
sudo docker ps
```

Now you can deploy the module from the Azure Portal

## IoTEdge DEV

### Commands

`npm install -g edge-explorer@latest --registry http://edgenpm.southcentralus.cloudapp.azure.com/` : Install IoTEdge explorer

`docker run -it -v <iot_edge_project_dir>:/home/iotedge -v /var/run/docker.sock:/var/run/docker.sock jongallant/iotedgedev`: Load the IoTEdge DEV environment.

`iotedgedev solution <edgesolution1>`: Create a solution

`iotedgedev deploy`: Build and Deploy Modules

`iotedgedev build --deploy`: Build and Deploy Modules

`iotedgedev start` : Setup and Start the IoT Edge Runtime. Note: The start command will apply the /.config/runtime.json file to your IoT Edge device

`iotedgedev monitor` : Monitor Messages

`iotedgedev stop`: Stops Edge Runtime. Calls iotedgectl stop.

`dotnet new -i Microsoft.Azure.IoT.Edge.Module` : Install the .NET Core Module Template

`dotnet new aziotedgemodule -o modules/<module_name>` : Create a new module using the template

### .env 

`IOTHUB_CONNECTION_STRING` : IoTHub connection string

`DEVICE_CONNECTION_STRING` : Device connection string

`ACTIVE_MODULES` : Define modules that will be compiled

`ACTIVE_DOCKER_DIRS` : Define each dockerfile that will be used to build the image

`CONTAINER_REGISTRY_SERVER` : Define what container will be used

`ACTIVE_DOCKER_ARCH` : Define what platform will be compiled


## Azure Digital Twins

A *digital twin* is a representation of physical environment and associated devices in the *digital space*. It does not only represent a device but also represent the environmental information that can affect the device. It organize domain-specific consepts into *models*. 

The *models* are then situaded into within a *spacial intelligence graph*

Such concepts faithfully model the relationships and interactions between people, spaces, and devices.

Together, these predefined Digital Twins object models make up an ontology. A smart building's ontology describes regions, venues, floors, offices, zones, conference rooms, and focus rooms. An energy grid ontology describes various power stations, substations, energy resources, and customers. With Digital Twins object models and ontologies, diverse scenarios and needs can be customized.

With Digital Twins object models and an ontology in place, you can populate a spatial graph. Spatial graphs are virtual representations of the many relationships between spaces, devices, and people that are relevant to an IoT solution. This diagram shows an example of a spatial graph that uses a smart building's ontology.

![](http://tinyurl.com/y4alr2vz) 

*Microsoft* aim to have a collection of *Digital Twins* that can be reused among several projects and domains and create mechanisms where the *Digital Twins properties* can be easily update in the *Digital space* with real data collected.

![](http://tinyurl.com/y6aco4st)

Since the *Digital Twins* will represent the full environment, it will have an hierarchy. Each level of the hierarchy can be customized in terms of security, region, customer, type, etc. You can also customize the *Digital Twin* to define how will it callback your business logic depending on the configuration.

![](http://tinyurl.com/yycqn9hp)

In terms of migration, since those *Twin hierarchy* is being used by several customers, *Microsoft* is trying to get a common whay to migrate existing customers digital representation to the *Microsoft Twins model*, however at this point they does not have a solution for it.


### Digital Twins object Models 

The model is represented into an *YAML* file.

Digital Twins object models support these main categories of objects:

- **Spaces**: Spaces are virtual or physical locations, for example, Tenant, Customer, Region, and Venue.

- **Devices**: Devices are virtual or physical pieces of equipment, for example, AwesomeCompany Device and Raspberry Pi 3.

- **Sensors**: Sensors are objects that detect events, for example, AwesomeCompany Temperature Sensor and AwesomeCompany Presence Sensor.

- **Users**: Users identify occupants and their characteristics.

Other categories of objects are:

- **Resources**: Resources are attached to a space and typically represent Azure resources to be used by objects in the spatial graph, for example, IoTHub.

- **Blobs**: Blobs are attached to objects (such as spaces, devices, sensors, and users). They're used as files with mime type and metadata, for example, maps, pictures, and manuals.

- **Extended types**: Extended types are extensible enumerations that augment entities with specific characteristics, for example SpaceType and SpaceSubtype.

- **Ontologies**: Ontologies represent a set of extended types, for example, Default, Building, BACnet, and EnergyGrid.

- **Property keys and values**: Property keys and values are custom characteristics of spaces, devices, sensors, and users. They can be used along with built-in characteristics, for example, DeltaProcessingRefreshTime as key and 10 as value.

- **Roles**: Roles are sets of permissions assigned to users and devices in the spatial graph, for example, Space Administrator, User Administrator, and Device Administrator.

- **Role assignments**: Role assignments are the association between a role and an object in the spatial graph. For example, a user or a service principal can be granted permission to manage a space in the spatial graph.

- **Security key stores**: Security key stores provide the security keys for all devices in the hierarchy under a given space object to allow the device to securely communicate with Digital Twins.

- **User-defined functions**: User functions (UDFs) allow customizable sensor telemetry processing within the spatial graph. For example, a UDF can:
    - Set a sensor value.
    - Perform custom logic based on sensor readings, and set the output to a space.
    - Attach metadata to a space.
    - Send notifications when predefined conditions are met. Currently, UDFs can be written in JavaScript.

- **Matchers**: Matchers are objects that determine which UDFs are executed for a given telemetry message.

- **Endpoints**: Endpoints are the locations where telemetry messages and Digital Twins events can be routed, for example, Event Hub, Service Bus, and Event Grid.

### Overview of the APIs

All *Digital Twins APIs* are *REST* based *APIs* and therefore can be called from any language. 

You can only create at the moment one *IoTHub* instance for each *Digital Twin* instance. This limitation will be in the release preview, however when we go into the GA (general availability), it will be possible to have several *IoTHub* instances.

In the *Digital Twin* you have the following definitions:

- name: Name of the representation (Representation ID) 
- type: Type of the representation (Representation Group)
- resources: List of Resources that will be used by the Representation (E.g.: IoTHub) ??
- spaces: Hierarchical definitions of 

## References

[Microsoft Documentation]( https://docs.microsoft.com/en-us/azure/iot-edge/ )

[How to Simulate an edge device on Linux]( https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-simulate-device-linux )

[Azure Digital Twins video](https://www.youtube.com/watch?v=TvN_NxpgyzQ)

[Azure Digital Twins Documentation](https://docs.microsoft.com/en-us/azure/digital-twins/)

### Important

[Azure IoT CLI]( https://github.com/Azure/azure-cli ) - CLI to work with Azure 

[Azure IoT CLI extension]( https://github.com/Azure/azure-iot-cli-extension ) - CLI to work with Edge devices

[Azure IoT CLI extension Commands]( https://github.com/Azure/azure-iot-cli-extension/wiki/Commands ) - CLI Commands


[Azure IoT SDK]( https://github.com/Azure/azure-iot-sdks ) - It allow to edit the Twins

[Azure IoT SDK C]( https://github.com/Azure/azure-iot-sdk-c/tree/modules-preview ) - It allow to edit the Twins (C SDK)

[IoTEdge DEV]( https://github.com/jonbgallant/azure-iot-edge-dev-tool )



