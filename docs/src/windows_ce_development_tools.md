# Windows CE Development Tools #

## Windows Embedded Compact 2013 ##

Windows Embedded Compact 2013 supports only Compact Framework 3.9. 

Assemblies targeting previous Compact Framework versions should be recompiled even if they still run. If not recompiled, memory allocation problems can arise.

Compact Framework 3.9 is supported starting with Visual Studio 2012, so, for development, you should use VS2012 or later to be able to install the SDK.

You must install the Application Builder SDK from the device vendor to do any Compact Framework development.

## Windows CE 6.0 / 7.0 ##

Windows CE 7.0 supports Compact Framework 3.5 or Compact Framework 2.0 applications. 

Generally the devices are only delivered with Compact Framework 3.5.

## Windows CE 5.0 and Windows Mobile 5.0-6.x ##

Same requirements as Windows CE 7.0 with the addition that those platforms also support Compact Framework 1.0. 

To develop for Compact Framework 1.0, you should use Visual Studio 2005 Standard or Visual Studio 2003 Professional.

## Known Issues ##

### c1xx fatal error c1023 windows 10 ###


This message is displayed in some computers when compiling on Windows 10 using Visual Studio 2008.
The cause is that Visual Studio 2008 is not able to operate properly when ASLR (address space layout randomization) is enabled.
To thisable ASLR you can download EMET (Enhanced Mitigation Experience Toolkit) from [https://www.microsoft.com/en-us/download/details.aspx?id=50766](https://www.microsoft.com/en-us/download/details.aspx?id=50766).
Once you run the program disable the ASLR option and restart the computer.

