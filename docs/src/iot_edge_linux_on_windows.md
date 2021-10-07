# Azure IoT-Edge - Linux on Windows

## Installation

The procedure below describes the commands to execute an Microsoft IoT-Edge Linux on Windows installation. 

This procedure was successfully executed in an *Azure VM with Windows Server 2019 Version 1809 (OS Build: 17763.2183)*, with remote access accessed using bastion. 

### Launch Powershell x64 in Adminstrator mode

Hyper-V commands requires powershell x64. All commands on this instruction should run on powershell x64
 
### Install Hyper-V  

*Hyper-V* is a pre-requirement needed. You need *Hyper-V* installed and *Hyper-V virtual switch* configured

- Check if Hyper-V is installed. If not install it

To check if is installed:

```ps
Get-WindowsFeature -Name 'Hyper-V'
```

Install Command:

```ps
Install-WindowsFeature -Name Hyper-V -IncludeManagementTools -Restart
```
 
- Check if a Virtual Switch required by the Microsoft Installer is available. If not install and configure it

To check if is installed: 

```ps
Get-VMSwitch
```

Microsoft installer uses a Virtual Switch with the name *Default Switch* and of the type *Internal*. 

**Important**: Both name and types are mandatory otherwise the installer will fail.

Enable Virtual Switch  

```ps
New-VMSwitch -Name "Default Switch" -SwitchType Internal
```
 
Get the interface index

```ps
$defaultSwitchIndex = (Get-NetAdapter -Name '*Default Switch*').ifIndex
```

Using the interface index from previous step, get the IP address octet of the created switch network adapter.

```ps
$defaultSwitchIP = (Get-NetIPAddress -AddressFamily IPv4  -InterfaceIndex $defaultSwitchIndex).IPAddress
```

The *defaultSwitchIP* value will define the values of the *Gateway IP*, NAT IP, and the DHCP IP range

For example, if the *defaultSwitchIP* is 169.254.180.211, the following needs to be assigned on the Gateway IP, NAT IP, and DHCP IP range:
 
```ps
$defaultSwitchGatewayIP = "169.254.180.1"
$defaultSwitchNatIP = "169.254.180.0"
$dhcpStartIP = "169.254.180.100"
$dhcpEndIP = "169.254.180.200"
```

Set the new gateway IP address

```ps
New-NetIPAddress -IPAddress $defaultSwitchGatewayIP -PrefixLength 24 -InterfaceIndex $defaultSwitchIndex
```
 
Create a Network Address Translation (NAT) object that translates an internal network address to an external network.

```ps
New-NetNat -Name "Default Switch" -InternalIPInterfaceAddressPrefix ($defaultSwitchNatIP + "/24")
```
 
### Create DHCP Server
 
- Check if the DHCP Server feature is installed in the device. If not installed install and configure it

To check if the *DHCP* is installed you can run the following command:

```ps
Get-WindowsFeature -Name 'DHCP'
```
 
Install DHCP

```ps
Install-WindowsFeature -Name 'DHCP' -IncludeManagementTools
```
 
Add the DHCP Server to the default local security groups and restart the server

```ps
netsh dhcp add securitygroups
Restart-Service dhcpserver
```
 
Configure the DHCP Server scope

```ps
Add-DhcpServerV4Scope -Name "AzureIoTEdgeScope" -StartRange $dhcpStartIP -EndRange $dhcpEndIP -SubnetMask 255.255.255.0 -State Active
```
 
Assign the NAT object and gatewayIp to the DHCP server


```ps
Set-DhcpServerV4OptionValue -ScopeID $defaultSwitchNatIP -Router $defaultSwitchGatewayIP
Restart-service dhcpserver
```
 
### Installation and deployment of a virtual device
 
- Download and install Microsoft IoT-Edge for Linux on Windows

Download IoT Edge for Linux on Windows.

```ps
$msiPath = $([io.Path]::Combine($env:TEMP, 'AzureIoTEdge.msi'))
$ProgressPreference = 'SilentlyContinue'
Invoke-WebRequest "https://aka.ms/AzEflowMSI" -OutFile $msiPath
```
 
Install IoT Edge for Linux on Windows on your device

```ps
Start-Process -Wait msiexec -ArgumentList "/i","$([io.Path]::Combine($env:TEMP, 'AzureIoTEdge.msi'))","/qn"
```
 
Set the execution policy on the target device (LocalMachine) to AllSigned if it is not already

To check the execution policy 

```ps
Get-ExecutionPolicy -List
```

To set the execution policy

```ps
Set-ExecutionPolicy -ExecutionPolicy AllSigned -Force
```
 
Create the IoT-Edge VM for Linux on Windows deployment

```ps
Deploy-Eflow
```
 
- Manual provisioning using the IoTHub Virtual Device connection string
 
```ps
Provision-EflowVm -provisioningType ManualConnectionString -devConnString "<iothub_virtual_device_connection_string>"
```
 
### Test the solution
 
- Connect to the Linux VM that is running *Microsoft IoT-Edge* 

Note: This command only works on the regular powershell as administrator
 
```ps
Connect-EflowVm
```

From the VM you can use both *Microsoft IoT-Edge commands* and *Docker client commands* as the examples below: 

**Note**: You need to be run the commands *elevated*


```shell
# List the modules running 
sudo iotedge list 

# List the containers running 
sudo docker ps
```

## Hyper-V virtual switch options


- **External switch**: Linked to a physical card of the Hyper-V host and allows access to the network.
- **Internal switch**: Isolates the virtual machines but allows network switching between the Hyper-V host and the virtual machines.
- **Private Switch**: Completely isolates the network from virtual machines.

**Note**: Microsoft IoT-Edge installer today only supports the Internal switch option


## References

- [Install the Hyper-V role on Windows Server](https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/get-started/install-the-hyper-v-role-on-windows-server)
- [Azure IoT Edge for Linux on Windows virtual switch creation](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-create-virtual-switch?view=iotedge-2018-06)
- [Deploy DHCP Using Windows PowerShell](https://docs.microsoft.com/en-us/windows-server/networking/technologies/dhcp/dhcp-deploy-wps)
- [Install IoT-Edge Linux on Windows](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-install-iot-edge-on-windows?view=iotedge-2018-06&tabs=powershell#manual-provisioning-using-the-connection-string)
