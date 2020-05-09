# PowerShell

## PowerShell Core

Built on .NET Core and provides compatibility with scripts and modules targeting versions of PowerShell running on reduced footprint editions of Windows such as Nano Server and Windows IoT.

## PowerShell and .Net

Powershell allow you to access *.Net* libraries, meaning that you can consume those libraries using *Powershell* scripts. [Here]( ./iis.html ) for example, I use this capability to configure *IIS* using *PowerShell*.

This can be done is [Add-Type](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/add-type?view=powershell-6) which allows you to define a Microsoft .NET Core class in your PowerShell session.

The site [PInvoke](http://pinvoke.net/) allows you to search for various functions that are available as a C# signature to copy and paste into *PowerShell*

### Commands

`Get-Process`: List running processes.

`Start-Process <locaction>`: Start a process.

`Stop-Process <process_name>`: Stop a process. Note: You can get the process and store it in a variable using the command `Get-Process <name>`. (E.g.: `$ceview_process = Get-Process CEView`)

`<command> | Select-String -Pattern <filter>`: Equivalent to *grep*. E.g.: `Get-Process | Select-String -Pattern ceview`

`Get-WindowsFeature`: Inform the windows features installed in the system.

`Invoke-WebRequest [-OutFile <file_path>] "<url>" [-UseBasicParsing]`: Download a file. Equivalent to *wget*. By default, the `Invoke-WebRequest` command will use the *Internet Explorer* to parse the received return. The `UseBasicParsing` parameter can be used when the *Internet Explorer* is not available in the machine.

`Write-Host "text"`: Write a text to the console. Equivalent to *echo*

`[environment]::OSVersion.VersionString`: Return the version of the OS.

`Get-Content -Path <file_path>`: Read the content of a file. Similar to Linux `cat`

`Get-ChildItem -Path <start_path> -Recurse -ErrorAction SilentlyContinue -Force -Filter <find_expression>`: Find a file in sub folders. Equivalent to Linux `find` command

`Remove-Item -Path <directory> -Recurse`: Remove directory recursively. Equivalent to Linux `rm -r` command

`Copy-Item -Recurse -Path <source_folder> -Destination <destination_folder>`: Copy folder recursively

### How-to

#### Assign Variable

```ps1
#!/usr/bin/env pwsh
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

```ps1
#!/usr/bin/env pwsh
$input = Read-Host 'What is your name? '
Write-Output "Hello $input!"
```

#### Connect to a remote machine (Remote PowerShell Session)

Run Powershell elevated on the local machine.

```ps1
#!/usr/bin/env pwsh
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

#### PowerShell - Monitor and Close a process

The example below monitor and closed the *MyProcess* program.

```ps1
#!/usr/bin/env pwsh
# Get the process
$my_process = Get-Process MyProcess

# Close the process gracefully
$my_process.CloseMainWindow()

# Return true id the process was closed
$my_process.HasExited

# Stop Process
$my_process | Stop-Process

# Force Stop Process
$my_process | Stop-Process -Force
```

#### Add Windows Feature

You can get the enabled features using the command:

```ps1
#!/usr/bin/env pwsh
# List the enabled features
Get-WindowsFeature
```

This will show a list of enabled features and the *feature name*

![](http://tinyurl.com/ya2umltf)

To enable a feature you can use the following command:

```ps1
#!/usr/bin/env pwsh
# Install / Enable a specific feature
Install-WindowsFeature <feature_name>
```

#### PowerShell - Edit Registry

The example below set the registry value `[HKLM\Software\Microsoft\Fusion!EnableLog] (DWORD)` to 1

```ps1
#!/usr/bin/env pwsh
# Push the current location
Push-Location

# Go to the registry folder
Set-Location HKLM:\Software\Microsoft\Fusion

# List the current keys
Get-ItemProperty .

# Set the EnableLog key to 1
Set-ItemProperty . EnableLog 1 

# Go bach to the previous location
Pop-Location
```

Optionally you coud do it using a only command:

```ps1
#!/usr/bin/env pwsh
Set-ItemProperty -Path HKLM:\Software\Microsoft\Fusion -Name EnableLog -Value 1
```

#### PowerShell - Configure Proxy

To allow *Powershell* to work properly behind a proxy you can configure it as following:


```ps1
#!/usr/bin/env pwsh
# Get the current Powershell proxy configuration
netsh winhttp show proxy

# Import the proxy configuration available on the Internet Explorer
netsh winhttp import proxy source=ie

# Set the proxy configuration manually
netsh winhttp set proxy <proxy_url>:<proxy_port>
```

#### PowerShell - Set/Get Environment Variable

```ps1
#!/usr/bin/env pwsh
# Check if Environment Variable exist
Test-Path env:my_environment_variable

# Set Environment Variable
$env:my_environment_variable="test"

# Get Environment Variable
Get-ChildItem Env:my_environment_variable
```

#### Powershell - Change Environment Variable

The example below change the environment variable *PATH*

```ps1
#!/usr/bin/env pwsh
# Get the current PATH environment variable
$path = (Get-ItemProperty 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH).path

# Append the additional directory temp
$path = "${path};C:\temp\"

# Set the PATH environment variable with the new value
Set-ItemProperty 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH -Value $path
```

#### PowerShell - Execute commands from CMD

```cmd
# Execute Get-Date Command and Stop in case of error 
powershell -Command $ErrorActionPreference = 'Stop' ; Get-Date

# Pipe the Date Command (When piping use the syntax " & {<command>}"
powershell -Command $ErrorActionPreference = 'Stop' ; " & {Get-Date | Write-Host}"
```

#### Powershell - Manipulating Services

```ps1
#!/usr/bin/env pwsh
# List all services configuration and status 
sc.exe query

# List specific service configuration and status 
sc.exe query <service_name>

```

#### PowerShell - Find and Replace text in file

```ps1
#!/usr/bin/env pwsh
# Load the File
$ini = (Get-Content "C:\config.ini")

# Find and replace entry
$changed_ini = $ini | ForEach-Object { $_ -replace "Entry=(.*)", "Entry=NewValue" }

# Save the result to back to the file
$changed_ini | Set-Content "C:\config.ini"

# Replace entry in one line
(Get-Content "C:\config.ini") | ForEach-Object { $_ -replace "Entry=(.*)", "Entry=NewValue" } | Set-Content "C:\config.ini"
```

#### Powershell - Zip and Unzip 

```ps1
#!/usr/bin/env pwsh
# Zip files in directory. When unzip the folder will not be created
Compress-Archive -Path .\test\* -DestinationPath ./test1.zip

# Zip directory. When unzip the folder will be created
Compress-Archive -Path .\test\ -DestinationPath ./test2.zip

# Unzip
Expand-Archive -Path .\test1.zip -DestinationPath ./test1
Expand-Archive -Path .\test2.zip -DestinationPath ./test2
```

#### Powershell - Create Folder if does not exist

```ps1
#!/usr/bin/env pwsh
New-Item -ItemType Directory -Force -Path <path>
```

#### Powershell - Get MD5 of file

```ps1
#!/usr/bin/env pwsh
Get-FileHash <file_path> -Algorithm MD5
```

#### PowerShell - List Open Ports

```ps1
#!/usr/bin/env pwsh

# List all Port
netstat -an

# List all Port informing the process that is using it (Needs Elevation)
netstat -ab

# List all Port informing the process that is using it (Needs Elevation)
netstat -aon

# Find Process that is using a TCP/Port 
Get-Process -Id (Get-NetTCPConnection -LocalPort <port_number>).OwningProcess
```

### PowerShell - Execute shell script from URL without downloading a file 

```bash
# Execute bash without arguments
iwr -useb <ps1_url> | iex

# Execute bash that require arguments
iwr -useb <ps1_url> | iex -<parameter>:<value>
```

### PowerShell - Handle Command Line Arguments 

In *PowerShell* you can pass parameters by using the `-` character. As for example:

```ps1
command -parameter1 value1 -parameter2 value2
command -p1 value1 -parameter2 value2
```

You can handle the parameter passed by using the *param* session in your *PowerShell* script: 

```ps1
param (
    [Alias('p1')] [string]$parameter1 = "default_value1",
    [Parameter(Mandatory=$true)][string]$parameter2 = "default_value2",
 )
```

### PowerShell - Read file content into a variable 

```ps1
# Read all content of test.txt file into a variable
$content = [IO.File]::ReadAllText(".\test.txt")
```

### PowerShell - Start-Process examples

```ps1
# Execute Ping and Show the Stdio + StdError
$process = Start-Process -FilePath ping -ArgumentList localhost -NoNewWindow -PassThru -Wait
$process.StandardOutput
$process.StandardError

# Execute Ping and redirect the STDIO and StdError to a file 
$process = Start-Process -FilePath ping -ArgumentList localhost -NoNewWindow -PassThru -Wait -RedirectStandardOutput stdout.txt -RedirectStandardError stderr.txt
```

### Powershell - Certificate - Import Certificates Examples 

Importing Certificate with User Interface

```ps1
# Imports the certificate from the file into the root store of the current user.
Import-Certificate -FilePath "<cert_path>" -CertStoreLocation cert:\CurrentUser\Root

#Imports the certificate from the file into the root store of the Local Machine
Import-Certificate -FilePath "<cert_path>" -CertStoreLocation Cert:\LocalMachine\Root
```

Importing Certificate without User Interface 

```ps1
# Import certificate to the *Root Store* without asking anything to the user
$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2("<certificate_path (.cer)>")
$rootStore = Get-Item cert:\LocalMachine\Root
$rootStore.Open("ReadWrite")
$rootStore.Add($cert)
$rootStore.Close()
```

### PowerShell - Proxy - Set Global Proxy Parameters 

By default, the functions that uses *Web Requests* will use the *default proxy configuration* which is set in the *Internet Explorer Services*. However, on system that does not have the *Internet Explorer*, as for example the *windows servercore*, the *Proxy* will not be set even if the *proxy environment variable (E.g.: http_proxy, https_proxy)* is set. 

You can workaround this by setting the *default parameters values* for the functions that request *web connectivity* as shown below:

```ps1
if(Test-Connection <proxy_address> -Count 1 -Quiet)
{
    $global:PSDefaultParameterValues = @{
        'Invoke-RestMethod:Proxy'='http://<proxy_address>:<proxy_port>'
        'Invoke-WebRequest:Proxy'='http://<proxy_address>:<proxy_port>'
        '*:ProxyUseDefaultCredentials'=$true
    }
}
```

### PowerShell - Network - Test Network Connection to an URL

The function below allows you to test the network connection to an URL. If fails it will return the reason. 
E.g.: DNS Error: `Test-Connection: Testing connection to computer 'google.com' failed: Cannot resolve the target name.`

```ps1
Test-Connection <url> -Count 1
```

### PowerShell - Network - Verfy DNS configured

```ps1
Resolve-DnsName -Name $env:COMPUTERNAME -Type A
```

