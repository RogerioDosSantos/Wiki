# Linux Terminal Commands #

## User ##

`sudo` : Run elevated   

`su -` : Become root (Super User)

`su <username>` : ls

`adduser <username>` : Add an user

`usermod -aG <group1>,<group2>,<etc..> <user name>` : change the group of the user

`usermod -d /home/<new name> -m -g <new name> -l <new name> <old name>` : Change the user. This changes the name, the group, the home directory and ownership and group of of that directory to the new ones, along with all the files.

`groups` : list all groups for the current user

`/etc/passwd` : File with a list of all users

`/etc/group` : File with a list of all groups

## Directories and Files ##

`pwd` : Show the directory you are

`ls -all` : List all files and directories into the current directory 

`chmod a+x <filename>` : Make a file executable

`mkdir [-p] <directory name>` : Create directory. If p option is selected, create the directory only if it does not exist.

`touch <filename>` : create a file

`rm <filename>` : remove a file
 
`rm !(<filename>)` : Remove all files but this one. 

`mkdir -p <directory name>` : Create directory if it does not exits

`rmdir <directory>` : remove directory

`rm -rf <directory>` : remove all directory and files recursively.

`cp <source> <destination>` : Copy command

`ln -s <path to be linked> <path where the link file will be created>` : Create a symbolic link (Shortcut)

`pwd -P` : Show the physical directory you are

`ls -l` : List all files and directories into the current directory

`mv` : Move or rename a file or directory

```
for f in *; do mv "$f" "$f.tmp"; mv "$f.tmp" "`echo $f | tr "[:upper:]" "[:lower:]"`"; done
``` : Rename all files of a directory to lower case.

`for f in *; do mv "$f" "${f%.*}" ; done` : Remove the last extension of all files

`tree` : Display the tree of directories and sub directories

`wget [-O <destination path>] <http or ftp url>` : Get a file from the Internet to the destination path

`wget --mirror <htttp or ftp url>` : Mirror an URL 

`<command> | tee -a "<logfile>"` : Saves the input to a file showing it on the stdout. -a informs that the file will be appended Saves the input to a file showing it on the stdout. -a informs that the file will be appended. 

## Programs and OS ##

`info <command name>`
  : List the information of a specific command. If you do not mention the <command name> it will list the command available.

`which <program>` : Inform where a program is located.

`ldd <program name>` : Print the shared objects dependencies. Show the list of shared libraries a program depend.

`[[shutdown]] -r now` : Restart the device

`which <program>` : Inform where a program is located.

`uname -a` : Get the OS version

`top` : Process monitor

`top -p $(pgrep -d',' <proccess name>)` : Monitor a specific process. Note: You do not need to enter all name. If the string name does not match any process the following error message will be displayed: _top: -p requires argument_

`top -H <pid>`: Monitor an specific process

`pidof <process name>` : Returns the PID of a process

`kill [-KILL] <process id>` : Kill a proccess. The `-KILL` parameter forces the proccess to be killed. You can get the process id using the `top` command

`<program name> --version` : Get the version of a program

`whereis <program>` : find where is the location of a specific program

`lsof` : List all open files and its process (You need to run as super user). E.g.: lsof >Result.txt

`ps -aux` : List of all running process

`vmstat` : Virtual Memory Statistics

`compgen -c` : List all the commands you could run.

`compgen -a` : List all the aliases you could run.

`compgen -b` : List all the built-ins you could run.

`compgen -k` : List all the keywords you could run.

`compgen -A` : List all the functions you could run.

`compgen -A` : function -abck will list all the above in one go.

`apt-get install <package name>` : Install a package (For Debian: E.g.: Ubuntu)

`apt-get --purge remove <package name>` : Install a package (For Debian: E.g.: Ubuntu)

`Yum install <package name>` : Install a package (For RPM: E.g.: Fedora)

`tce` : Allow to install applications into a Tiny Core Linux

`free` : Display the amount of free and used system memory (Default: Kilobytes).

`watch <program to execute>` : Execute a program every period of time (Default: 2 seconds)

`sudo service <service name> restart` : Restart a Server

`cat > <file name>` : Create a file and allow you to edit it. Careful! If you do it into an existing file, its content will be deleted.

`find <directory to start> -name "<file to find>"` : Find file in all sub directories
  
`find . -iname "*.<extension>" -type f` : Find extension on all sub-directories ( E.g.: `find . -iname "*.dll" -type f ` )

`find <directory to start>` : Find all files on that directory displaying the full path.

`find <directory> -maxdepth 1 -name "<expression>"` : Find the file into the directory without looking on the sub directories. E.g.: `find ../bin/Studio/Debug/ -maxdepth 1 -name "boost_*.dll"`

`find <start_directory> -iname "<old_name>*" | sed -e 'p;s/<old_name>/<new_name>/' | xargs -n2 mv` : Rename all files that match an expression recursively

`grep --include=\*.{cpp,h} -rnw <source directory> -e "<text to find>"` : Find a text into files (Case Sensitive)

`grep --include=\*.{cpp,h} -rnwi <source directory> -e "<text to find>"` : Find a text into files (Case Insensitive)

`grep -rl <text_to_find_inside_file> <start_dirrectory> | xargs sed -i 's/<text_to_be_replaced>/<new_text>/g'` : Find files with a specific text and replace its content
  
`nm <library name>` : List symbols in libraries

`nm <library name> | grep -i "<function name>"` : Locate if a function is exported from a library

`encfs <encrypted folder content> <mounted folder>` : Enable cryptography on the mounted folder saving the content into the encrypted folder. (E.g.: encfs ~/.encrypted ~/encrypted)

`fusermount -u <mounted folder>` : unmount folder.

`tar xjf <file path>` : Uncompress tar files (E.g.: \*.tar.bz2)

`gzip <file path>` : Compress using gzip

`rsync -u -v -e ssh <source directory>/* <user>@<remote computer (IP)>:<target directory>` : Sync all files from the source directory to the target directory.

`nmap -p <port range> <url o ip>` : Verify if a range of port is open. E.g.: ` nmap -p 1-1000 portquiz.net`

`telnet <url or ip> <port>` : Verify if a port is open.

`tar -cz <directory to backup> | gpg -c -o ./backup.tgz.gpg` : Execute an encrypted compressed backup. E.g.: `tar -cz ./safe00/ | gpg -c -o ./backup.tgz.gpg`

`gpg -d ./backup.tgz.gpg | tar xz` : Uncompress the encrypted backup into the current directory.

`uuidgen` : Create a GUID

## System ##

`dmesg` : Display all information from the system. E.g.: Processor, Platform, devices configured, whitch Toolchain should be used to compile the Linux kernel version, etc.

## Network ##

`sudo dhclient -v [-r]` : Visualize DHCP configuration. If you use the `-r` option, it will release the current IP address.

`wget -qO- portquiz.net:<Port>` : Check if a port is open. The portquiz website answer calls for all available ports.

`python -m SimpleHTTPServer <port number>` : Quick test server using python (localhost:8000)

### Set a static IP ###

The file `/etc/network/interfaces` controls the startup network configuration. To config a static IP you can use the following configuration:

````

auto lo
iface lo inet loopback

#Static IP description
# IPv4 address
iface eth0 inet static
  address 192.168.0.100
  netmask 255.255.255.0 
  network 192.168.0.0 
  broadcast 192.168.0.255
  gateway 192.168.0.1

````

## Bash Files ##

`#!/bin/bash` : Inform what interpreter should run the bash

`cd "$(dirname "$0")` : Set bash to the current directory

`read -p "Press [Enter] key to continue"` : Pause command

`<variable>="$(readlink -f "<relative path")" ` : Convert relative path to full path.    

`apt-cache show <program> ` : Show the version of a program

`scp [-r] <source file path> <username>@<destination device (ip)>:<destination path>` : To copy a file from source to destination while logged into source device. Use -r to copy the folder.

`scp [-r] <username>@<source device (ip)>:<source path> <destination file path>` : To copy a file from source to destination while logged into destination device. Use -r to copy the folder.

### Conditional Statements ###

````

if [ -d "${directory}"  ]; then
  # Control will enter here if $DIRECTORY exists.
fi
  
if [ ! -d "${directory}"  ]; then
  # Control will enter here if ${directory} does not exists.
fi

````

### Looping ###

````

for <item> in "${<array>[@]}"; do
  echo "${<item>}"
done

````

### Function declaration and usage ###

````

function_name () {
  echo "arg1 = $1"
  echo "arg2 = $2"
}

function_name $arg1 $arg2

````
  
## File System ##

`/opt` : Directory used for the installation of add-on application software packages

`/usr/local` : Directory used for the installation software locally.

`sshfs -o idmap=user <username>@<remote machine IP>:<remote directory> <local directory>` : Mount a remote machine directory on the local machine. TODO: This command works however I need to add the fuse configuration part of it, otherwise we will get the user denied access.

## Enviroment Variable ##

`printenv` : Shows the environment variables

To add the environment variable for your user, add it to the `~/.bashrc` file the following command:
`export <Variable Name>=<Variable Value>`

To add the environment variable for all users, add it to the `/etc/environment` file the following command:
`<Variable Name>=<Variable Value>`

*Note:* You might need to add the environment variable to all users in case you want applications like `apt-get` to use the environment variable.

To reload the command configuration and have the variable set without have to close the shell runn the following command:
`source ~./baschrc`

### Additional commands (Not available on all platforms) ###

`getenv <environment variable>` : Shows the environment variable value.

`setenv <environment variable> <value` : Set the environment variable a value.
 
## Web Proxy ##

To give access to your command terminal access the Internet via an Web Proxy, you can set the following environment variables `http_proxy, https_proxy, ftp_proxy, socks_proxy or all_proxy` with the the following values: `http://<user>:<password>@<host>:<port>`. 

E.g.: `http_proxy="http://my_user:my_password@host_ip:443"`

*Note:* Your password and user might not be needed.

*Note:* If your password has special characters as for example '@', you can replace is with the items of the following table:
 
 | Character | Replacement |
 |-----------|-------------|
 | @         | %40         |
 | :         | %3A         |
 | !         | %21         |
 | #         | %23         |
 | $         | %24         |
 
 To add ips that should not use proxy and go direct to the destination you can add the exceptions into the `no_proxy` variable, as for example:
 
 `export no_proxy="127.0.0.1"` : To ignore the current computer
 
 ## TFS ##
 
 `tf -login:<user name>,<password> -collection:<collection uri> get <folder/file to get> [-recursive]` : Get a file or folder from TFS using the Team Foundation Server Client for Linux. For details see https://msdn.microsoft.com/en-us/library/hh873092(v=vs.120).aspx
 
 ## I/Os ##
 
 
`/dev/` : Location of all devices available in the device. You can use the `ls` command to list them. 
 
`udevadm -n </dev/<device name>` : Provide all the information about a device. E.g.: Name, Bus, Vendor ID, Path ID, etc. Thins information can be used to configure the device. E.g.: Allow it to always receive the same name.

 `/lib/udev/rules.d/` : Map rules script location. Those scripts are responsible to define the how the periphericals will be mapped on the Linux filesystem. See _udev script examples_.
 
 ### USB ###
 
 `lsusb` : List the USB devices displaying its IDs. _<Maker ID>:<Device ID>_
 
 #### udev script examples ####
 
 Map an USB port based on the Path ID. This example always map a raspberry pi port position to a fixed link
 
` SUBSYSTEMS##"usb", ENV{ID_PATH}##"platform-3f980000.usb-usb-0:1.2:1.0", SYMLINK+="piusb2"`

Map an USB port based on the Maker ID and Product ID

`SUBSYSTEM##"tty", ATTRS{idVendor}##"0403", ATTRS{idProduct}##"6001", ATTRS{serial}##"A6008isP", SYMLINK+="arduino"`

## Partition ##

`lsblk` : List the physical disk (Device mapping) and the logic partition associated to it if it was formatted.

`lshw -C disk` : View detected devices of class "DISK"

`blkid` : List the location of the logic partition.

`fdisk -l` : View existing partition tables

`fdisk /dev/<device name>`: Create partition for the device. E.g.:`fdisk sdb`. You will need to follow the command inside fdisk. Note: If you create an extended partition, you need to create a Linux partition as well. They can occupy the same blocks.

`mkfs -t ext4 /dev/<linux partition>` : Format the new partition's filesystem as type ext4. E.g.: `mkfs -t ext4 /dev/sdb5`

`mkfs.ext4 /dev/<partition name>` : Format a physical disk.

`mount <device or network share> <local folder>` : Mount a device or shared folder into a local folder.

`umount <local folder>` : Mount a device or shared folder into a local folder.

`mountpoint <directory>` : Inform if the directory is mounted (mountpoint) or not

`df -P -T <directory> | tail -n +2 | awk '{print $2}'` : Return the mount type of a directory (E.g.: cifs, ext4, etc)

`df -P -T <directory> | tail -n +2 | awk '{print $1}'`: Return the device or the network path from were a folder was mounted from. (E.g.: /dev/sda1, //MyServer/myfolder)

`/etc/mtab`: Lists currently mounted file systems and is used by the mount and unmount commands when you want to list your mounts or unmount all.

`/etc/fstab`: Configuration file that contains information of all the partitions and storage devices in your computer. `Important Note: Be careful with this file because if it is configured wrongly you system will not boot anymore`

## Cron ##

`/etc/cron.hourly` : Directory that contains scrips that runs hourly. 

`/etc/cron.daily` : Directory that contains scrips that runs dialy. 

`/etc/cron.weekly` : Directory that contains scrips that runs weekly. 

`/etc/cron.monthly` : Directory that contains scrips that runs monthly. 

`etc/crontab` : Main configuration cron file.
