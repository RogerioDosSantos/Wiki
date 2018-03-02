# IoT-Edge

Azure IoT Edge is an Internet of Things (IoT) service that builds on top of IoT Hub.

It basically allow you to deploy your application from the Cloud to a IoT-Edge machine. 

An IoT-Edge machine is a machine that has a IoT-Edge runtime module on it.

## Commands

`pip install -U azure-iot-edge-runtime-ctl` : Install the IoT-Edge runtime module

`iotedgectl setup --connection-string "<device_connection_string>" --auto-cert-gen-force-no-passwords`: Setup the IoT-Edge runtime linking to an Azure device. The default configuration will be located at `/etc/azure-iot-edge/config.json`

`iotedgectl start` Start the IoT-Edge agent with the default configuration located at `/etc/azure-iot-edge/config.json`

`iotedgectl update`: Update the current container. You can use this command if you want to force the update configuration in the device

`docker logs -f <module_name>`: Allow to know the messages being sent by a module

`iotedgectl login --address <your container registry address> --username <username> --password <password>`: Add the registry credentials to Edge runtime.

## Preparing an IoT-Edge Device

```sh
# Pre-requirements
sudo apt-get install python-pip
# Install Docker
# Follow Docker Tutorial

# Install and start the IoT Edge runtime
sudo pip install -U azure-iot-edge-runtime-ctl
sudo iotedgectl setup --connection-string "{device connection string}" --auto-cert-gen-force-no-passwords
sudo iotedgectl start
```

At this point you should be able to see the IoT Edge agent is running as a module

```sh
sudo docker ps
```

Now you can deploy the module from the Azure Portal




## References

[Microsoft Documentation]( https://docs.microsoft.com/en-us/azure/iot-edge/ )

[How to Simulate an edge device on Linux]( https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-simulate-device-linux )

