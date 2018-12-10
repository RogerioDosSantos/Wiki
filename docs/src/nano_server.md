# Microsoft Nano Server

[Windows Nano Server](https://docs.microsoft.com/en-us/windows-server/get-started/getting-started-with-nano-server) is a remotely administered server operating system optimized to occupy the minimum footprint possible.

Windows have a [Windows Nano Server Docker Image](https://hub.docker.com/r/microsoft/nanoserver/) *microsoft/nanoserver* available on *Docker Hub*.

*Visual Studio* also contains the [NanoServerProjectExtensions](https://marketplace.visualstudio.com/items?itemName=VenkatYallaMSFT.NanoServerProjectExtensions) which allows:

- Show Intellisense for APIs that are supported on Nano Server
- Red error squiggles are shown for APIs that are not supported on Nano Server

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




