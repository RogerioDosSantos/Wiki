# WSL (Windows Subsystem for Linux) #

`sudo mount -t drvfs <windows_driver_letter>: /mnt/<wsl_driver_folder>` : Mount a Windows Driver into the WSL (E.g.: sudo mount -t drvfs U: /mnt/u). Note: You can mount network driver too.

`cmd.exe /c '<command>' <command_parameters>` : Run command from windows

## How-to 

### Access Linux File from Windows 

WSL files can be accessed from the following network path: 

```shell 
# WSL network path
\\wsl$

# Home page of ubuntu machine
\\wsl$\Ubuntu-18.04\home
```

### Access Windows File from Linux 

Windows files can be accessed from Linux machine from the following Mount path:

```shell 
# C drive path
/mnt/c/
```

## References

- [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
