# VirtualBox #

`c:\Program Files\Oracle\VirtualBox` : Path where the VirtualBox disk resize utility is located.

`VBoxManage modifyhd <virtual disk path> --resize <size in MB (E.g.: 61440 = 64GB)` : Resize a virtual disk

`VBoxManage internalcommands sethduuid <virtual disk path> ` : Change the Virtual hard drive UUID.
