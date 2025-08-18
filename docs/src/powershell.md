# PowerShell

PowerShell is a powerful command-line shell and scripting language built on .NET, designed for system administration, automation, and configuration management across platforms.

---

## Table of Contents
- [PowerShell Core](#powershell-core)
- [PowerShell and .NET](#powershell-and-net)
- [PowerShell Constrained Language](#powershell-constrained-language)
- [Common Commands](#common-commands)
- <details>
    <summary>How-to Guides</summary>
    
    - [Assign Variable](#assign-variable)
    - [Get User Input](#get-user-input)
    - [Reboot a Machine Remotely](#reboot-a-machine-remotely)
    - [Connect to a Remote Machine (Remote PowerShell Session)](#connect-to-a-remote-machine-remote-powershell-session)
    - [Monitor and Close a Process](#monitor-and-close-a-process)
    - [Add Windows Feature](#add-windows-feature)
    - [Edit Registry](#edit-registry)
    - [Configure Proxy](#configure-proxy)
    - [Set/Get Environment Variable](#setget-environment-variable)
    - [Change Environment Variable](#change-environment-variable)
    - [Execute Commands from CMD](#execute-commands-from-cmd)
    - [Manipulating Services](#manipulating-services)
    - [Find and Replace Text in File](#find-and-replace-text-in-file)
    - [Zip and Unzip](#zip-and-unzip)
    - [Create Folder if Not Exists](#create-folder-if-not-exists)
    - [Get MD5 of File](#get-md5-of-file)
    - [List Open Ports](#list-open-ports)
    - [Execute Shell Script from URL Without Downloading a File](#execute-shell-script-from-url-without-downloading-a-file)
    - [Handle Command Line Arguments](#handle-command-line-arguments)
    - [Read File Content into a Variable](#read-file-content-into-a-variable)
    - [Start-Process Examples](#start-process-examples)
    - [Certificate - Import Certificates Examples](#certificate---import-certificates-examples)
    - [Proxy - Set Global Proxy Parameters](#proxy---set-global-proxy-parameters)
    - [Network - Test Network Connection to a URL](#network---test-network-connection-to-a-url)
    - [Network - Verify DNS Configured](#network---verify-dns-configured)
    - [Modules - Import a PowerShell Module / Function from a File](#modules---import-a-powershell-module--function-from-a-file)
    - [Reload PowerShell Session to Refresh Environment Variables](#reload-powershell-session-to-refresh-environment-variables)
    - [Get List of Commands Executed in a Session](#get-list-of-commands-executed-in-a-session)

  </details>
- [References](#references)

---

## PowerShell Core

Built on **.NET Core**, PowerShell Core provides compatibility with scripts and modules targeting reduced-footprint editions of Windows, such as Nano Server and Windows IoT.

---

## PowerShell and .NET

PowerShell allows you to access **.NET libraries**, enabling you to consume those libraries using PowerShell scripts. For example, you can configure [IIS using PowerShell](./iis.html).

- Use [`Add-Type`](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/add-type?view=powershell-6) to define a .NET class in your session.
- The site [PInvoke](http://pinvoke.net/) provides C# signatures for various functions, which can be used in PowerShell.

---

## PowerShell Constrained Language

**PowerShell Constrained Language** is a mode designed to support day-to-day administrative tasks while restricting access to sensitive language elements that can invoke arbitrary Windows APIs.

To set Constrained Language mode:
```powershell
$ExecutionContext.SessionState.LanguageMode = "ConstrainedLanguage"
```

> ?? **Note**: If a script fails in "ConstrainedLanguage" but not in "FullLanguage", it uses functions that require full language mode.

---

## Common Commands

Below are frequently used PowerShell commands, each with a brief description:

| Command | Description |
|---------|-------------|
| `Get-Process` | List running processes |
| `Start-Process <location>` | Start a process |
| `Stop-Process <process_name>` | Stop a process |
| `<command> \| Select-String -Pattern <filter>` | Filter output (like `grep`) |
| `Get-WindowsFeature` | List installed Windows features |
| `Invoke-WebRequest [-OutFile <file_path>] "<url>" [-UseBasicParsing]` | Download a file (like `wget`) |
| `Write-Host "text"` | Write text to the console (like `echo`) |
| `[environment]::OSVersion.VersionString` | Get OS version |
| `Get-Content -Path <file_path>` | Read file content (like `cat`) |
| `Get-ChildItem -Path <start_path> -Recurse -ErrorAction SilentlyContinue -Force -Filter <find_expression>` | Find files (like `find`) |
| `Remove-Item -Path <directory> -Recurse` | Remove directory recursively (like `rm -r`) |
| `Copy-Item -Recurse -Path <source_folder> -Destination <destination_folder>` | Copy folder recursively |

---

## How-to Guides

### Assign Variable

Demonstrates variable assignment and type casting in PowerShell:
```powershell
$value = "string value"
$value = 1
$value = 1 + 1
$value = 1.9
[int32]$value   # 2
[float]$value   # 1.9
[string]$value  # 1.9
[boolean]$value # True
[datetime]$value # January 9 ...
$value = '$(1 + 2)'
Write-Output $value    # Displays $(1 + 2)
$value = "$(1 + 2)"
Write-Output $value    # Displays 3
```

### Get User Input

Prompt for user input:
```powershell
$input = Read-Host 'What is your name? '
Write-Output "Hello $input!"
```

### Reboot a Machine Remotely

```powershell
net use \\<machine_name> /u:<domain>\<user>
shutdown /r /f /m \\<machine_name> -t 0
```

### Connect to a Remote Machine (Remote PowerShell Session)

```powershell
# Start the Remote Management Service
net start WinRM

# Add the remote machine in the list of trusted hosts
$ip = "<ip_of_the_remote_machine>"
Set-Item wsman:\localhost\client\TrustedHosts "$ip"

# Open the remote PowerShell session (Remote Machine)
$user = "$ip\<user_of_the_remote_machine>"
Enter-PSSession -ComputerName $ip -Credential $user
```

### Monitor and Close a Process

```powershell
$my_process = Get-Process MyProcess
$my_process.CloseMainWindow()
$my_process.HasExited
$my_process | Stop-Process
$my_process | Stop-Process -Force
```

### Add Windows Feature

List enabled features:
```powershell
Get-WindowsFeature
```

Enable a feature:
```powershell
Install-WindowsFeature <feature_name>
```

### Edit Registry

Set a registry value:
```powershell
Push-Location
Set-Location HKLM:\Software\Microsoft\Fusion
Set-ItemProperty . EnableLog 1 
Pop-Location
```
Or in one line:
```powershell
Set-ItemProperty -Path HKLM:\Software\Microsoft\Fusion -Name EnableLog -Value 1
```

### Configure Proxy

```powershell
netsh winhttp show proxy
netsh winhttp import proxy source=ie
netsh winhttp set proxy <proxy_url>:<proxy_port>
```

### Set/Get Environment Variable

```powershell
Test-Path env:my_environment_variable
$env:my_environment_variable="test"
Get-ChildItem Env:my_environment_variable
```

### Change Environment Variable

```powershell
$path = (Get-ItemProperty 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH).path
$path = "${path};C:\\temp\\"
Set-ItemProperty 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH -Value $path
```

### Execute Commands from CMD

```cmd
powershell -Command $ErrorActionPreference = 'Stop' ; Get-Date
powershell -Command $ErrorActionPreference = 'Stop' ; " & {Get-Date | Write-Host}"
```

### Manipulating Services

```powershell
sc.exe query
sc.exe query <service_name>
```

### Find and Replace Text in File

```powershell
$ini = (Get-Content "C:\\config.ini")
$changed_ini = $ini | ForEach-Object { $_ -replace "Entry=(.*)", "Entry=NewValue" }
$changed_ini | Set-Content "C:\\config.ini"
(Get-Content "C:\\config.ini") | ForEach-Object { $_ -replace "Entry=(.*)", "Entry=NewValue" } | Set-Content "C:\\config.ini"
```

### Zip and Unzip

```powershell
Compress-Archive -Path .\test\* -DestinationPath ./test1.zip
Compress-Archive -Path .\test\ -DestinationPath ./test2.zip
Expand-Archive -Path .\test1.zip -DestinationPath ./test1
Expand-Archive -Path .\test2.zip -DestinationPath ./test2
```

### Create Folder if Not Exists

```powershell
New-Item -ItemType Directory -Force -Path <path>
```

### Get MD5 of File

```powershell
Get-FileHash <file_path> -Algorithm MD5
```

### List Open Ports

```powershell
netstat -an
netstat -ab
netstat -aon
Get-Process -Id (Get-NetTCPConnection -LocalPort <port_number>).OwningProcess
```

### Execute Shell Script from URL Without Downloading a File

- `iwr = Invoke-WebRequest`
- `iex = Invoke-Expression`

```powershell
iwr -useb <ps1_url> | iex
iwr -useb <ps1_url> | iex -<parameter>:<value>
```

### Handle Command Line Arguments

```powershell
param (
    [Alias('p1')] [string]$parameter1 = "default_value1",
    [Parameter(Mandatory=$true)][string]$parameter2 = "default_value2",
 )
```

### Read File Content into a Variable

```powershell
$content = [IO.File]::ReadAllText(".\test.txt")
```

### Start-Process Examples

```powershell
$process = Start-Process -FilePath ping -ArgumentList localhost -NoNewWindow -PassThru -Wait
$process.StandardOutput
$process.StandardError
$process = Start-Process -FilePath ping -ArgumentList localhost -NoNewWindow -PassThru -Wait -RedirectStandardOutput stdout.txt -RedirectStandardError stderr.txt
```

### Certificate - Import Certificates Examples

Import certificate with user interface:
```powershell
Import-Certificate -FilePath "<cert_path>" -CertStoreLocation cert:\CurrentUser\Root
Import-Certificate -FilePath "<cert_path>" -CertStoreLocation Cert:\LocalMachine\Root
```

Import certificate without user interface:
```powershell
$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2("<certificate_path (.cer)>")
$rootStore = Get-Item cert:\LocalMachine\Root
$rootStore.Open("ReadWrite")
$rootStore.Add($cert)
$rootStore.Close()
```

### Proxy - Set Global Proxy Parameters

```powershell
if(Test-Connection <proxy_address> -Count 1 -Quiet)
{
    $global:PSDefaultParameterValues = @{
        'Invoke-RestMethod:Proxy'='http://<proxy_address>:<proxy_port>'
        'Invoke-WebRequest:Proxy'='http://<proxy_address>:<proxy_port>'
        '*:ProxyUseDefaultCredentials'=$true
    }
}
```

### Network - Test Network Connection to a URL

```powershell
Test-Connection <url> -Count 1
```

### Network - Verify DNS Configured

```powershell
Resolve-DnsName -Name $env:COMPUTERNAME -Type A
```

### Modules - Import a PowerShell Module / Function from a File

```powershell
Import-Module <file_path> [-Force]
```

### Reload PowerShell Session to Refresh Environment Variables

```powershell
# Clear the current session variables
Remove-Variable -Name * -ErrorAction Ignore

# Re-import the modules
Import-Module $PROFILE.AllImportedModules

# Forcing the session to reload the profile
. $PROFILE

# Verifying the variables are loaded
Get-Variable
```

### Get List of Commands Executed in a Session

You can view the history of commands executed in your current PowerShell session using the following command:

```powershell
Get-History
```

To display the history with command numbers and details:
```powershell
Get-History | Format-Table -AutoSize
```

To export the session history to a file:
```powershell
Get-History | Export-Csv -Path "history.csv" -NoTypeInformation
```

To re-run a previous command by its ID:
```powershell
Invoke-History <Id>
```

> **Note:** The history is session-specific and will be cleared when you close the session unless you explicitly save it.

### Capture Commands and Outputs with Custom Logging

To log both the commands you run and their outputs in a PowerShell session, you can use built-in transcript logging:

```powershell
Start-Transcript -Path "session.log" -Append
# ...run your commands...
Stop-Transcript
```

This will record all input and output to the specified log file.

---

## References

- [PowerShell Constrained Language Mode](https://devblogs.microsoft.com/powershell/powershell-constrained-language-mode/)

---

