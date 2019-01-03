# IIS

## How-to

### Backup and Restore IIS Configuration

Run the command below with Administrator permissions

```ps
# Backup IIS configuration.
%windir%\system32\inetsrv\appcmd.exe add backup "<backup_name>"

# Restore IIS configuration.
%windir%\system32\inetsrv\appcmd.exe restore backup "<backup_name>"

# Remove Backup.
%windir%\system32\inetsrv\appcmd.exe delete backup "<backup_name>"
```
