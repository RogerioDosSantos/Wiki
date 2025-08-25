# Linux Terminal Commands

---

<details>
<summary><strong>User Management</strong></summary>

**Run elevated commands:**
```shell
sudo <command>
```

**Run elevated, keeping all environment variables:**
```shell
sudo -E <command>
```

**Repeat last command as sudo:**
```shell
sudo !!
```

**Become root (Super User):**
```shell
su -
```

**Switch to another user:**
```shell
su <username>
```

**Add a user:**
```shell
adduser <username>
```

**Add a group:**
```shell
groupadd <group_name>
```

**Change user group membership:**
```shell
usermod -aG <group1>,<group2>,<etc..> <user name>
```

**Change user name, group, home directory, and ownership:**
```shell
usermod -d /home/<new name> -m -g <new name> -l <new name> <old name>
```

**Change a user's password:**
```shell
usermod --password <password> <user>
```

**List all groups for the current user:**
```shell
groups
```

**Show all users:**
```shell
cat /etc/passwd
```

**Show all groups:**
```shell
cat /etc/group
```

</details>

---

<details>
<summary><strong>Directories and Files</strong></summary>

**Navigate and manage directories:**
- Go to a directory and keep the previous directory in memory:
  ```shell
  pushd <directory>
  ```
- Return to the previous directory:
  ```shell
  popd
  ```
- List directory history:
  ```shell
  dirs
  ```
- Clean directory stack:
  ```shell
  dirs -c
  ```
- Show current directory:
  ```shell
  pwd
  ```
- Show current directory (no symlink):
  ```shell
  pwd -P
  ```

**List files and directories:**
- List all files and directories:
  ```shell
  ls -all
  ```
- List with details:
  ```shell
  ls -l
  ```

**File and directory operations:**
- Make a file executable:
  ```shell
  chmod a+x <filename>
  ```
- Create a directory:
  ```shell
  mkdir [-p] <directory name>
  ```
- Create multiple folders:
  ```shell
  mkdir -p <base_dir>/{<list_or_range>}/{list_or_range}
  ```
- Create a file:
  ```shell
  touch <filename>
  ```
- Remove a file:
  ```shell
  rm <filename>
  ```
- Remove all files but one:
  ```shell
  rm !(<filename>)
  ```
- Remove a directory:
  ```shell
  rmdir <directory>
  ```
- Remove directory and files recursively:
  ```shell
  rm -rf <directory>
  ```
- Copy files:
  ```shell
  cp <source> <destination>
  cp -r -u <source> <destination>
  cp -n <source> <destination>
  ```
- Move or rename:
  ```shell
  mv <source> <destination>
  ```
- Create a symbolic link:
  ```shell
  ln -s <path to be linked> <path where the link file will be created>
  ```

**Check if directory or file exists:**
- Directory:
  ```shell
  if [ -d <directory> ]; then <code>; fi
  ```
- File:
  ```shell
  if [ -f <file_path> ]; then <code>; fi
  ```

**Count lines in a file:**
```shell
wc -l <file_path>
```

**Get chmod value:**
```shell
stat --format '%a' <file_or_directory>
```

**Rename all files to lower case:**
```bash
for f in *; do mv "$f" "$f.tmp"; mv "$f.tmp" "$(echo $f | tr "[:upper:]" "[:lower:]")"; done
```

**Remove last extension from all files:**
```bash
for f in *; do mv "$f" "${f%.*}" ; done
```

**Display directory tree:**
```shell
tree
```

**Download files:**
- Download a file:
  ```shell
  wget [-O <destination path>] <http or ftp url>
  ```
- Mirror a URL:
  ```shell
  wget --mirror <http or ftp url>
  ```

**Save command output to file and stdout:**
```shell
<command> | tee -a "<logfile>"
```

**Convert Linux path to Windows path (WSL):**
```shell
$(pwd -P | sed 's/\/mnt\/c\//c:\\\\/' | sed 's/\//\\\\/g')
```

</details>

---

<details>
<summary><strong>Shell, Programs, and OS</strong></summary>

**Stop a program:**
```shell
ctrl-c
```

**Suspend a program:**
```shell
ctrl-z
```

**Run a program in background:**
```shell
<command> &
```

**Pass command output as file entry:**
```shell
<program> <(<command>)
```

**List background jobs:**
```shell
jobs
```

**Bring job to foreground:**
```shell
fg <job_number>
```

**Continue stopped job in background:**
```shell
bg <job_number>
```

**Execute without forking:**
```shell
exec <command>
```

**List all running processes:**
```shell
ps -aux
```

**List user running processes as tree:**
```shell
ps ajf
```

**List process info:**
```shell
ps -f [<process_id>]
```

**Show memory usage by process:**
```shell
ps -o pid,user,%mem,command ax | sort -b -k3 -r
```

**Kill a process:**
```shell
kill [-KILL] <process id>
```

**Display available signals:**
```shell
kill -l
```

**Send a signal to a program:**
```shell
kill -<signal_number> <pid>
```

**Exit the terminal:**
```shell
exit
```

**Exit terminal but leave programs running:**
```shell
disown -a && exit
```

**Show command info:**
```shell
info <command name>
```

**Display system info:**
```shell
screenfetch
```

**Find program location:**
```shell
which <program>
command -v <program>
```

**Show date and time:**
```shell
date
```

**Show date and time in UTC:**
```shell
date -u
```

**Restart the device:**
```shell
shutdown -r now
```

**Show OS version:**
```shell
uname -a
```

**Show Linux distribution:**
```shell
lsb_release -a
cat /etc/*-release
```

**Show libraries in use:**
```shell
/sbin/ldconfig -p
```

**Show specific library version:**
```shell
/sbin/ldconfig -p | grep stdc++.so
/sbin/ldconfig -p | grep libc.so
```

**Monitor processes:**
```shell
top
```

**Monitor specific process:**
```shell
top -p $(pgrep -d',' <process name>)
top -H <pid>
```

**Get PID of a process:**
```shell
pidof <process name>
```

**Get program version:**
```shell
<program name> --version
```

**Find program location:**
```shell
whereis <program>
```

**Check last command return code:**
```shell
echo $?
```

**Get output of last command:**
```shell
echo $(!!)
```

**List open files and processes:**
```shell
lsof
```

**Show virtual memory stats:**
```shell
vmstat
```

**List available commands, aliases, built-ins, keywords, functions:**
```shell
compgen -c
compgen -a
compgen -b
compgen -k
compgen -A function
```

**Install a package (Debian):**
```shell
apt-get install <package name>
```

**Remove a package (Debian):**
```shell
apt-get --purge remove <package name>
```

**Install a package (RPM):**
```shell
yum install <package name>
```

**Install a package (Smart):**
```shell
smart install <package name>
```

**Install a package (Tiny Core Linux):**
```shell
tce <package name>
```

**Show free/used memory:**
```shell
free
```

**Run a program every interval:**
```shell
watch [-n <interval_in_seconds>] <program to execute>
```

**Restart a service:**
```shell
sudo service <service name> restart
```

**Create and edit a file:**
```shell
cat > <file name>
```

**Find files:**
```shell
find <directory to start> -name "<file to find>"
find . -iname "*.<extension>" -type f
find <directory to start>
find <directory> -maxdepth 1 -name "<expression>"
find <start_directory> -iname "<old_name>*" | sed -e 'p;s/<old_name>/<new_name>/' | xargs -n2 mv
find <start_directory> -type d -name "<expression>"
find <start_directory> -ctime +<days>
find . -mindepth 1 -maxdepth 1 -type d -printf '%f\n'
find . -exec echo "Test: {}" \;
```

**Search and replace in files:**
```shell
grep --include=\*.{cpp,h} -rnw <source directory> -e "<text to find>"
grep --include=\*.{cpp,h} -rnwi <source directory> -e "<text to find>"
grep -rl <text_to_find_inside_file> <start_dirrectory> | xargs sed -i 's/<text_to_be_replaced>/<new_text>/g'
<command> | grep -i <search_word>
<command> | grep -v <unwanted_word>
```

**List symbols in libraries:**
```shell
nm <library name>
nm -C <library_path> | grep -i "<function_name>"
nm <library name> | grep -i "<function name>"
```

**Encrypt and mount folders:**
```shell
encfs <encrypted folder content> <mounted folder>
fusermount -u <mounted folder>
```

**Compress and decompress files:**
```shell
tar xjf <file path>
gzip <file path>
rsync -uve ssh <source directory>/* <user>@<remote computer (IP)>:<target directory>
rsync -vah <source_folder> <destination_folder>
```

**Network and SSH:**
- List TCP ports in use:
  ```shell
  netstat -lptu
  ```
- DHCP configuration:
  ```shell
  sudo dhclient -v [-r]
  ```
- Check if a port is open:
  ```shell
  wget -qO- portquiz.net:<Port>
  ```
- Quick test server:
  ```shell
  python -m SimpleHTTPServer <port number>
  ```
- Host mapping file:
  ```shell
  /etc/hosts
  ```
- SSH connect:
  ```shell
  ssh <user_name>@<computer>
  ssh <user_name>@<computer> -i <certificate_file>
  ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 <user_name>@<computer>
  ssh -L <local_port>:<server_ip>:<server_port> <user_name>@<domain> -N
  ```
- SCP copy:
  ```shell
  scp [-r] <source file path> <username>@<destination device (ip)>:<destination path>
  scp [-r] <username>@<source device (ip)>:<source path> <destination file path>
  ```

</details>

---

<details>
<summary><strong>How-to</strong></summary>

<details>
<summary><strong>How to Check if You Can Use apt-get (or Equivalent) on Your Distro</strong></summary>

#### How to Check if You Can Use apt-get (or Equivalent) on Your Distro
To determine if your Linux distribution supports `apt-get` (Debian/Ubuntu) or another package manager, follow these steps:

1. **Check your Linux distribution:**
   ```shell
   lsb_release -a
   # or
   cat /etc/*-release
   ```
   > 📌 **Tip:** Look for `ID` or `NAME` fields in the output to identify your distro.

2. **Check for available package managers:**
   Run the following commands to see which package manager is installed (the one that returns a path is available):
   ```shell
   which apt-get
   which yum
   which dnf
   which zypper
   which pacman
   which apk
   ```
   - **apt-get**: Debian, Ubuntu, and derivatives
   - **yum** or **dnf**: Red Hat, Fedora, CentOS
   - **zypper**: SUSE, openSUSE
   - **pacman**: Arch Linux
   - **apk**: Alpine Linux (**default package manager for Alpine**)

3. **Example:**
   If `which apk` returns a path (e.g., `/sbin/apk`), you are using Alpine Linux and should use `apk` to install packages:
   ```shell
   sudo apk add <package-name>
   ```
   If not, use the available package manager from the list above.

</details>

</details>

---

> 📌 **Tip:** For more advanced usage, see the full documentation or use `man <command>` for details on each command.

---






























































































































