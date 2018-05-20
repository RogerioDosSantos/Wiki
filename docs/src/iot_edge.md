# IoT-Edge

Azure IoT Edge is an Internet of Things (IoT) service that builds on top of IoT Hub.

It basically allow you to deploy your application from the Cloud to a IoT-Edge machine. 

An IoT-Edge machine is a machine that has a IoT-Edge runtime module on it.

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

`docker rm $(docker ps -a -q)` : Remove all docker containers

`docker rmi $(docker images -a -q)`: Remove all docker images

`docker login -u <registry_user> -p <password> <registry_url>`:  Allow docker to login on the Azure registry

`docker image prune` : Clean old docker images

`docker volume prune`: Clean old volumes

`docker system prune`: Clean all old images and volumes

`docker system prune -a`: Clean all containers

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


## References

[Microsoft Documentation]( https://docs.microsoft.com/en-us/azure/iot-edge/ )

[How to Simulate an edge device on Linux]( https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-simulate-device-linux )

### Important

[Azure IoT CLI]( https://github.com/Azure/azure-cli ) - CLI to work with Azure 

[Azure IoT CLI extension]( https://github.com/Azure/azure-iot-cli-extension ) - CLI to work with Edge devices

[Azure IoT CLI extension Commands]( https://github.com/Azure/azure-iot-cli-extension/wiki/Commands ) - CLI Commands


[Azure IoT SDK]( https://github.com/Azure/azure-iot-sdks ) - It allow to edit the Twins

[Azure IoT SDK C]( https://github.com/Azure/azure-iot-sdk-c/tree/modules-preview ) - It allow to edit the Twins (C SDK)

[IoTEdge DEV]( https://github.com/jonbgallant/azure-iot-edge-dev-tool )



