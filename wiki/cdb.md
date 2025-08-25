# CDB

[CDB](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/cdb-command-line-options) stands for **Console DeBug** is a *Windows* application equivalent to [Windbg]( ./windbg.html ) however only requires a *console* to run.

## Commands

### Command Prompt

`cdb -p <process_id>`: Attach to a process ID

`cdb -pn <process_name>`: Attach to process using process name

`cdb -pn <process_name`: Attach to process non-invasively

### CDB Command Window

`x *!`: List of all the modules in the process. (Equivalent to Modules)

`kb` : Get the *Stack Trace*

`g`: Continue the execution

`q`: Exit the debug session.

`p`: Step into

## How-to

### CDB - Get CDB Binaries from Docker image

The image below has the `cdb.exe` and its dependencies into the folder `C:/workspace/windows_10_debuggers/<platform>`

`rogersantos/windows_core_debugger:windows`

### CDB - Attach to process

```ps
# Attach to a process using ProcessID
cdb -p <process_id>

# Attach to process using process name
cdb -pn <process_name>

# Attach to process non-invasively
cdb -p <process_id> -pvr
```


