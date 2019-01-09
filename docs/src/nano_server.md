# Microsoft Nano Server

[Windows Nano Server](https://docs.microsoft.com/en-us/windows-server/get-started/getting-started-with-nano-server) is a remotely administered server operating system optimized to occupy the minimum footprint possible.

Windows have a [Windows Nano Server Docker Image](https://hub.docker.com/r/microsoft/nanoserver/) *microsoft/nanoserver* available on *Docker Hub*.

*Visual Studio* also contains the [NanoServerProjectExtensions](https://marketplace.visualstudio.com/items?itemName=VenkatYallaMSFT.NanoServerProjectExtensions) which allows:

- Show Intellisense for APIs that are supported on Nano Server
- Red error squiggles are shown for APIs that are not supported on Nano Server

## Windows Docker repositories

According with [this article](https://stefanscherer.github.io/docker-on-windows-server-2019/), Microsoft is moving its Docker images from the Docker Hub into a own container registry.

Therefore, the following base image will be available for *Windows Server Core*:

`mcr.microsoft.com/windows/servercore`

## Versions and Sizes

You need to be carefull to select a version for the Windows image. If you select a version, the host should at least be on that version or newer.

Also, the image size matter, for example the grafic below show the image size difference between Windows 2016 and 2019:

![](http://tinyurl.com/yb3bkf5w)

## Commands

`powershell`: Start Poweshell


## How-to

### Install the Nano Server Project Extension in Visual Studio

![](http://tinyurl.com/ycnkv2hz)

### Debug missing dependencies

To debug missing dependencies we will use [GFlags](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/gflags) to enable advanced diagnostic and [CDB](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/cdb-command-line-options) for debugging.

- Install [Debugging Tools for Windows](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/debugger-download-tools) into an *Windows 10* machine. You will need the *Windows 10 (x64) debuggers* which is located in the following folder after installation:

`C:\Program Files (x86)\Windows Kits\10\Debuggers\x64`

- Copy or share the *Windows 10 (x64) debuggers* inside the docker container

- Execute the following commands:

```ps
# Mark your application to be monitored by gflags.
gflags.exe -i <your_application_without_path>.exe +sls

# Start your application with the cdb debugger
cdb.exe <path_of_your_application>
```

**Note**: Inside *cdb* you can type `?` for a full list of commands and `Q` to exit.

![](http://tinyurl.com/y8tad6z7)




