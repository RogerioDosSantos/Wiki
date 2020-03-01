# Linux Terminal Commands 

## User

`sudo` : Run elevated   

`sudo -E` : Run elevated keeping all environment variables  

`sudo !!` : Repeat last command as sudo.

`su -` : Become root (Super User)

`su <username>` : ls

`adduser <username>` : Add an user

`groupadd <group_name>`: Add a group

`usermod -aG <group1>,<group2>,<etc..> <user name>` : change the group of the user

`usermod -d /home/<new name> -m -g <new name> -l <new name> <old name>` : Change the user. This changes the name, the group, the home directory and ownership and group of of that directory to the new ones, along with all the files.

`usermod --password <password> <user>`: Change a password of an user.

`groups` : list all groups for the current user

`/etc/passwd` : File with a list of all users

`/etc/group` : File with a list of all groups

## Directories and Files

`pushd <directory>`: Go to a directory and keep the previous directory in memory so you can return to it using the command `popd`

`popd` : Return to the previous memory directory saved by the command `pushd`

`dirs` : List the directory history. It is convenient to know the stack when you use the `pushd` command.

`dirs -c` : Clean all directories stack from `pushd` command.

`pwd` : Show the directory you are

`pwd -P` : Show the directory you are without symlink

`ls -all` : List all files and directories into the current directory 

`chmod a+x <filename>` : Make a file executable

`mkdir [-p] <directory name>` : Create directory. If p option is selected, create the directory only if it does not exist.

`mkdir -p <base_dir>/{<list_or_range>}/{list_or_range}`: Create several folders. E.g.: `mkdir -p folder/{sub1,sub2}/{sub1,sub2,sub3}` or `mkdir -p folder/{1..10}/{1..10}`

`touch <filename>` : create a file

`rm <filename>` : remove a file
 
`rm !(<filename>)` : Remove all files but this one. 

`rmdir <directory>` : remove directory

`rm -rf <directory>` : remove all directory and files recursively.

`cp <source> <destination>` : Copy command

`cp -r -u <source> <destination>` : Copy recursively updating only newer files

`cp -n <source> <destination>` : Copy without overwriting existing file

`ln -s <path to be linked> <path where the link file will be created>` : Create a symbolic link (Shortcut)

`pwd -P` : Show the physical directory you are

`ls -l` : List all files and directories into the current directory

`mv` : Move or rename a file or directory

`if [ -d <directory> ]; then; <code>; fi`: Check if directory exits

`if [ -f <file_path> ]; then; <code>; fi`: Check if file exits

`wc -l <file_path>`: Get the amount of lines into a file.

`stat --format '%a' <file_or_dirctory>`: Get the `chmod` numerical value of a file or directory.

```bash
for f in *; do mv "$f" "$f.tmp"; mv "$f.tmp" "`echo $f | tr "[:upper:]" "[:lower:]"`"; done
``` 
: Rename all files of a directory to lower case.

`for f in *; do mv "$f" "${f%.*}" ; done` : Remove the last extension of all files

`tree` : Display the tree of directories and sub directories

`wget [-O <destination path>] <http or ftp url>` : Get a file from the Internet to the destination path

`wget --mirror <htttp or ftp url>` : Mirror an URL 

`<command> | tee -a "<logfile>"` : Saves the input to a file showing it on the stdout. -a informs that the file will be appended Saves the input to a file showing it on the stdout. -a informs that the file will be appended. 

`$(pwd -P | sed 's/\/mnt\/c\//c:\\\\/g' | sed 's/\//\\\\/g')`: Convert Linux path to Windows path when using Windows Linux Subsystem

## Shell - Programs and OS 

`ctrl-c`: Stop a program in execution.

`ctrl-z`: Suspend a program in execution.

`<command> &`: Execute a program in background (job).

`<program> <(<command>)`: Execute a command and pass it's answer as file entry to a program. E.g.: `cat <(ls)`.

`jobs`: Inform the programs that is in background, its execution status, command and job number.

`fg <job_number>`: Bring a job that is the background to the foreground. If the job is stopped, it will be executed.

`bg <job_number>`: Continue the execution of a stopped job (suspended) in the background.

`exec <command>`: Execute a program without forking it.

`ps -aux` : List of all running process

`ps -f [<process_id>]` : List additional information. E.g.: Parent Process (PPID), Command that execute the process (CMD), etc.

`ps -o pid,user,%mem,command ax | sort -b -k3 -r`: Display the amount of memory used on each process

`kill [-KILL] <process id>` : Kill a process. The `-KILL` parameter forces the process to be killed. You can get the process id using the `top` command

`kill -l`: Display the signal available list (signal number). Please see [signals topic](#signals) for the signals descriptions.

`kill -<signal_number>`: Send a signal to a program.

`exit` : Exit the terminal. Note: When you exit the terminal, all programs launched on it will be closed.

`disown -a && exit`: Exit the terminal but leave all programs running.

`info <command name>`
  : List the information of a specific command. If you do not mention the <command name> it will list the command available.

`screenfetch` : Display the linux logo and information of the system.

![](http://tinyurl.com/yayn3tst){ width=50 }

`which <program>` : Inform where a program is located.

`command -v <program>` : Inform where a program is located. This should be preferred over `which` since this is built-in in the shell.

`date` : Display the Date and Time on the local computer timezone. You can access a list of example for Date and Time format [here]( ./date_time_format_list.html )

`date -u`: Display the Date and Time in UTC format.

`[[shutdown]] -r now` : Restart the device

`which <program>` : Inform where a program is located.

`uname -a` : Get the full OS version

`lsb_release -a`: Display the Linux distribution. Operational System ID, Description. Codename and version. In case lsb_release is not available you can execute the following: `cat /etc/*-release`

`/sbin/ldconfig -p`: Show the list of libraries that were used by the system and/or is available on the *cache*

`/sbin/ldconfig -p | grep stdc++.so`: Return the libstdc++ library version installed on the machine. Example of return: `libstdc++.so.6 (libc6,soft-float) => /usr/lib/libstdc++.so.6`. You can get the compatible versions for *libstdc++* by using the following command on the lib found: `strings /usr/lib/libstdc++.so.6 | grep LIBCXX`

`/sbin/ldconfig -p | grep libc.so`: Return the *libc* library version installed on the machine. 

`top` : Process monitor

`top -p $(pgrep -d',' <proccess name>)` : Monitor a specific process. Note: You do not need to enter all name. If the string name does not match any process the following error message will be displayed: _top: -p requires argument_

`top -H <pid>`: Monitor an specific process

`pidof <process name>` : Returns the PID of a process

`<program name> --version` : Get the version of a program

`whereis <program>` : find where is the location of a specific program

`lsof` : List all open files and its process (You need to run as super user). E.g.:` lsof > Result.txt`

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

`smart install <package name>` : Install a package. The [smart package manager]( https://labix.org/smart ) supports several distributions and can replace the following package managers: APT, APT-RPM, YUM, URPMI, etc.

`tce` : Allow to install applications into a Tiny Core Linux

`free` : Display the amount of free and used system memory (Default: Kilobytes).

`watch [-n <interval_in_seconds>] <program to execute>` : Execute a program every period of time (Default: 2 seconds)

`sudo service <service name> restart` : Restart a Server

`cat > <file name>` : Create a file and allow you to edit it. Careful! If you do it into an existing file, its content will be deleted.

`find <directory to start> -name "<file to find>"` : Find file in all sub directories
  
`find . -iname "*.<extension>" -type f` : Find extension on all sub-directories ( E.g.: `find . -iname "*.dll" -type f ` )

`find <directory to start>` : Find all files on that directory displaying the full path.

`find <directory> -maxdepth 1 -name "<expression>"` : Find the file into the directory without looking on the sub directories. E.g.: `find ../bin/Studio/Debug/ -maxdepth 1 -name "boost_*.dll"`

`find <start_directory> -iname "<old_name>*" | sed -e 'p;s/<old_name>/<new_name>/' | xargs -n2 mv` : Rename all files that match an expression recursively

`find <start_directory> -type d -name "<expression>"` : Find directories

`find <start_directory> -ctime +<days>` : Find directories older than the amount of days informed.

`find . -mindepth 1 -maxdepth 1 -type d -printf '%f\n'`: Return only the directory names

`grep --include=\*.{cpp,h} -rnw <source directory> -e "<text to find>"` : Find a text into files (Case Sensitive)

`grep --include=\*.{cpp,h} -rnwi <source directory> -e "<text to find>"` : Find a text into files (Case Insensitive)

`grep -rl <text_to_find_inside_file> <start_dirrectory> | xargs sed -i 's/<text_to_be_replaced>/<new_text>/g'` : Find files with a specific text and replace its content

`<command> | grep -i <search_word>`: Filter the result of the command to an specific word case Insensitive.

`<command> | grep -v <unwanted_word>`: Filter the result of a command removing an specific word.
  
`nm <library name>` : List symbols in libraries. Note: *T* indicates that the symbol is are exported by the library. *U* indicated that the symbol is not in the library but loaded in another shared library.

`nm -C <library_path> | grep -i "<function_name>"`: Show how the function is declared in the library.

`nm <library name> | grep -i "<function name>"` : Locate if a function is exported from a library

`encfs <encrypted folder content> <mounted folder>` : Enable cryptography on the mounted folder saving the content into the encrypted folder. (E.g.: encfs ~/.encrypted ~/encrypted)

`fusermount -u <mounted folder>` : unmount folder.

`tar xjf <file path>` : Uncompress tar files (E.g.: \*.tar.bz2)

`gzip <file path>` : Compress using gzip

`rsync -uve ssh <source directory>/* <user>@<remote computer (IP)>:<target directory>` : Sync all files from the source directory to the target directory.

`rsync -vah <source_folder> <destination_folder>`: Execute the synchronization between folders.

`nmap -p <port range> <url o ip>` : Verify if a range of port is open. E.g.: ` nmap -p 1-1000 portquiz.net`

`telnet <url or ip> <port>` : Verify if a port is open.

`tar -cz <directory to backup> | gpg -c -o ./backup.tgz.gpg` : Execute an encrypted compressed backup. E.g.: `tar -cz ./safe00/ | gpg -c -o ./backup.tgz.gpg`

`gpg -d ./backup.tgz.gpg | tar xz` : Uncompress the encrypted backup into the current directory.

`uuidgen` : Create a GUID

`dpkg --print-architecture`: Display the user space architecture the package manager uses.

`dpkg --add-architecture amd64`: Add 64bits user space architecture on the package manager.

`apt-get -f install`: Fix system with broken dependencies in place

`strings <file_path>`: Show all printable strings of a file.

`strings <file_path> | grep <search_item>`: Search for an string in any file. Can be used to also search on binary files.

`<command> &> <file_path>`: Redirect all commands output to a file. The *&* means "redirect *stdout* and *stderr*". Note that depending on the shell you will need to use: `>&`, `&>` or `> <file_path> 2>&1`

`exec <command>`: Execute the command. In case the command fails, the script will stop its execution.

`eval <command>`: Equivalent to `exec` function but the script will not stop its execution if the command exits with a code different than 0.

`unset -f <function_name>`: Unset (un-declare) a function. 

`declare -F <name>`: Verify if a function or item is declared.

`( set -o posix ; set  )`: Display all variables.

`local <variable_name>=$(cat)` : Get Input from std in (Pipe) and put into a variable.

`pandoc <markdown_file_path> | lynx -stdin` : Display Markdown on the command line.

`w3m -dump http://google.com` : Show url

`echo "$LINENO -  $FUNCNAME"` : Show Function and Line Number of a script file

`<command> &` : Run command in background

`<command> || true`: Run a command and ignore the return error.

`alias <name>="<command>"`: Create a alias to a command

`alias search=<name>`: Search if an alias already exist

`apt-cache show <program> ` : Show the version of a program

`apt-cache search <program>`: Search a package for the program

`<space><command>`: Do not add a command to the command history. e.g.: ` ls -al`

`history`: Display the command history.

`echo <file_path> | entr <command>`: Monitor a file and execute a command every time the file changes.

`sleep <seconds>`: Stop the execution for time informed.

`set -xe`: -e makes the shell exit immediately whenever something returns an error (this is often used in shell scripts as a failsafe mechanism), and -x enables verbose execution of scripts so that you can see what's happening.

### Strings Manipulations

`printf '%q' "<string>"`: Format string for shell scape

`echo <string_delimiter> | cut -d'<delimiter>' -f<position>`: Get a substring between delimiters. E.g.: `echo "S1;S2;S3" | cut -d';' -f2`

`echo <string_delimiter> | rev | cut -d'<delimiter> | rev' -f<position>`: Get a substring between delimiters in reverse order. E.g.: `echo "S1;S2;S3" | rev | cut -d';' -f1 | rev`

`${<string_delimiter>##*<character>}`: Trim everything until the last specified character.

`${<string_delimiter>#*<character>}`: Trim everything inclding the last specified character. E.g.: `${key=value#*=} >> "value"`

`${<string_delimiter>%%<character>*}`: Get the string before a specific character.

`${<string>/<character_to_search>/<character_to_replace>}`: Replace the first occurrence of a character

`${<string>//<character_to_search>/<character_to_replace>}`: Replace the all occurrences of a character

`${<string>%<character>}`: Remove the last occurrence of a character.

`${<string>#<character>}`: Remove the first occurrence of a character.

## Security

### Hashes

#### SHA-1 hashes

`sha1sum <file>` : Print or check SHA1 (160-bit) checksums. With no file, or when file is -, read standard input

`sha1sum <file> > <file>.sha1`: If you want to send the file together with its sha1sum output redirect the output to a file

`sha1sum -c <file>.sha1`: Check if the file changed. It should show OK if the sha1 is correct.

#### MD5 hashes

`md5sum <file>` : Print or check MD5 (Message-Digest algorithm 5) 128-bit cryptographic hash checksums. With no file, or when file is -, read standard input

`md5sum <file> > <file>.sha1`: If you want to send the file together with its sha1sum output redirect the output to a file

`md5sum -c <file>.sha1`: Check if the file changed. It should show OK if the sha1 is correct.

`echo -n <string> | md5sum`: Calculate the MD5 of an string

## System 

`dmesg` : Display all information from the system. E.g.: Processor, Platform, devices configured, whitch Toolchain should be used to compile the Linux kernel version, etc.

## File System

`/bin` : Common executables available for everyone, ex. cp rm ls

`/boot` : Kernel and boot configuration

`/dev` : Files which point to both physical and pseudo devices

`/etc` : System and program configuration files

`/home` : Non-root user home directories

`/lib` : Lib32

`/lib64` : Library files used by the system, include .so files and others

`/lost+found` : Saved files due to failure

`/media` : Auto-mounting place for certain external devices on some distros

`/mnt` : Place to mount various file systems

`/opt` : Various software

`/proc` : Virtual filesystem for resources, processes, and more

`/root` : Root user home directory

`/sbin` : Similar to /bin, but for system administrators, ex. fdisk

`/tmp` : Temporary file storage, wiped out after reboot

`/usr` : User programs, library files, docs, etc., ex. obs

`/var` : Variable files for various purposes, ex. logs, tz data

`/vmlinuz` : Compressed linux kernel

## Network 

`netstat -lptu` : List the tcp ports in use and what programs are using it.

`sudo dhclient -v [-r]` : Visualize DHCP configuration. If you use the `-r` option, it will release the current IP address.

`wget -qO- portquiz.net:<Port>` : Check if a port is open. The portquiz website answer calls for all available ports.

`python -m SimpleHTTPServer <port number>` : Quick test server using python (localhost:8000)

`/etc/hosts` : File with host mapping. If you want to resolve a name to a specific address you can add the `<IP> <Name>` on the beginning of this file.

`ssh <user_name>@<computer>`: Connect using *ssh* to a remote computer.

`ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 <user_name>@<computer>`: Connect to a device that contains the old *diffie-hellman-group1-sha1* encryption algorithm. The *OpenSSH* does not allows you to connect with old encryption algorithm by default. When this happens the following message will be displayed: `no matching key exchange method found. Their offer: diffie-hellman-group1-sha1`. If you want a more permanent solution without having to type it all the time, you can add the following on the `~/.ssh/config` file:

`ssh -L <local_port>:<server_ip>:<server_port> <user_name>@<domain> -N` : Tunnel with ssh. E.g.: `ssh -L 3337:127.0.0.1:6379 root@emkc.org -N`

```bash
Host <device_ip> KexAlgorithms +diffie-hellman-group1-sha1
```

`scp [-r] <source file path> <username>@<destination device (ip)>:<destination path>` : To copy a file from source to destination while logged into source device. Use -r to copy the folder.

`scp [-r] <username>@<source device (ip)>:<source path> <destination file path>` : To copy a file from source to destination while logged into destination device. Use -r to copy the folder.

### Set a static IP 

The file `/etc/network/interfaces` controls the startup network configuration. To config a static IP you can use the following configuration:

```bash
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
```

### Installing Certificates

``` bash
# Create a directory for extra CA certificates in /usr/share/ca-certificates:
sudo mkdir /usr/share/ca-certificates/extra

# Copy the CA .crt file to this directory:
sudo cp my_certificate.crt /usr/share/ca-certificates/extra/ my_certificate.crt` 

# Ensure the cert is in pem format:
openssl x509 -inform DER -outform PEM -in  my_certificate.crt -out my_certificate.crt

# Let Ubuntu add the .crt file's path relative to /usr/share/ca-certificates to /etc/ca-certificates.conf:
sudo dpkg-reconfigure ca-certificates
```

**Note**: If you are using Ubuntu you might need to rename the certificate to `*.pem` to the dpkg-reconfigure command detected the certificate.

## Bash Files 

`#!/bin/bash` : Inform what interpreter should run the bash

`#!/usr/bin/env bash` : Inform what interpreter should run the bash. This [shebang](https://bash.cyberciti.biz/guide/Shebang) is preferable over the `#!/bin/bash` since it will make the script portable.

`cd "$(dirname "$0")` : Set bash to the current directory

`read -p "Press [Enter] key to continue"` : Pause command

`<variable>="$(readlink -f "<relative path")" ` : Convert relative path to full path.    

### Conditional Statements 

```bash

if [ -d "${directory}"  ]; then
  # Control will enter here if $DIRECTORY exists.
fi
  
if [ ! -d "${directory}"  ]; then
  # Control will enter here if ${directory} does not exists.
fi

if [ ! -S "${socket_file_path}" ]; then
  # Control will enter if a socket file does not exists
fi

if [ ! -f "${file_path}" ]; then
  # Control will enter if a file does not exists
fi
```

### Looping 

```bash

for <item> in "${<array>[@]}"; do
  echo "${<item>}"
done

```

### Function declaration and usage 

`type <command>`: Inform the type of command. If it is a function it will show the function.

`declare -F [<function_to_search>]`: Inform all  or a specific function.

```bash

function_name () 
{
  # Usage: function_name <out:arg1> <in:arg2>
  echo "arg1 = $1"
  echo "arg2 = $2"
}

function_name $arg1 $arg2

```
  
## File System 

`/opt` : Directory used for the installation of add-on application software packages

`/usr/local` : Directory used for the installation software locally.

`sshfs -o idmap=user <username>@<remote machine IP>:<remote directory> <local directory>` : Mount a remote machine directory on the local machine. TODO: This command works however I need to add the fuse configuration part of it, otherwise we will get the user denied access.

## Environment Variable 

`printenv <variable>` : Shows the environment variables

`echo $<variable>` : Shows the environment variables

To add the environment variable for your user, add it to the `~/.bashrc` file the following command:
`export <Variable Name>=<Variable Value>`

To add the environment variable for all users, add it to the `/etc/environment` file the following command:
`<Variable Name>=<Variable Value>`

*Note:* You might need to add the environment variable to all users in case you want applications like `apt-get` to use the environment variable.

To reload the command configuration and have the variable set without have to close the shell run the following command:
`source ~./baschrc`

`printenv TERM`: Show the color schema of the terminal.

### Additional commands (Not available on all platforms) 

`getenv <environment variable>` : Shows the environment variable value.

`setenv <environment variable> <value` : Set the environment variable a value.
 
## Web Proxy 

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
 
 ## TFS 
 
 `tf -login:<user name>,<password> -collection:<collection uri> get <folder/file to get> [-recursive]` : Get a file or folder from TFS using the Team Foundation Server Client for Linux. For details see https://msdn.microsoft.com/en-us/library/hh873092(v=vs.120).aspx
 
 ## I/Os 
 
 
`/dev/` : Location of all devices available in the device. You can use the `ls` command to list them. 
 
`udevadm -n </dev/<device name>` : Provide all the information about a device. E.g.: Name, Bus, Vendor ID, Path ID, etc. Thins information can be used to configure the device. E.g.: Allow it to always receive the same name.

 `/lib/udev/rules.d/` : Map rules script location. Those scripts are responsible to define the how the periphericals will be mapped on the Linux filesystem. See _udev script examples_.
 
### USB
 
 `lsusb` : List the USB devices displaying its IDs. _<Maker ID>:<Device ID>_
 
 #### udev script examples 
 
 Map an USB port based on the Path ID. This example always map a raspberry pi port position to a fixed link
 
` SUBSYSTEMS##"usb", ENV{ID_PATH}##"platform-3f980000.usb-usb-0:1.2:1.0", SYMLINK+="piusb2"`

Map an USB port based on the Maker ID and Product ID

`SUBSYSTEM##"tty", ATTRS{idVendor}##"0403", ATTRS{idProduct}##"6001", ATTRS{serial}##"A6008isP", SYMLINK+="arduino"`

## Partition 

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

## Cron 

`/etc/cron.hourly` : Directory that contains scrips that runs hourly. 

`/etc/cron.daily` : Directory that contains scrips that runs dialy. 

`/etc/cron.weekly` : Directory that contains scrips that runs weekly. 

`/etc/cron.monthly` : Directory that contains scrips that runs monthly. 

`etc/crontab` : Main configuration cron file.

## Shared Libraries

Shared libraries on Linux should always be installed in the **Linux system libraries path**. 

You can use the *LD_LIBRARY_PATH* environment variable with a colon-separated set of directories where libraries should be searched for first, before the standard set of directories; this is useful when debugging a new library or using a nonstandard library for special purposes 

Please note that while LD_LIBRARY_PATH works on many Unix-like systems, it doesn't work on all; for example, this functionality is available on HP-UX but as the environment variable SHLIB_PATH, and on AIX this functionality is through the variable LIBPATH (with the same syntax, a colon-separated list).

`/usr/lib` : **Linux system libraries path** 

`/usr/lib/i386-linux-gnu` : **Linux system libraries path** for *x86* applications in an *Linux x64*

`ldd --version`: Get the version of the *GLIBC*. 

`ldd <program name>` : Print the shared objects dependencies. Show the list of shared libraries a program depend.

`/lib/ld-linux.so.2 --library-path <library_path> <executable_command>`: Allow to inform an additional path than the **linux system library path** where a library would be located.

## Services (Daemon)

`systemctl cat <service_name>`: List the current service configuration. 

`systemctl edit <service_name>`: Overwrite the default service configuration. Creates an override file (`/etc/systemd/system/<service_name>.d/override.conf`), open the editor and restart the service once the configuration is saved.

`systemctl show <service_name> [-p <property_name>]`: Check service properties in a format `<key>:<value>`. If you want to display a single property, you can use the `-p` option.

`systemctl status <service_name>`: Shows the current status of a service

`journalctl -u <service_name>`: Show the current logs of a service

`systemctl daemon-reload`: Reload systemd manager configuration. This will rerun all generators (see systemd.generator(7)), reload all unit files, and recreate the entire dependency tree. While the daemon is being reloaded, all sockets systemd listens on behalf of user configuration will stay accessible.

`systemctl list-dependencies`: List all dependencies of a service

`systemctl list-units [--all]`: List all services and its current status. When the option `--all` is invoked, services that is not running will also being shown. The default behavior is to show only running services

`systemctl is-active <service_name>`: Verify if a service is active.

`systemctl is-failed <service_name>`: Indicates if a service is in failed state

`systemctl enable <service_name>`: Start a service in the boot

`systemctl disable <service_name>`: Stop the service to start during boot

`systemctl mask <service_name>`: Put the service in *masked state* which means, the service will not be able to be started while is masked.

`systemctl unmask <service_name>`: Remove the service from *masked state*

`systemctl is-enabled`: Verify if a service is istarting during boot

`systemctl revert <service_name>`: Revert service configuration to the vendor configuration 

`systemctl restart <service_name>`: Restart a service

`systemctl stop <service_name>`: Stop a service

`systemctl start <service_name>`: Start a service

`systemctl status <service_name>`: Verify if a service is running


## Signals <a name="signals"></a>

`SIGHUP`: 

`SIGINT`: 

`SIGQUIT`: 

`SIGILL`: 

`SIGTRAP`: 

`SIGABRT`: 

`SIGBUS`: 

`SIGFPE`: 

`SIGKILL`: Kill a process. Does not give the process a chance to stop properly.

`SIGUSR1`: 

`SIGSEGV`: 

`SIGUSR2`: 

`SIGPIPE`: 

`SIGALRM`: 

`SIGTERM`: 

`SIGSTKFLT`: 

`SIGCHLD`: 

`SIGCONT`: Continue a process execution.

`SIGSTOP`:

`SIGTSTP`: Stop a process execution. Put the process in suspended mode. 

`SIGTTIN`: 

`SIGTTOU`: 

`SIGURG`: 

`SIGXCPU`: 

`SIGXFSZ`: 

`SIGVTALRM`: 

`SIGPROF`: 

`SIGWINCH`: 

`SIGIO`: 

`SIGPWR`: 

`SIGSYS`: 

`SIGRTMIN`: 

`SIGRTMAX`: 

## How-to

### Shell - Run 32bits application into 64bits OS

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386
sudo apt-get install multiarch-support
```

### Shell - Mount Bind Volume

```bash
echo -ne "Mouting volume /r from /mnt/c ... "
sudo mkdir -p /r
sudo mount --bind /mnt/c /r
echo "DONE (New volume: /r=/mnt/c)"
```

### Bash - Read user input with defaut value

```bash
# Read User into the us_user local variable with default value User

local us_user
read -p "Enter user (Default: User): " us_user
us_user=${us_user:-User}

echo "Welcome: ${us_user}"
```

### Bash - Ask user input with limited options

```bash
local ui_yes_no
while true; do
  read -p "Would you like to install/update programs (yes(y)/no(n))? " ui_yes_no
  case $ui_yes_no in
      [Yy]* ) InstallPrograms; break;;
      [Nn]* ) break;;
      * ) echo "Please answer yes or no.";;
  esac
done
```

### Shell - Create user (Script)

```bash
whoami

# Create the ubuntu user as root and sudo group
useradd -d /home/ubuntu -ms /bin/bash -g root -G sudo -p ubuntu ubuntu

# useradd options:
# -d, --home-dir HOME_DIR Home directory of the new account.
# -m, --create-home Create the user's home directory.
# -s, --shell SHELL Login shell of the new account.
# -g, --gid GROUP Name or ID of the primary group.
# -G, --groups GROUPS List of supplementary groups.
# -p, --password PASSWORD Encrypted password of the new account (e.g. ubuntu).

su - ubuntu
whoami
```

### Shell - Populate a file in one command

```bash
cat > /tmp/config_file <<-EOF
[Session_01]
o1=1
o2=2
[Session_02]
o3=3
o4=4
EOF

cat /tmp/config_file
```

### Shell - Configure sudoer to use proxy configuration

In some releases sudo is configured in such a way that all environment variables all cleared when running the command. To keep the proxy configuration edit the `/etc/sudoers` file running the `visudo` command.

Them, after the `Defaults env_reset` add the environment variable that you would like to keep as following:

```bash
Defaults  env_keep = "http_proxy https_proxy ftp_proxy socks_proxy no_proxy"
```

### Shell - Create a super fast ram disk

```bash
# Create a super fast ram disk
mkdir -p /mnt/ram
mount -t tmpfs tmpfs /mnt/ram -o size=8192M
```

### Shell - Compress files


```bash
# Create 1G junk data file
dd if=/dev/zero of=junk_data bs=1M count=1024

# Compress with gzip
gzip -c junk_data > compressed.gz

# Compress with tar
tar -cf compressed.tar junk_data

# Compress with xz
xz -zk junk_data

# Compress with 7zip
7za a -t7z compressed.7z junk_data

# Compress with bzip2 (Shown to be the software that compress the most)
bzip2 -zk junk_data

# Make unlimited size bzip2 archive (100TB in this case)
dd if=/dev/zero bs=10G count=10000 | bzip2 -c > compressed.bz2

# Extracting the file
bzip2 -d compressed.bz2
```

### Shell - Execute bash script from URL without downloading a file 

```bash
# Execute bash without arguments
wget -O - <bash_url> | bash

# Execute bash that require arguments
wget -O - <bash_url> | bash -s '<argument_01>' '<argument_02>'
```

### Permissions and Groups

The permission are listed as following:

![](http://tinyurl.com/y85m7sp2)

```shell
# Change permission to the to the owner
chmod +rw <file_or_dirctory>

# Change the permission to the group
chmod g+rw <file_or_dirctory>

# Change the permission to others
chmod o+rw <file_or_dirctory>

# Change group
chgrp <group> <file_or_dirctory>

# Change owner
chown <group> <file_or_dirctory>

# Change Permission by numbers
chmod <number>
```
Permission Numbers:
- 0 = ---
- 1 = --x
- 2 = -w-
- 3 = -wx
- 4 = r-
- 5 = r-x
- 6 = rw-
- 7 = rwx

### Bash - Create a progress bar

```bash
echo -ne '#####                     (33%)\r'
sleep 1
echo -ne '#############             (66%)\r'
sleep 1
echo -ne '#######################   (100%)\r'
echo -ne '\n'
```

### Bash - Loops 

```bash
for VARIABLE in A LIST
do
  command1
  command2
  commandN
done
```

```bash
#!/bin/bash

echo "You can list numbers and text like this:"

for n in 1 2 3 four
do
  echo "Number $n"
done

echo "Or specify a range of numbers:"

for n in {1..5}
do
  echo "Number $n"
done

echo "Or use the output of another command:"
for f in $(ls)
do
  echo $f
done
```






