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

### Persistently Mount OneDrive 

OneDrive folder contain space with can be problematic depending on the Linux commands you would like to use. In addition *WSL* executes the */etc/fstab* file before the mount of the */mnt/c* is done. The way to workaround it is to mount the */mnt/c* into the */etc/fstab* file. 

Below you can find a */etc/fstab* file that mounts the */mnt/c/Users/rogersantos/OneDrive - Microsoft* folder: 

```
LABEL=cloudimg-rootfs	/	 ext4	defaults	0 0
# Mount the disk
drvfs /mnt/c 9p rw,dirsync,noatime,aname=drvfs;path=C:\;uid=1000;gid=1000;symlinkroot=/mnt/,mmap,access=client,msize=262144,trans=virtio 0 0
# Bind the folder
/mnt/c/Users/rogersantos/OneDrive\040-\040Microsoft /mnt/onedrive none bind 0 0
```

## References

- [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
