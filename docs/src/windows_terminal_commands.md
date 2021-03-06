# Windows Terminal Commands

`<command> > "<file directory>\Log_%date:~10,4%_%date:~4,2%_%date:~7,2%__%time:~0,2%_%time:~3,2%_%time:~6,2%.txt"` : Send the output to a Log files that will have the name `Log_YYYY_MM_DD__HH_MM_SS.txt`

`net use <driveletter>: \\<server>\<sharename> /USER:<domain>\<username> <password> /PERSISTENT:YES` : Allow to map a windows network using the credentials needed.

`runas /user:<user> <command>` : Run as specific command on windows using a specific user. 

`net use \\<server name> /u:<user domain>\<username>` : Force to connect to a network shared folder using an specific user.

`setx <environment variable> <value>` : Set an environment variable in the registry so it can be available to all programs. E.g.: `setx HTTPS_PROXY http://gateway.zscaler.net:9480`

`echo %<environment variable>%` : Read an environment variable

`netstat -an |find /i "listening"` : Find all open ports being listened on your computer

`netstat -a -o` : Find all ports being in use and show the *PID* of the program used it.

## Powershell only commands

`Invoke-RestMethod -Uri <url> | <answer manipulation>` : Send a rest command and manipulate the answer. E.g.: `Invoke-RestMethod -Uri https://blogs.msdn.microsoft.com/powershell/feed/ | Format-Table -Property Title, PubDate`

## Visual Studio Commands

`lib /list <lib file name>` : Verify if a library was compiled statically or if is an import library that depends on an `.dll`. If the library is a statically linked library it will show the `.obj` files inside it. Otherwise will show you the `.dll` it is linking with.

## How-to

### Bat - Read Variables

```bat
# Read first parameter
echo "%1"

# Read first parameter removing quotes
echo "%~1"
```
