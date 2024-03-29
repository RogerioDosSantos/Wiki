# Visual Studio

## Migrations

- [To Visual Studio 2017 platform tools]( ./migrating_to_visual_studio_2017_platform_toolset.html )

## How-to

### Visual Studio - Remote Debugging Docker Containers

#### Preparing the Debug Container

You need to have the *Visual Studio Remote Debugging Tools* available inside your container. To propare your container to have the needed tools you can compile your docker image with the following:

```DockerFile
# Get pre-prepared image that contains the Visual Studio Remote Debugging Tools
FROM rogersantos/windows_core_debugger:windows AS debugger

FROM <your_image_configuration>

# Install / Configure Debugging Tools
COPY --from=debugger ["C:/workspace/vs_2017_remote_debugger", "C:/vs_2017_remote_debugger"]
COPY --from=debugger ["C:/workspace/windows_10_debuggers", "C:/windows_10_debuggers"]
RUN powershell -Command $ErrorActionPreference = 'Stop' ; \
  echo '*** Configuring Debugging' ; \
  echo '- Enable Assembly Binding so IIS can inform missing dependencies' ; \
  Set-ItemProperty -Path HKLM:\Software\Microsoft\Fusion -Name EnableLog -Value 1 ; \
  echo '- Enable GFlags in so we can monitor IIS Executable (w3wp) dependencies' ; \
  C:\windows_10_debuggers\x64\gflags.exe -i w3wp +sls ; \
  C:\windows_10_debuggers\x64\gflags.exe -i '<additional_executable_name_you_want_to_monitor>' +sls ; \
echo '*** Configuring Debugging - DONE'
## Launch the remote execute as soon docker runs
ENTRYPOINT C:\vs_2017_remote_debugger\x86\msvsmon.exe /noauth /anyuser /silent /nostatus /noclrwarn /nosecuritywarn /nofirewallwarn /nowowwarn /timeout:36000
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

### Build C/C++ code on the command line

To build your application using command line and *Visual Studio Build Tools*, you need to select the *architecture (toolchain)* you want to build. This can be done using [vcvarsall.bat](https://docs.microsoft.com/en-us/cpp/build/building-on-the-command-line?view=vs-2017#developer-command-files-and-locations), located into `C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\VC\Auxiliary\Build`. 

```ps
cd "C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\VC\Auxiliary\Build"

# Prepare shell to compile for x86
./vcvarsall.bat "x86"

# Prepare shell to compile for x64
./vcvarsall.bat "x64"

# Prepare shell to compile for ARM
./vcvarsall.bat "x86_arm"

# Prepare shell to compile for ARM64
./vcvarsall.bat "x86_arm64"

# Prepare shell to compile for x86 using the Visual Studio 2015 toolset (v14.0)
./vcvarsall.bat -vcvars_ver=14.0
```

### Connect to Database Using Visual Studio

To connect to a *Database* from *Visual Studio*, follow the steps below:

- On the *Server Explorer* add a new connection:

![](https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/visual_studio/connect_database_add_connection.png)

- Chose the *Data Source* you want to connect. Example to connect with an Azure SQL Server: 

![](https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/visual_studio/connect_database_datasource.png)

- Configure the connection: 

![](https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/visual_studio/connect_database_datasource_configuration.png)

- Once connected you are ready to execut SQL commands: 

![](https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/visual_studio/connect_database_sql_query.png)


### Get environment variable while debuggin C# code 

- On the *Imadiate Window* type:

```cs
Environment.GetEnvironmentVariables()
```

![](http://tinyurl.com/y3pr8cex)

### Add *Secrets* configured in the *appsettings.json* in the *secrets.json*

If you have a configuration that is a *Secret* that you will be using during your development (*User Secrets*). It is a best practice to do not keep it in any of your *appsettings.json*. *Visual Studio* allows you to store *User Secrets*. 

Imagine that you have the following configuration in your *appsettings.json*: 

```json
{
 "KeyVault": {
    "AzureClientId": "MyClientID",
    "AzureClientSecret": "<use_secrets_json_to_configure_this_settings>",
  }
}
```

You can right click in your project and select *Manage User Secrets*. 

![](https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/visual_studio/user_secrets_menu.png)

There you can add your secret 

```json
{
 "KeyVault": {
    "AzureClientSecret": "MyClientSecret",
  }
}
```

## References 

- [Connect to your target Linux system in Visual Studio](https://docs.microsoft.com/en-us/cpp/linux/connect-to-your-remote-linux-computer?view=vs-2019)
- [How Visual Studio builds containerized apps](https://docs.microsoft.com/en-us/visualstudio/containers/container-build?view=vs-2019)

