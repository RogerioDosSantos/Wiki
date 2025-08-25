# InduSoft Web Studio Tips and Tricks

`viewer.exe nosplash /ceemul /noprogressbar /ds1:localhost /dsp:1234 /url:"file://<application_path>"` : Command to start the Viewer in CE emulation mode pointing to an application.

## How-to

### Configure CEView to run in device without monitor

- Add the following entry on your *CEView.ini*

```ini
[OEM]
BlindDevice=1
```

### Configure IIS to run both ISSymbol and SMA

![](http://tinyurl.com/ybby4k2a)


### Change CEView Application manually

- Change the *CEApp.ini* file to point to the desired application.

```ini
[Application]
Configuration=C:\Users\iws\app\app.app
Directory=C:\Users\iws\app\
```

### SMA - Manually Start Studio Mobile Access

With the InduSoft runtime running (TCP/IP Task should be running), you can start the *Studio Mobile Access Task* manually using the following command:

```shell
#Start the Studio Mobile Task with an application located at C:\workspace\app\app.app
"c:\workspace\Bin\MobileAccessTask.exe" /port:4448 /s:false /project:"C:\workspace\app\app.app" /remoteport:1234
```

### SMA - Load a specific screen directly

```shell
# Go to the startup.sg screen directly
http://localhost:10080/sma/?screen=startup.sg

# Go to the startup.sg screen directly without requesting the user
http://localhost:10080/sma/?screen=startup.sg&guestuser=1
```

### Studio - Set an application to run as service from command line

```shell
# Go to the Indusoft Bin folder
cd <indudoft_installation_directory>\bin

# Create Service Configuration
StdSvcInst.exe -create /user "<user>" /password "<password>" /descr "<service_description>" /name "<service_name>" /startup "<Auto|Manual|Disabled>" /app "<app_file_path>" /service "<service_name>"

# Start Service
StdSvcInst.exe -start /name "<service_name>"

# Stop Service
StdSvcInst.exe -stop /name "<service_name>"

# Get Security
StdSvcInst.exe -getsecurity

# Get Register OPC Server (DA)
StdSvcInst.exe -regopcsvr

# Get Unregister OPC Server (DA)
StdSvcInst.exe -unregopcsvr

# Delete Service Configuration
StdSvcInst.exe -delete /name "<service_name>"
```

### License Server - Connect to the License Server WebAdmin

IndSoft supports you to connect to a license server (CodeMeter WebAdmin). 

You can connect to it using the following url:

`<license_server_ip>:22350` 

### Remote Debug - Studio Manager Runtime

- Remote Command: `C:\workspace\bin\Studio Manager.exe`
- Remote Command Arguments: `C:\workspace\bin\UniSoft32.dll C:\workspace\app\PCDemo.app /STARTUP`
- Working Directory: `C:\workspace\bin`
- Remote Server Name: `<server_ip>:4022`
- Connection: `Remote with no authentication`

### Remote Agent - Configure port 

By default the *Remote Agent (CEServer)* will connect using the port *4322*

### IoTView - Execute Runtime from command line 

```sh 
iotview <application_path> <log_verbosity>
```

### StADOSvr - Studio ADO Gateway - Configure port 

By default the *Studio ADO Gateway (StADOSvr)* uses the port 3997.

The example below launches the *Studio ADO Gateway* in the port 1002:

```sh 
# Start the Studio ADO Gateway to listen in the port 1002
StADOSvr.exe 1002
```

### LogWin - Remote LogWin (LogWinExt) - Configure Port

Inside the *InduSoft* product intallation *bin* folder, you will find the *LogWinExt* which is a *Remote Logwin* executable that allows you to communicate with any *InduSoft* runtime that is executing the *TCP/IP Server task*. 

The example below shows how you can launch to connect with the local host using the port *1234*

```sh
# Launch Remote Logwin to talk with the localhost
LogWinExt.exe /dsip:127.0.0.1 /dsport:1234
```


