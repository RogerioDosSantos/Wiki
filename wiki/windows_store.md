# Windows Store #

 Microsoft is pushing more and more the Windows Store as the default way to install applications. There is a commercial aspect but also a strong technical aspect related to security. 

Application from the store does not run directly on the OS, but it run in its own containerized environment with its own registry for example. Note that even containerized, other application will still be able to talk with us and vice-versa. E.g.: ActiveX, drivers, device drivers, etc, will still work.

They have a project called "Desktop bridge" that allow any application, including Win32 applications to be containerized and available on the store. They already converted the Microsoft office using it. Several other companies like Adobe, Evernote, etc., are already doing it and they are signalizing that their goal is that all Windows based application to be running in this way. The Windows S for instance will already lock standard Desktop application to run it on the free version.

Some of the advantages to use the store would be among other continuous delivery of our hotfixes, patches and service packs for example.

## Steps to convert a regular setup using the Desktop Bridge Project ##


- Install the Windows 10 creator update 
- Install the Desktop App Converter tool (https://www.microsoft.com/en-us/store/p/desktopappconverter/9nblggh4skzw)
- Install Microsoft Windows 10 SDK (https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk)
- Enable Windows Feature 'Containers'
- Download a base image. (http://aka.ms/converterimages)
- Ensure that your setup can run silently.
- Call the following commands to prepare the Desktop Application Converter:
  ````
  Set-ExecutionPolicy bypass
  DesktopAppConverter.exe -Setup -BaseImage ".\BaseImage-14393.wim" -Verbose
  ````
- Call the following Desktop App Converter command:
  `DesktopAppConverter.exe -Installer <your silently setup command> -Destination <destination of the Package> -PackageName "<name of your Package>" -Publisher "CN=<publisher_name>" -Version <version of the Package> -MakeAppx` E.g.: `DesktopAppConverter.exe -Installer C:\MySetup.MSI -Destination C:\MyAppxFolder -PackageName "MyApp" -Publisher "CN=<publisher_name>" -Version 1.0.0.0 -MakeAppx`


