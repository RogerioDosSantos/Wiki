# IIS

## How-to

### IIS - Enable IIS into WindowsServerCore

```ps
# Enable IIS
Add-WindowsFeature Web-Server

# Install support for ASP
Install-WindowsFeature Web-Asp-Net45
```

### IIS - Backup and Restore Configuration

Run the command below with Administrator permissions

```ps
# Backup IIS configuration.
%windir%\system32\inetsrv\appcmd.exe add backup "<backup_name>"

# Restore IIS configuration.
%windir%\system32\inetsrv\appcmd.exe restore backup "<backup_name>"

# Remove Backup.
%windir%\system32\inetsrv\appcmd.exe delete backup "<backup_name>"
```

### IIS - Start and Stop Execution

```ps
# Stop Execution
iisreset.exe /stop

# Start Execution
iisreset.exe /start

# Restart Execution
iisreset.exe /restart
```
