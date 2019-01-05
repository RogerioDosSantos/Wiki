# Visual Studio

## Migrations

- [To Visual Studio 2017 platform tools]( ./migrating_to_visual_studio_2017_platform_toolset.html )

## How-to

### Visual Studio - Remote Debugging Docker Containers

#### Preparing the Debug Container

You need to have the *Visual Studio Remote Debugging Tools* available inside your container. To propare your container to have the needed tools you can compile your docker image with the following:

```DockerFile
# Get pre-prepared image that contains the Visual Studio Remote Debugging Tools
FROM rogersantos/windows_core_debugger:windows as debugger

#### Your Image Configuration ####

# Install / Configure Debugging Tools
COPY --from=debugger ["C:/workspace/vs_2017_remote_debugger", "C:/vs_2017_remote_debugger"]

#TODO(Roger) - Change the configuration so we no longer need to run the Remote Debug Tool command.
RUN powershell -Command $ErrorActionPreference = 'Stop' ; \
	echo '*** Configuring Debugging' ; \
	echo '*** Configuring Debugging - DONE'
```

#### Preparing Visual Studio

Change your Visual Studio project remote debug configuration as follow:

![](http://tinyurl.com/y7yb3s5a)

#### Launching the Debug Container

The *Visual Studio Remote Debugging* uses the port *4021* for *x64* processes and port *4022* for *x32* processes.

```shell
# Start docker with the proper parameters for debug.
docker run --name "debug_container" \
  --rm -it \
	-v <your_local_bin_folder>:<container_bin_folder> \
  -p 4021:4021 -p 4022:4022 \
  rogersantos\debug_container:windows
```

#### Start a Debug Session

On the container start the *Visual Studio Remote Debugging tool* as follow:

```ps
# Start the Visual Studio Remote Debugging tool
C:\vs_2017_remote_debugger\x86\msvsmon.exe /noauth /anyuser /silent /nostatus /noclrwarn /nosecuritywarn /nofirewallwarn /nowowwarn /timeout:36000
```

On the *Visual Studio* start your application using the *Remote Windows Debugger*:

![](http://tinyurl.com/y8ucfjmn)



