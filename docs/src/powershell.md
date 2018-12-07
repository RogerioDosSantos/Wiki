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


