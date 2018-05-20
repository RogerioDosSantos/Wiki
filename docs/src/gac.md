# GAC (Global Assembly Cache) #

`gacutil` : Global Assembly Caching Tool

`C:\Windows\assembly` : Location of the GAC Pre .Net 4.0

`C:\Windows\Microsoft.NET\assembly` : Location of the GAC pos .Net 4.0

`C:\Program Files\Microsoft SDKs\Windows\v6.0A\Bin` : Folder where is located the `gacutil` software.

`gacutil -u <Assembly Name>` : Uninstall an assembly from GAC.

`gacutil -l [<Assembly Name>]` : List the assemblies on the GAC.

`SxsTrace Trace -logfile:<logfile>.etl` : Monitors the Side by Side assembly load and log it on the log file.

`SxsTrace Parse -logfile:<log file>.etl -outfile:<log file>.txt` : Translate the log file from binary format to text format that can be used for diagnostic.


