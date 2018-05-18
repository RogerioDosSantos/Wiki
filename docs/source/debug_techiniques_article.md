# Debugging Techniques Article

**Credit**: This is a reproduction of a great series of articles on *Code Project* website done by [Shailesh]

# Part 1: Windows Debugging Techniques - Debugging Application Crash (Windbg) 

Pre-Requisites
--------------

To do the practical assignments explained in the article below, the following is required:

1.  [Procdump](http://technet.microsoft.com/en-in/sysinternals/dd996900.aspx)
2.  [Debugging Tools for Windows](http://msdn.microsoft.com/en-us/library/windows/hardware/ff551063(v=vs.85).aspx)

Background
----------

While using or working on Windows applications, we all have seen applications stop working for unknown reasons. A General Dialog, which we all have seen, is somewhat similar to this.

![](https://www.codeproject.com/KB/testing/707488/AppCrashDlg.png)

When we see this, we generally select the option "Close Program" and then try to launch the application again. If the same repeats and it is a third party application, then we report the issue and wait for a solution.

Now, we will move to the other side of the coin, which is the team that will be analyzing this issue and give a solution as soon as possible, because this has stopped production on the customer site. Let's go into a little bit of detail and see step-by-step why exactly the application crashed, why it happened, and how can we solve this.

### Definition

An application crash is an unexpected situation which stops the normal functioning of the program. Let's consider the following source code for example:

Hide   Copy Code

int main()
{
	int *p = NULL;
	cout<<"This is Start";
	*p = 10;
	cout<<"This is End";
	return 0;
}

When we execute this sample, we get the same dialog as shown above related to the Application Crash. What is the reason for this application crash, "`*p=10`", "assigning value to an unallocated pointer" or in other words "assigning value to a NULL pointer". We can say this since we have the code and it is small enough to figure out the source of the problem. Identifying this issue in millions of lines of code is not easy and fixing it is far more difficult. So this boils down to the conclusion that we need to have some technique by which we could get to the precise root cause of the issue (or at least around it) without digging through the entire code.

Debugging Techniques
--------------------

There are many different techniques used to identify why an app crashes, but some things remain common across different techniques.

### Step 1: Identify the Faulty Module

Identification of faulty module can be done using the event viewer. Consider our current example, i.e., *AppCrash.exe*, once it has crashed, it would have generated an event in the event viewer. Go to "Run" type "`eventvwr`":

![](https://www.codeproject.com/KB/testing/707488/AppCrashEvtVwr.png)

Have a look at the Text written in the General Tab, there are two interesting points in that:

1.  **Faulting Application Name**: Indicates the application which is faulty. In this case, it is *AppCrash.exe*.
2.  **Faulting Module Name**: Indicates which module in this application or executable has misbehaved. In this case (again), it is *AppCrash.exe*.

This makes it clear that the issue resides in *AppCrash.exe*. If the faulting module had been, for example, *AppCrashLib.DLL",* then that would have been the culprit and we would have had to debug that.

Another important point is Exception Code this explains what exactly this error means. In the current case, exception code is 0xC0000005 which means Access Violation, which means application is trying to access invalid memory location. To get the list of all the Exception codes, please refer to the link below:

-   [](http://msdn.microsoft.com/en-us/library/cc704588(d=lightweight,l=en-us,v=PROT.10).aspx)<http://msdn.microsoft.com/en-us/library/cc704588(d=lightweight,l=en-us,v=PROT.10).aspx>[[^](http://msdn.microsoft.com/en-us/library/cc704588(d=lightweight,l=en-us,v=PROT.10).aspx "New Window")]

This really helps in nailing down the issue.

Step 2: Take the Crash Dump

Crash dump basically contains the current working state of the program which has terminated abnormally. Crash dump can also give us a complete state of the current memory, i.e., RAM, which can be used for analyzing the problem. The simplest way to take the crash dump is "`procdump`." `procdump `should be configured before the application crashes, *procdump -ma -x c:\dumps "E:\Study\Windows Internals\Training\Sample Code\AppCrash\x64\Release\AppCrash.exe"*. This is one of the most basic examples of `procdump`, more options can be explored. With this option, it will launch the process and it will take the full memory dump when the application crashes and save it to *c:\dumps*.

### Step 3: Analyze the Crash Dump

Now that we have got the dump, we need to analyze the dump. The best way to analyze the dump is "`Windbg`."`WinDbg `is the father of all the debugging tools available (as of the writing of this article) on Windows. We will not get into the intricacies of `Windbg`, this is out of scope of this article. We will be concentrating only on how we analyze the dumps with `Windbg`. To start analyzing the dump, we need the pdb files corresponding to the executable version, which has crashed. pdb is nothing but program database, it contains all the debugging information required for debugging an application. The only constraint is the pdb and executable should be of the same timestamp or else the program database symbols do not match and hence we cannot analyze the dump.

In the next step, we launch the `Windbg `and configure the pdb files as shown below:

![](https://www.codeproject.com/KB/testing/707488/WindbgSymbolConfig.png)

1.  In `Windbg`, Goto File->Open Crash Dump, select the Dump File and click on open:

    ![](https://www.codeproject.com/KB/testing/707488/OpenCrashDump.png)

2.  It will show the below screen after dump file is being loaded successfully:

    ![](https://www.codeproject.com/KB/testing/707488/DumpFileLoad.png)

3.  Just go to the command window and "`!analyze -v`" like below:

    ![](https://www.codeproject.com/KB/testing/707488/DumpFileLoad.png)

4.  After typing the above command, we do get the below output:

    ![](https://www.codeproject.com/KB/testing/707488/DumpAnalysis.png)

Now, we need to concentrate on different parameters to identify the issue. If we see the stack trace, it says the crash happened in *Appcrash.exe*, in function main at Offset of 0x39. This does not give us the exact faulty source code which may have caused the problem.

Let's check what the below statement says, **AppCrash!main+39 [e:\study\windows internals\training\sample code\appcrash\appcrash\source.cpp @ 9]**. This gives us the exact location where the crash happened and the lines below give us more details:

Hide   Copy Code

FAULTING_SOURCE_CODE:
     5: {
     6: 	int *p = NULL;
     7: 	cout<<"This is Start";
     8: 	*p = 10;
>    9: 	cout<<"This is End";
    10: 	return 0;
    11: }

In the above analysis, the crash actually happened at line number 8, but `windbg `points to line number 9. This is due to optimizations which are enabled during the compilation. So if I want to identify the exact line which is having the issue, it is line number 8. Since the NULL pointer is being assigned a value, I tried to write to a location which does not exist.

### Step 4: Fix the Issue and Release

Since we know the issue, we can now allocate the memory for the pointer and then assign the value. So the new code would be:

Hide   Copy Code

int main()
{
	int *p = NULL;
	cout<<"This is Start";
	p = new(std::nothrow)int;
	if(p == NULL)
	{
		return false;
	}
	*p = 10;
	cout<<"This is End";
	return 0;
}

Optimizations
-------------

We discussed that due to optimizations being set, we were not able to get the exact point where the crash is happening. Let's discuss optimizations some more.

![](https://www.codeproject.com/KB/testing/707488/Optmizations.png)

Optimizations mean to what level we are asking the compiler to do optimizations. As we move up the levels like "Full Optimization" means that binary size would be lesser and less debugging information would be there with the pdb file. As we move more down the level, for example, "Disable Optimization," we will have more debugging information and a larger sized binary and pdb. Similarly, if we build the binary in debug mode, we do get more debugging information and more the size of binary.

We see that, overall, there are four options available to be configured. Normally, the option selected in most projects is "Maximize Speed," which is enough for debugging the crashes being reported by customer. In the above mentioned example, if we disable the optimizations, then we do get the following result.

![](https://www.codeproject.com/KB/testing/707488/DisableOptimizations.png)

So here, we see that it points exactly to the position where the problem is i.e `*p=10`. This happens since the debugging information is sufficient to identify the root cause of the issue. So as a rule of thumb, when we make the release, we should maintain the pdb files so that they can be used to analyze the crash dumps on customer site.

If the issue is reproduced locally, then it is recommended that optimization be disabled, then rebuild the EXE and collect the latest dumps and analyze them to make life easier. Debug mode is not advisable, since there are lot of issues which will not occur in debug mode.

pdb Files
---------

For any unmanaged code which is being built, pdb files are being created along with EXE files. These pdb files contain the debugging information, which is necessary for debugging any issues. In other words, this file is also known as **Symbol file**. Symbol File contains different symbols which are useful for debugging. To name few of them Local Variables,Global Variables, Function names, Source Line numbers, etc. Each of this information is known as symbol. There are 2 Types of Symbols available:

1.  **Private Symbols**: This includes Functions, Local Variables,Global Variables, user defined data structures, source line numbers.
2.  **Public Symbols**: Functions, global Variables.

Public Symbols contain relatively very less information as compared to private symbols. Public symbols contain only that information which can be viewed across different files. So this calls out that local variables, will not be available as part of public symbols. Even most of the functions in Public symbols will have decorated names.

Debugging with private symbols will even give line number of where the problem is (as explained in the above example), but this will not be the case with public symbols.

Most of the companies do maintain two symbol servers, one private for internal use and public symbols for external distribution.

By default, Visual Studio Build generates Private Symbols, to make it public add the flag /pdbstripped under linker section. Follow [this link](http://msdn.microsoft.com/en-us/library/y87kw2fd.aspx) for more details.

# Part 2: Windows Debugging Techniques - Debugging Application Crash (DebugDiag, AppVerifier)

Pre-Requisites
--------------

To do the practical assignments explained in the article below, the following are required:

1.  [DebugDiag](http://www.microsoft.com/en-in/download/details.aspx?id=26798)
2.  [Application Verifier](http://www.microsoft.com/en-in/download/details.aspx?id=20028)

Background
----------

This article will explain other techniques in the dump analysis. These techniques are a lot simpler than windbg, but they have their own limitations. Let's have a look at them one by one.

DebugDiag
---------

"The Debug Diagnostic Tool (DebugDiag) is designed to assist in troubleshooting issues such as hangs, slow performance, memory leaks or fragmentation, and crashes in any user-mode process." ([microsoft.com](http://www.microsoft.com/en-ca/download/details.aspx?id=26798)) DebugDiag Tool is much simpler to use compared to other tools for debugging. The best part being an HTML report, which is being generated that gives all detailed information. DebugDiag can do a lot of things like:

1.  Crash Analysis
2.  Hang analysis
3.  Memory Leak Analysis
4.  Performance analysis

Currently, the scope of our article is limited to Crash Analysis. Let's start step-by-step.  

#### Step 1: Launch the DebugDiag, You Would be Presented with this Screen

![](https://www.codeproject.com/KB/testing/708098/DebugDiagStart.png)

This shows the different options available with DebugDiag, as of now just click Cancel and continue.

#### Step 2: Configure the Application Symbols

Goto Tools->Options & settings, you would be presented with the following screen.

![](https://www.codeproject.com/KB/testing/708098/Configure.png)

Goto Second Text box, Symbol search path, add the path to the pdb file. We are continuing with the same example which we took in Part 1, i.e., *Appcrash.exe*.

Hide   Copy Code

int main()
{
	int *p = NULL;
	cout<<"This is Start";
	*p = 10;
	cout<<"This is End";
	return 0;
}

#### Step 3: Initiate the Dump Analysis

Click on AdvancedAnalysis Tab and select Crash/Hang Analyzers as shown below.

![](https://www.codeproject.com/KB/testing/708098/CrashAnalysis.png)

#### Step 4: Add The Dump File for Analysis 

Click on "Add Data Files" Button, and select the dump file as shown below:

![](https://www.codeproject.com/KB/testing/708098/DumpFileSelect.png)

#### Step 5: Start Analysis

Click on "Start Analysis" button, you will be presented with the following report.

![](https://www.codeproject.com/KB/testing/708098/Report.png)

The actual report will be a lot more than this, but I have cut the most interesting information. This stack trace looks quite similar to what we have seen in windbg, **AppCrash!main+39 [e:\study\windows internals\training\sample code\appcrash\appcrash\source.cpp @ 9]**. So again, this is pointing to line number 9, but the actual issue is on line number 8 (the details for which we have explained in [Part 1](http://www.codeproject.com/Articles/707488/Part-1-Debugging-Windows-Applications)).

We are presented with some other information also like, PID, time spent in user mode, time spent in kernel mode, etc. All this is available in Windbg too, but this information is presented in an easy to read, understandable and transferable format. The only drawback with this approach being that we can just see the report being presented and cannot run any commands for real analysis as in Windbg. This is useful if we just want a quick report of the dump and not actually sit and analyze.

Application Verifier
--------------------

"Application Verifier assists developers in quickly finding subtle programming errors that can be extremely difficult to identify with normal application testing. Using Application Verifier in Visual Studio makes it easier to create reliable applications by identifying errors caused by heap corruption, incorrect handle and critical section usage." ([MSDN](http://msdn.microsoft.com/en-us/library/ms220948%28v=vs.90%29.aspx)) We will be using Application Verifier for generating and analyzing the crash dump.

#### Step 1: Launch the Application Verifier

Go to run prompt and Type "*AppVerif.EXE*" as shown below: 

![](https://www.codeproject.com/KB/testing/708098/AppV1Start.png)

You will be getting screen as shown below:

![](https://www.codeproject.com/KB/testing/708098/AppV2Start.png)

#### Step 2: Add the Application which Needs to be Verified, in our Case it is AppCrash.exe

![](https://www.codeproject.com/KB/testing/708098/AppV3AddApp.png)

We also need to configure different parameters for debugging. In our case, we will be selecting on "Basics":

![](https://www.codeproject.com/KB/testing/708098/AppV4Configure.png)

#### Step 3: Click on save and then click on Exit

#### Step 4: Run the Application, in our case it is AppCrash.exe

#### Step 5: Once it has finished, open the AppVerifier again, like in Step 1

#### Step 6: Configure the Symbols

Click on View->Logs, go to bottom of the screen and enter the path to pdb file of *AppCrash.exe*. 

![](https://www.codeproject.com/KB/testing/708098/AppV5Symbols.png)

#### Step 7: Click on view Button

It will show up in the below screen, which will have similar analysis data like Windbg and DebugDiag.

![](https://www.codeproject.com/KB/testing/708098/AppV6Analyze.png)

So the question is, what did we achieve by using Application verifier that was not there with other methods? The main thing is that there is no need to worry about taking the crash dump, it will be taken care of automatically. We can just configure the application once and start using it normally, whenever it fails we can always check the report. The drawback with this approach is, this needs to be installed on a target machine, which is normally not feasible. Application Verifier is the tool to identify issues during development cycles and on the developers system, this way we assess potential issues in the application even before we make the release.

# Part 3: Windows Debugging Techniques - Debugging Application Crash (Self Dump Generation)

Background
----------

As you have noticed in the first two parts we were generating dumps when required, which means we need to reproduce the problem and also we need to put procdump on the target machine to get the dump. On a production system customers will very often not agree to installation of any applications on the system. The other side of the coin is we might not get the issue again, it might be an intermittent, which would still be production but the customer is not able to give the exact steps to reproduce the problem. This could be a really problematic situation for the product management. It would be really great if when the application crashes it generates its crash dump on its own which could be collected later for analysis.

Definition
----------

 A dump file is a snapshot of an app at the point in time the dump is taken. It shows what process was executing and what modules were loaded. Dumps are primarily used for debugging issues that occur on machines that the developer doesn't have access to. For example, you can use a dump file from a customer's machine when you can't reproduce the customer's crash or hang on your machine. 

 There are 2 kinds of Dumps

**1\. Mini Dump** : Stores only a Subset of Process Information, Typically some information related to Threads Stack, Process Environment etc. A Mini Dump is smaller in size typically 1.5 MB or even less.

**2\. Full Dump** : Stores all information concerning the virtual memory of the process, like Threads, Call Stack, heap state, Library Loaded. Basically every information related to a process is available. Full Dump is as big as process's virtual memory Typically some hundreds of MB's or even GB's.

To Analyze what is going wrong in our process it is better to have a Full Dump, MiniDump could also be helpful in some cases.

 Let's understand step by step how can we do a Self Dump Generation.

The Source Code
---------------

The exception is an unexpected situation, that, when encountered, leads to the application exiting. So we should keep a tabs on this exception. How do we do that? On Windows Platform there is an API.

Hide   Copy Code

LPTOP_LEVEL_EXCEPTION_FILTER WINAPI SetUnhandledExceptionFilter(
  _In_  LPTOP_LEVEL_EXCEPTION_FILTER lpTopLevelExceptionFilter
);

This API would be called for any unhandled exception in any thread inside a given process. This API should be called in the first entry point of the application [normally in unmanaged code it is main()]. This API expects a parameter that is an exception handler, which defines what should be done when this situation arrives. So now code would look something like this:

Hide   Copy Code

int main()
{
 SetUnhandledExceptionFilter( unhandled_handler);
}

LONG CALLBACK unhandled_handler(EXCEPTION_POINTERS* e)
{
    return EXCEPTION_CONTINUE_SEARCH;
}

Now we need to decide what should be done inside the `unhandled_handler`, in our case create the dump

Hide   Shrink ![](https://www.codeproject.com/images/arrow-up-16.png)   Copy Code

int main()
{
 SetUnhandledExceptionFilter( unhandled_handler);
}

LONG CALLBACK unhandled_handler(EXCEPTION_POINTERS* e)
{
	make_minidump(e);
    return EXCEPTION_CONTINUE_SEARCH;
}

void make_minidump(EXCEPTION_POINTERS* e)
{
	TCHAR tszFileName[MAX_BUFF_SIZE] = {0};
	TCHAR tszPath[MAX_BUFF_SIZE] = {0};
	SYSTEMTIME stTime = {0};
	GetSystemTime(&stTime);
	SHGetSpecialFolderPath(NULL,tszPath, CSIDL_APPDATA, FALSE);
	StringCbPrintf(tszFileName,
			       _countof(tszFileName),
				   _T("%s\\%s__%4d%02d%02d_%02d%02d%02d.dmp"),
				   tszPath, _T("CrashDump"),
				   stTime.wYear,
				   stTime.wMonth,
				   stTime.wDay,
				   stTime.wHour,
				   stTime.wMinute,
				   stTime.wSecond);

    HANDLE hFile = CreateFile(tszFileName, GENERIC_WRITE, FILE_SHARE_READ, 0, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, 0);
    if(hFile == INVALID_HANDLE_VALUE)
        return;

    MINIDUMP_EXCEPTION_INFORMATION exceptionInfo;
    exceptionInfo.ThreadId = GetCurrentThreadId();
    exceptionInfo.ExceptionPointers = e;
    exceptionInfo.ClientPointers = FALSE;

    MiniDumpWriteDump(
        GetCurrentProcess(),
        GetCurrentProcessId(),
        hFile,
        MINIDUMP_TYPE(MiniDumpWithIndirectlyReferencedMemory | MiniDumpScanMemory | MiniDumpWithFullMemory),
        e ? &exceptionInfo : NULL,
        NULL,
        NULL);

	if(hFile)
	{
		CloseHandle(hFile);
		hFile = NULL;
	}
    return;
}

So now inside the function `unhandled_handler` we are calling `make_minidump`, which actually writes the dump. The function `unhandled_handler` is a callback function which receives the `EXCEPTION_POINTERS`. This structure contains the exception information based on the machine generating it. `EXCEPTION_POINTERS` is being passed to function `make_minidump`, which actually writes the dump to the disk. The first portion of the function `make_minidump` is just creating the name of the file based on the application name and the timestamp. Then the file is being created using "CreateFile".

"MINIDUMP_EXCEPTION_INFORMATION" structure is being filled with `CurrentThreadID` and Exception pointers which we received from the parent function. Then call the function `MiniDumpWriteDump`. The interesting parameter here is `MINIDUMP_TYPE`. If we see msdn help on this API there is quite a big list, but based on my analysis I have added three flags, out of these the third is the most important is `MiniDumpWithFullMemory`. This gives all the referenced locations of the particular process in the main memory, which really helps in debugging.

With a full memory dump the size of the dump is quite big, but this really helps in analyzing the dump. With similar flows you can explore more on types of dumps and change it according to your requirements. Let's take an example and see how this works.

Hide   Shrink ![](https://www.codeproject.com/images/arrow-up-16.png)   Copy Code

#include <Windows.h> #include <Dbghelp.h> #include <iostream> #include <tchar.h> #include <strsafe.h> #include <shlobj.h>
#pragma comment(lib, "DbgHelp") #define MAX_BUFF_SIZE 1024
using namespace std;
DWORD WINAPI func();

void make_minidump(EXCEPTION_POINTERS* e)
{
	TCHAR tszFileName[MAX_BUFF_SIZE] = {0};
	TCHAR tszPath[MAX_BUFF_SIZE] = {0};
	SYSTEMTIME stTime = {0};
	GetSystemTime(&stTime);
	SHGetSpecialFolderPath(NULL,tszPath, CSIDL_APPDATA, FALSE);
	StringCbPrintf(tszFileName,
			       _countof(tszFileName),
				   _T("%s\\%s__%4d%02d%02d_%02d%02d%02d.dmp"),
				   tszPath, _T("CrashDump"),
				   stTime.wYear,
				   stTime.wMonth,
				   stTime.wDay,
				   stTime.wHour,
				   stTime.wMinute,
				   stTime.wSecond);

    HANDLE hFile = CreateFile(tszFileName, GENERIC_WRITE, FILE_SHARE_READ, 0, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, 0);
    if(hFile == INVALID_HANDLE_VALUE)
        return;

    MINIDUMP_EXCEPTION_INFORMATION exceptionInfo;
    exceptionInfo.ThreadId = GetCurrentThreadId();
    exceptionInfo.ExceptionPointers = e;
    exceptionInfo.ClientPointers = FALSE;

    MiniDumpWriteDump(
        GetCurrentProcess(),
        GetCurrentProcessId(),
        hFile,
        MINIDUMP_TYPE(MiniDumpWithIndirectlyReferencedMemory | MiniDumpScanMemory | MiniDumpWithFullMemory),
        e ? &exceptionInfo : NULL,
        NULL,
        NULL);

	if(hFile)
	{
		CloseHandle(hFile);
		hFile = NULL;
	}
    return;
}

LONG CALLBACK unhandled_handler(EXCEPTION_POINTERS* e)
{
    make_minidump(e);
    return EXCEPTION_CONTINUE_SEARCH;
}

int main()
{
    SetUnhandledExceptionFilter( unhandled_handler);
	DWORD dwThreadID = 0;
	HANDLE hThread = CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)func, NULL, 0, &dwThreadID);
	if(hThread == NULL)
	{
		return 1;
	}
	WaitForSingleObject(hThread, INFINITE);
	return 0;

}

DWORD WINAPI func()
{
	int *p = NULL;
	*p = 10;
	return 0;
}

This is the same example from [Part 1](http://www.codeproject.com/Articles/707488/Part-1-Windows-Debugging-Techniques-Debugging-Appl), with a slight deviation of adding a thread that will crash. After executing this code the Dump file will be generated in the *%Appdata%* folder. Launch Windbg, set the symbols and analyze you should get the following.

[![](https://www.codeproject.com/KB/testing/708670/Windbg-small.png)](https://www.codeproject.com/KB/testing/708670/Windbg.png)

So here we see some interesting facts:

1.  DEFAULT_BUCKET_ID: NULL_POINTER_WRITE, since we are writing to a NULL Pointer
2.  CrashDump!func+2 [e:\study\windows internals\training\sample code\crashdump\crashdump\source.cpp @ 82]

    This is exactly the line number on which the crash happened

3.  Stack Trace

    Hide   Copy Code

    00000080`26ddf7f8 00007ffb`87c115cd : 00000000`00000000 00000000`00000000 00000000`00000000 00000000`00000000 : CrashDump!func+0x2
    00000080`26ddf800 00007ffb`884c43d1 : 00000000`00000000 00000000`00000000 00000000`00000000 00000000`00000000 : kernel32!BaseThreadInitThunk+0xd
    00000080`26ddf830 00000000`00000000 : 00000000`00000000 00000000`00000000 00000000`00000000 00000000`00000000 : ntdll!RtlUserThreadStart+0x1d

    This gives the stack trace of the faulty thread and not the one starting from the main.

# Part 4: Windows Debugging Techniques - Debugging Memory Leaks (Perfmon)

Background
One of the most common problems with native code is memory leaks, the major reason being that memory management is left to the application itself. It is the Application's responsibility to allocate and de-allocate the memory. When an application dynamically allocates memory, and does not free that memory when it is finished using it, that program has a memory leak. The memory is not being used by the application anymore, but it cannot be used by the system or any other program either.

Definition
First let's try and understand the basics of the memory. Let's begin with "Virtual Address Space." The virtual address space for a process is the set of a virtual memory addresses that it can use. The address space for each process is private and cannot be accessed by other processes unless it is shared. Any operation which is being done in the process like allocating memory, creating static objects etc.

Everything resides inside VAS. All four segments of memory: Code Segment, Stack Segment, Data Segment and Heap reside inside VAS. Consider the picture below:



We see here that the Address space is being divided into two parts user mode and kernel mode. Both user mode and Kernel mode have 2GB of VAS. The difference is that 2GB of Kernel mode is shared across the processes running system wide. The user mode space is dedicated for the process, i.e. all the memory allocations resides in this space. This is something private to the process. For example, allocating memory using "new" will add to the user mode space. Creating an Event Object, Mutex Object etc. will add up to the kernel mode space, since these are Kernel mode objects.

Now let's discuss how to understand whether a particular API will occupy user mode space or a kernel mode space. If an API has SECURITY_ATTRIBUTES as a parameter than it means it will create a kernel mode object and SECURITY_ATTRIBUTES will decide its accessibility to other processes.

Few examples of these APIs are

```c++
HANDLE WINAPI CreateEvent(
  _In_opt_  LPSECURITY_ATTRIBUTES lpEventAttributes,
  _In_      BOOL bManualReset,
  _In_      BOOL bInitialState,
  _In_opt_  LPCTSTR lpName
);
```
```c++
HANDLE WINAPI CreateMutex(
  _In_opt_  LPSECURITY_ATTRIBUTES lpMutexAttributes,
  _In_      BOOL bInitialOwner,
  _In_opt_  LPCTSTR lpName
);
```
CreateThread is little different in this case
```c++
HANDLE WINAPI CreateThread(
  _In_opt_   LPSECURITY_ATTRIBUTES lpThreadAttributes,
  _In_       SIZE_T dwStackSize,
  _In_       LPTHREAD_START_ROUTINE lpStartAddress,
  _In_opt_   LPVOID lpParameter,
  _In_       DWORD dwCreationFlags,
  _Out_opt_  LPDWORD lpThreadId
);
```
Even though Thread is a kernel mode object, when it gets created it occupies 1MB of stack space in the user mode by default. This means we can have maximum of 2048 threads on a 32 bit OS since this will occupy complete 2GB of user mode space. The default stack size can be altered via Project Settings in Visual Studio this will allow to create more threads. This is a general distribution of VAS on 32 bit OS.

Further, VAS is divided into pages with each page being size of 4KB. So the max number of pages that a VAS can have is `1024*1024=1048576`. So now we understand when we cross this our application will stop working since there is no more memory available. And when we are close to this System, it gives a message saying, "Low on Virtual Memory."

On 64Bit System User mode space is 6TB and Kernel Mode space is 2TB. So the process has a much, much bigger space to grow as compared to 32 bit. This is just the basics of memory, to understand in more detail please refer Windows Internals book.

What Causes Memory Leaks ??
There are three very basic reasons: 

1. Growing Heap : Memory is allocated but not de-allocated i.e malloc is being called but free is not called / new is called but delete is not called. This indirectly means Heap is growing but is not released back, which in turn keeps increasing Virtual memory, if it crosses the specified limit, application would certainly crash

```c++
int main()
{
	for(int i = 0; i < 10; i++)
	{
		char* p = new char[100];
	}
	return 0;
}
```
2. Handle Leaks : This would happen with different handles that are created but not freed, Example File Handle, Thread Handle, Process Handle etc.
```c++
int main()
{
	HANDLE hEvent = NULL;
	hEvent = CreateEvent(NULL, TRUE, FALSE, TEXT("WriteEvent"));
	return 0;
}
```
3. Thread Count: This would happen if the threads are continuously getting created but are not actually exiting after their task completion. As explained earlier this would actually occupy 1MB of user mode space by default, so if threads keep on increasing and they do not get released. This would eventually lead to increase in Virtual Memory.
Debugging Techniques
Debugging Memory Leaks is one of the most complex problems. There are tools available like Rational Purifier, Insure++ etc. But finding the precise issue requires a great deal of walking through code and an overall understanding of the scenario. Apart from this, most of the tools for memory leak analysis are paid ones, and not all organisations really promote that. So it should be possible to fix such issues with freely available tools with Windows OS.

The first and the most handy tool to simply identify whether there is a leak or not is "Performance Monitor". Performance monitor is an inbuilt tool with windows OS which is used to measure various parameters such as: memory, CPU, Disk etc. of an application or on system wide level.

Consider the code below as an Example for memory leak:

```c++
#include <iostream>
#include <Windows.h>
#include <tchar.h>
#include <string>

using namespace std;

bool GetComputerName(wstring& wstrCompName);
bool fileread(const wstring& filepath);
bool GetUserName(wstring& wstrUserName);

int main()
{
	int nChoice = 0;
	wstring wstrCompName;
	wstring wstrUserName;
	char ccontinue = '\0'; 

	do
	{
		wcout<<L"Enter your choice"<<endl;
		wcout<<L"1.Read Computer name"<<endl;
		wcout<<L"2.Read User Name"<<endl;
		cin>>nChoice;

		switch(nChoice)
		{
		case 1:
			GetComputerName(wstrCompName);
			wcout<<L"Computer name read is"<<wstrCompName.c_str()<<endl;
			break;
		case 2:
			GetUserName(wstrUserName);
			wcout<<L"user name read is"<<wstrUserName.c_str()<<endl;
			break;
		default:
			wcout<<L"Invalid option";
		}
		wcout<<"Do you want to continue Y or N";
		cin>>ccontinue;
	}while(ccontinue == 'y' || ccontinue == 'Y');
	return 0;
}

bool GetComputerName(wstring& wstrCompName)
{
	wchar_t* pwszCompName = NULL;
	DWORD dwSize = 0;
	bool bRet = false;

	if (!GetComputerNameEx(ComputerNameDnsHostname, pwszCompName, &dwSize))
	{
		if(GetLastError() != ERROR_MORE_DATA)
		{
			wcout<<L"GetComputerNameEx Failed with Error Code"<<GetLastError();
			return false;
		}
		pwszCompName = new(std::nothrow) wchar_t[dwSize + 1];
		if(pwszCompName == NULL)
		{
			wcout<<L"unable to allocate memory"<<endl;
			return false;
		}
		memset(pwszCompName, L'\0', dwSize + 1);
		if (!GetComputerNameEx(ComputerNameDnsHostname, pwszCompName, &dwSize))
		{	
			wcou<<L"GetComputerNameEx Failed with Error Code"<<GetLastError();
			return false;
		}
	}
	char* test = new char[1024*1024];
	wstrCompName.assign(pwszCompName);
	return true;			
}

bool GetUserName(wstring& wstrUserName)
{
	wchar_t* pwszUserName = NULL;
	DWORD dwSize = 0;

	if(!GetUserName(pwszUserName, &dwSize))
	{
		if(GetLastError() != ERROR_INSUFFICIENT_BUFFER)		
		{
			wcout<<"GetUserName returned with Error"<<GetLastError();
			return false;
		}
		pwszUserName = new(std::nothrow)wchar_t[dwSize + 1]();
		if(pwszUserName == NULL)
		{
			return false;
		}
		if(!GetUserName(pwszUserName, &dwSize))
		{
			if(pwszUserName)
			{
				delete [] pwszUserName;
				pwszUserName = NULL;
			}
			wcout<<"GetUserName returned with Error"<<GetLastError();
			return false;
		}
	}
	wstrUserName.assign(pwszUserName);
	if(pwszUserName)
	{
		delete [] pwszUserName;
		pwszUserName = NULL;
	}
	return true;
}
```
Having a look at the code we can make out that there is a leak in the function GetComputerName, which should be fixed. There are two leaks: One is that the variable pwszCompName not been freed and the variable test is being allocated and not freed. But this won't always be the case, and we will be have much more complex code to deal with.

Let's go Step-by-Step, identifying and fixing the problem

Step1:Add the performance counters in the perfmon tool
Launch the performance monitor as shown below

Add the performance counters for the Application, by selecting the parameters under process section


View the graph of the Added Parameters


Step 2: Run the use cases and monitor the graph
As per our current implementation, select option 1 and then see the growth of the "private bytes" Select Y to continue and again select option 1 and see the growth of "private bytes"

Now once select option 2 and observe the growth. Private Bytes are growing only when option 1 is being selected. The growth of private bytes indicates that there is a dynamic allocation happening which is not being released. In other words, new/malloc is being done but free/delete is not being called.

Below shown is the graph for the current use case, Private Bytes is the Red Line which keeps growing.

Step 3: Trace the Code Flow and Fix the issue
As now we have identified that issue is there by selecting option 1, which means we should start tracing the code in that direction. Let's enter the function GetComputerName. So we see that the variable pwszCompName is not being freed and variable test is not being freed. Let's change the above code below which will eventually fix the issue.

```c++
bool GetComputerName(wstring& wstrCompName)
{
	wchar_t* pwszCompName = NULL;
	DWORD dwSize = 0;
	bool bRet = false;

	if (!GetComputerNameEx(ComputerNameDnsHostname, pwszCompName, &dwSize))
	{
		if(GetLastError() != ERROR_MORE_DATA)
		{
			wcout<<L"GetComputerNameEx Failed with Error Code"<<GetLastError();
			return false;
		}
		pwszCompName = new(std::nothrow) wchar_t[dwSize + 1];
		if(pwszCompName == NULL)
		{
			wcout<<L"unable to allocate memory"<<endl;
			return false;
		}
		memset(pwszCompName, L'\0', dwSize + 1);
		if (!GetComputerNameEx(ComputerNameDnsHostname, pwszCompName, &dwSize))
		{  
			if(pwszCompName)
			{
				delete [] pwszCompName;
				pwszCompName = NULL;
			}				
			wcout<<L"GetComputerNameEx Failed with Error Code"<<GetLastError();
			return false;
		}
	}
	char* test = new char[1024*1024];	
	wstrCompName.assign(pwszCompName);
		
	if(test)
	{
		delete[] test;
		test = NULL;
	}
	if(pwszCompName)
	{
		delete [] pwszCompName;
		pwszCompName = NULL;
	}
	return true;			
}
```

# Part 5: Windows Debugging Techniques - Debugging Memory Leaks (CRT APIs)

Background
As observed in Part 4, it can be difficult to trace the issue with just the help of perfmon tool. It would be so easy if someone could actually point where the precise location of the leak is and we all we have to do is fix it. There are CRT APIs available which does this for us and makes life easier.

Definition
We all know when we allocate memory dynamically using new/malloc/calloc/realloc it actually goes to the heap memory. Debugging Memory Leak issues means debugging the heap memory and checking to see if there is a problem there. CRT Debug Heap provides this arrangement by providing a set of APIs which allocate more memory than actually requested to track the memory details and dump the same on application exit.

So if we allocate 10 bytes in release mode using malloc, then only 10 bytes will get allocated. But once we enable debugging using CRT APIs close to 46 bytes will get allocated. This extra 36 bytes are there for tracing the memory leaks.

Apart from this, instead of malloc, debug version i.e "_malloc_dbg" will be called. For more information on this please refer to: http://msdn.microsoft.com/en-us/library/974tc9t1.aspx

Debugging Techniques
Let's go Step-by-Step in using the CRT APIs

Step 1: Add the Includes for CRT Debug API
Add the below code as part of the application after all other includes are completed.

```c++
#define _CRTDBG_MAP_ALLOC
#include <stdlib.h>
#include <crtdbg.h>
```
Macro `_CRTDBG_MAP_ALLOC` informs the compiler to map the heap functions to their debug version i.e. malloc should get mapped to `_malloc_dbg`

Step 2: Map new operator to its debug version
By default, new does not get mapped to its debug version, we need to forcefully do it. To do this add the below code to the application. By default, malloc/calloc/realloc gets mapped to their debug version. New needs to be done explicitly.

This step can be avoided if you do not have the usage of the new operator in your code.

```c++
#ifdef _DEBUG   
#ifndef DBG_NEW      
#define DBG_NEW new ( _NORMAL_BLOCK , __FILE__ , __LINE__ )     
#define new DBG_NEW   
#endif
#endif
```
Step 3: Set the Debug Flag and Set the report mode
Debug flags needs to be set, which defines what we want to debug. Report Mode needs to be set to define if the output needs to be redirected to the debug window like DebugView or needs to be sent to a file.

```c++
_CrtSetDbgFlag ( _CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF );
_CrtSetReportMode(_CRT_WARN, _CRTDBG_MODE_DEBUG);
```
Let's understand the above code.

`_CRTDBG_ALLOC_MEM_DF` turns on debug allocations
`_CRTDBG_LEAK_CHECK_DF` will cause memory leak checking to be performed on application exit.
`_CRTDBG_MODE_DEBUG` will cause the output to be redirected to a debug window like DebugView or Output Window in Visual Studio.
There are a lot more options available for debugging. Please refer to: http://msdn.microsoft.com/en-us/library/974tc9t1.aspx

After the above steps the code mentioned in part 4 would become like this.

```c++
#include <iostream>
#include <Windows.h>
#include <tchar.h>
#include <string>
#define _CRTDBG_MAP_ALLOC
#include <stdlib.h>
#include <crtdbg.h>

#ifdef _DEBUG   
#ifndef DBG_NEW      
#define DBG_NEW new ( _NORMAL_BLOCK , __FILE__ , __LINE__ )     
#define new DBG_NEW   
#endif
#endif  // _DEBUG

using namespace std;

bool GetComputerName(wstring& wstrCompName);
bool fileread(const wstring& filepath);
bool GetUserName(wstring& wstrUserName);

int main()
{
	_CrtSetDbgFlag ( _CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF );
	_CrtSetReportMode(_CRT_WARN, _CRTDBG_MODE_DEBUG);

	int nChoice = 0;
	wstring wstrCompName;
	wstring wstrUserName;
	char ccontinue = '\0'; 

	do
	{
		wcout<<L"Enter your choice"<<endl;
		wcout<<L"1.Read Computer name"<<endl;
		wcout<<L"2.Read User Name"<<endl;
		cin>>nChoice;

		switch(nChoice)
		{
		case 1:
			GetComputerName(wstrCompName);	
			wcout<<L"Computer name read is"<<wstrCompName.c_str()<<endl;
			break;
		case 2:
			GetUserName(wstrUserName);
			wcout<<L"user name read is"<<wstrUserName.c_str()<<endl;
			break;
		default:
			wcout<<L"Invalid option";
		}
		wcout<<"Do you want to continue Y or N";
		cin>>ccontinue;
	}while(ccontinue == 'y' || ccontinue == 'Y');
	return 0;
}

bool GetComputerName(wstring& wstrCompName)
{
	wchar_t* pwszCompName = NULL;
	DWORD dwSize = 0;
	bool bRet = false;

	if (!GetComputerNameEx(ComputerNameDnsHostname, pwszCompName, &dwSize))
	{
		if(GetLastError() != ERROR_MORE_DATA)
		{
			wcout<<L"GetComputerNameEx Failed with Error Code"<<GetLastError();
			return false;
		}
		pwszCompName = new wchar_t[dwSize + 1];
		if(pwszCompName == NULL)
		{
			wcout<<L"unable to allocate memory"<<endl;
			return false;
		}
		memset(pwszCompName, L'\0', dwSize + 1);
		if (!GetComputerNameEx(ComputerNameDnsHostname, pwszCompName, &dwSize))
		{	
			wcout<<L"GetComputerNameEx Failed with Error Code"<<GetLastError();
			return false;
		}
	}
	char* test = new char[1024*1024];
	wstrCompName.assign(pwszCompName);
	return true;			
}

bool GetUserName(wstring& wstrUserName)
{
	wchar_t* pwszUserName = NULL;
	DWORD dwSize = 0;

	if(!GetUserName(pwszUserName, &dwSize))
	{
		if(GetLastError() != ERROR_INSUFFICIENT_BUFFER)		
		{
			wcout<<"GetUserName returned with Error"<<GetLastError();
			return false;
		}
		pwszUserName = new wchar_t[dwSize + 1]();
		if(pwszUserName == NULL)
		{
			return false;
		}
		if(!GetUserName(pwszUserName, &dwSize))
		{
			if(pwszUserName)
			{
				delete [] pwszUserName;
				pwszUserName = NULL;
			}
			wcout<<"GetUserName returned with Error"<<GetLastError();
			return false;
		}
	}
	wstrUserName.assign(pwszUserName);
	if(pwszUserName)
	{
		delete [] pwszUserName;
		pwszUserName = NULL;
	}
	return true;
}

```

Step 4: Rebuild the Project in the Debug Mode
One drawback of this approach is it requires code to be rebuilt in debug mode without which it cannot report memory leaks. So rebuild the source in the Debug Mode.

Step 5: Launch the DebugView, Run the use case and see the output
Launch the DebugView. If not available, download it from: http://technet.microsoft.com/en-in/sysinternals/bb896647.aspx

In the current case, build the above mentioned code in Debug Mode, Run the Application, select option 1, and then select y. Repeat this three to four times, and press n and exit the application. Observe the debugView output. It will look something like this:



With this now we get exactly which file and which line of code is causing the memory and how much leak. When it says source.cpp line no 73, it is actually pwszCompName = new wchar_t[dwSize + 1];. Similarly, line no 86 points to `char* test = new char[1024*1024];`. Now it is very clear where the problem is and we can fix the issue easily.


