# Application Verifier

Application Verifier (AppVerif.exe) is a *dynamic verification* tool for user-mode applications. This tool monitors application actions while the application runs, subjects the application to a variety of stresses and tests, and generates a report about potential errors in application execution or design.

Application Verifier can detect errors in any user-mode applications that are not based on managed code, including user-mode drivers. It finds subtle programming errors that might be difficult to detect during standard application testing or driver testing.

You can use Application Verifier alone or in conjunction with a user-mode debugger. This tool runs on Microsoft Windows XP and later versions of Windows. The current user must be a member of the Administrators group on the computer.

Application Verifier is not included in Debugging Tools for Windows. Application Verifier is included in the Windows Software Development Kit (SDK). You can find information about downloading and installing the Windows SDK [here](http://go.microsoft.com/fwlink/p?LinkID=271979). After you install the Windows SDK, Appverif.exe and Appverif.chm will be in Windows\System32. To start Application Verifier, open a Command Prompt window and enter appverif.
