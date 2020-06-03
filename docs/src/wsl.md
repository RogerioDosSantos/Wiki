# WSL (Windows Subsystem for Linux) #

`sudo mount -t drvfs <windows_driver_letter>: /mnt/<wsl_driver_folder>` : Mount a Windows Driver into the WSL (E.g.: sudo mount -t drvfs U: /mnt/u). Note: You can mount network driver too.

`cmd.exe /c '<command>' <command_parameters>` : Run command from windows

## References

- [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
