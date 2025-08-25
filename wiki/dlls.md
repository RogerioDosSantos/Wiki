# DLLs 

## Loading dynamically a function from a DLL

When loading a *DLL* on *Windows* using *function pointers*, you need to ensure that your *function pointer* declaration is using the proper *Calling Convension*.

The *calling convension* possible are:

- `__cdecl`: Libraries compiled with the `/Gd` flag. 
- `__stdcall`: Libraries compiled with the `/Gz` flag.
- `__fastcall`: Libraries compiled with the `/Gr` flag.
 
*Function Pointer* declaration example:

```c++
// Function pointer declaration using __stdcall convension
typedef bool (__stdcall *SimpleFunctionPointer)(const char* paramerer_1);
```

If the wrong conversion is defined, when calling a the function passing a parameter, you will receive an exception with the following information:

`Run-Time Check Failure #0 - The value of ESP was not properly saved across a function call.` 

If you do not have access to the source code, you can deduct the *Calling Convension* being used by evaluate the the *Symbol name decorator* as following:

- `__cdecl`: begins with a *_* but has no *@*
- `__stdcall`: begins with *_* and has a *@*
- `__fastcall`: begins with *@* and has another *@*


## Reference

- [Calling Convensions Article](http://unixwiz.net/techtips/win32-callconv.html)
