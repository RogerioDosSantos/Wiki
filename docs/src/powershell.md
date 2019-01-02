# PowerShell

## PowerShell Core

Built on .NET Core and provides compatibility with scripts and modules targeting versions of PowerShell running on reduced footprint editions of Windows such as Nano Server and Windows IoT.

### Commands

`Get-Process`: List running processes.

`Start-Process <locaction>`: Start a process.

`Stop-Process <name>`: Stop a process. 

`<command> | Select-String -Pattern <filter>`: Equivalent to *grep*. E.g.: `Get-Process | Select-String -Pattern ceview`

`Get-WindowsFeature`: Inform the windows features installed in the system.

`Invoke-WebRequest -OutFile <file_path> "<url>"`: Download a file. Equivalent to *wget*

`Write-Host "text"`: Write a text to the console. Equivalent to *echo*

`[environment]::OSVersion.VersionString`: Return the version of the OS.

`Get-Content -Path <file_path>`: Read the content of a file. Similar to Linux `cat`

`Get-ChildItem -Path <start_path> -Filter <find_expression> -Recurse -ErrorAction SilentlyContinue -Force`: Find a file in sub folders. Equivalent to Linux `find` command

### How-to

#### Assign Variable

```ps
$value = "string value"
$value              # Displays string value

$value = 1
$value              # Displays 1

$value = 1 + 1
$value              # Displays 2

$value = 1.9
[int32]$value       # Displays 2
[float]$value       # Displays 1.9
[string]$value      # Displays 1.9
[boolean]$value     # Displays True
[datetime]$value    # Displays January 9 ...

$value = '$(1 + 2)'
Write-Output $value    # Displays $(1 + 2)

$value = "$(1 + 2)"
Write-Output $value    # Displays 3
```

#### Get user input

```ps
$input = Read-Host 'What is your name? '
Write-Output "Hello $input!"
```

#### Connect to a remote machine (Remote PowerShell Session)

Run Poweshell elevated on the local machine.

```ps
# Start the Remote Management Service
net start WinRM

# Add the remote machine in the list of trusted hosts
$ip = "<ip_of_the_remote_machine>"
Set-Item wsman:\localhost\client\TrustedHosts "$ip"

# Or to allow all machines: Set-Item wsman:\localhost\client\TrustedHosts "*"
# Or to allow multiple machines: Set-Item wsman:\localhost\client\TrustedHosts "$ip1,$ip2,..."

# Open the remote PowerShell session (Remote Machine)
$user = "$ip\<user_of_the_remote_machine>"
Enter-PSSession -ComputerName $ip -Credential $user

# Open the remote PowerShell session (Remote Container)
$container_id = "$(docker inspect --format='{{.Id}}' <container_name>)"
Enter-PSSession -ContainerId $container_id

# Open the remote PowerShell session (Remote Container) as Administrator
$container_id = "$(docker inspect --format='{{.Id}}' <container_name>)"
Enter-PSSession -ContainerId $container_id -RunAsAdministrator
```

#### Monitor and Close a process

The example below monitor and closed the *MyProcess* program.

```ps
# Get the process
$my_process = Get-Process MyProcess

# Close the process gracefully
$my_process.CloseMainWindow()

# Return true id the process was closed
$my_process.HasExited


# For stop the process
$my_process | Stop-Process -Force
```

#### Add Windows Feature

You can get the enabled features using the command:

```ps
# List the enabled features
Get-WindowsFeature
```

This will show a list of enabled features and the *feature name*

![](http://tinyurl.com/ya2umltf)

To enable a feature you can use the following command:

```ps
# Install / Enable a specific feature
Install-WindowsFeature <feature_name>
```



