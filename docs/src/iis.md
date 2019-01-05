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

### IIS - Configure IIS using Powershell (Server Manager)

The [ServerManager Class](https://msdn.microsoft.com/en-us/library/microsoft.web.administration.servermanager(v=vs.90).aspx) is a *.Net object* that allows you to configure *IIS*. The example below shows how you can use the *ServerManager Class* with *PowerShell* to configure several items on *IIS*.

```ps
# Get Server Manager
$sm = Get-IISServerManager

# Remove Default Website
$sm.Sites.Remove($sm.Sites['Default Web Site'])
$sm.CommitChanges()

# Adding New Website (my_website)
$sm.Sites.Add('my_website', 'http', '*:80:', 'C:\inetpub\wwwroot')
$sm.CommitChanges()

# Configure Mime Types
$mime = $sm.GetWebConfiguration('my_website').GetSection('system.webServer/staticContent').GetCollection().CreateElement('mimeMap')
$mime['fileExtension'] = '.*'
$mime['mimeType'] = 'application/my_application'
$sm.GetWebConfiguration('my_website').GetSection('system.webServer/staticContent').GetCollection().Add($mime)
$sm.CommitChanges()

# Creating Application Pool
$sm.ApplicationPools.Add('my_application_pool')
$sm.ApplicationPools['my_application_pool'].ManagedRuntimeVersion = 'v4.0'
$sm.ApplicationPools['my_application_pool'].Enable32BitAppOnWin64 = 1
$sm.ApplicationPools['my_application_pool'].QueueLength = 4000
$sm.ApplicationPools['my_application_pool'].Cpu.ResetInterval = New-TimeSpan -Seconds 0
$sm.ApplicationPools['my_application_pool'].ProcessModel.IdentityType = 'NetworkService'
$sm.ApplicationPools['my_application_pool'].ProcessModel.IdleTimeout = New-TimeSpan -Minutes 10080
$sm.ApplicationPools['my_application_pool'].ProcessModel.LoadUserProfile = 1
$sm.CommitChanges()

# Creating Application
$sm.Sites['my_website'].Applications.Add('/my_application', 'C:\inetpub\wwwroot\my_application')
$sm.Sites['my_website'].Applications['/my_application'].ApplicationPoolName = 'my_application_pool'
$sm.CommitChanges()

# Creating Web Virtual Directory 
$sm.Sites['my_website'].Applications['/'].VirtualDirectories.Add('/my_virtual_dir', 'C:\workspace\my_dir')
$sm.CommitChanges()
```

**Tip** : You can get the name of the *IIS property* you would like to edit from the *IIS user interface*. E.g.:

![](http://tinyurl.com/y7e4w4y3)

### IIS - Debug Application Pool Process (Work Proccess)

```ps
# Attach GFlags to monitor dependencies
C:\windows_10_debuggers\x64\gflags.exe -i w3wp +sls

# Get the IIS Work Process (w3wp) Information
# Note: The w3wp proccess will only appear after IIS executed the application pool at least once.
Get-Process w3wp

# Attach CDB to the w3wp process
cdb -p <process_id>

# Stop/Start IIS Execution
iisreset.exe /stop
iisreset.exe /start
```

Look [here]( ./cdb.html ) for more information on how work with *CDB*
