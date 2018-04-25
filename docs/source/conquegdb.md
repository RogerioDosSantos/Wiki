# ConqueGDB # 

Plugin that allows you to use GDB inside vim

`gdb <program path>` : Start a GDB session.

`gdb --args <program path> <argument 1> [, <argument 2>]` : start gdb with a program that contains arguments

Note: To have an executable with symbols you need to use the option -g on the gcc compile to assure it puts the symbol on the executable. If you are using CMAKE, you can set the following variable environment:

`set(CMAKE_BUILD_TYPE Debug)`

## Commands

`ConqueGDB` : Open a new window with the GDB program

## GDB Commands

Note: Pressing <enter> will run the last command.

`file <executable>` : Load an executable to be used by the GDB

`start` : Start the loaded application and stop just after the main function

`kill` : Stop the program execution

`list` : List the current source code where the debugger is.

`step [quantity]` : Step into

`next [quantity]` : Step over

`finish` : Step out

`continue [quantity]` : Continue the execution until the next breakpoint. 

`print <[&]variable>` : Print a variable value. Use & to get the variable type and address. Note: You can use `.` and cast to access inner members and variable names. 

`p  *(char**)<variable>.storage_.data_.buf` : Print a string value of boost variant. 

`set var <variable> = <value>` : Set a value to a variable.

`backtrace [<quantity>]`: Display the stack trace shortcut `bt`

`frame <stack id>` : Allow you to go to the frame of the stack in this way you can see the variable values of that frame. Note, you can get the frame id by using backtrace command.

`break <line number>` : Set a breakpoint on the line.

`break <file path>:<line number>` : Set a breakpoint on the file / line.

`break <function name>` : Set a breakpoint on the function (E.g.: `break Class::Function(int)`)

`info Breakpoints` : List all breakpoints.

`disable <breakpoint number>` : Disable the breakpoint. You can get the `<breakpoint number>` using the `info` command.

`ignore <breakpoint number><quantity>` : Do not stop on the breakpoint an amount of time. You can get the `<breakpoint number>` using the `info` command.

` save breakpoints <file path>` : Save the Breakpoints into a file as a script.

`source <file path>` : Load a definition script. E.g.: Breakpoints

`watch <variable>` : Set a watch on the variable. When watching, every time the variable changes, it will stop the execution and display the old and new value.

`rwatch <variable>` : Set a watch on the variable that will trigger every time the variable is read.

`info <command>` : Display the current status of the command. E.g.: `info watch`.

`delete <command item id>` : Delete a command item (E.g.: breakpoint) that is set. You can get the command item id using the info command.

`set logging on` : Enable logging. 

`set logging off` : Disable logging. 

`set logging file file` : Change the name of the current logfile. The default logfile is gdb.txt. 

`set logging overwrite [on|off]` : By default, gdb will append to the logfile. Set overwrite if you want set logging on to overwrite the logfile instead. 

`set logging redirect [on|off]` : By default, gdb output will go to both the terminal and the logfile. Set redirect if you want output to go only to the log file. 

`show logging` : Show the current values of the logging settings.

## Keys - CGDB Mode ##

`cgdbmodekey` : Puts the user into command mode. However, you are already in this mode. This is defaulted to the ESC key.

`i` : Puts the user into GDB mode.

`gg` : Move to the top of file.

`G` : Move to the bottom of file.

`/` : search from current cursor position.

`?` : reverse search from current cursor position.

`n` : next forward search.

`N` : next reverse search.

`o` : open the file dialog.

`spacebar` : Sets a breakpoint at the current line number.

`t` : Sets a temporary breakpoint at the current line number.

`-` : Shrink source window 1 line.

`=` : Grow source window 1 line.

`_` : Shrink source window 25% (or, shrink tty window 1 line, if visible).

`+` : Grow source window 25% (or, grow tty window 1 line, if visible).

`Ctrl-l` : Clear and redraw the screen.

`F5` : Send a run command to GDB.

`F6` : Send a continue command to GDB.

`F7` : Send a finish (Step out) command to GDB.

`F8` : Send a next (Step over) command to GDB.

`F10` : Send a step (Step into) command to GDB.

## Keys - File Dialog Mode 

`q` : Will exit the file dialog, and return to the source window.

`k` or `up arrow` : Move up a line.

`l` or `right arrow` : Move right a line.

`Ctrl-b` or `page up` : Move up a page.

`Ctrl-f` or `page down` : Move down a page.

`/` : search from current cursor position.

`?` : reverse search from current cursor position.

`n` : next forward search.

`N` : next reverse search.

`enter` : Select the current file.

## Remote Debugging

### Installation and execution

The [Linaro Toolchains](https://launchpad.net/linaro-toolchain-binaries) have a more stable set of remote debugging tools.

You can for instance download *ARM Linux tools* to run on linux (**gcc-linaro-arm-linux-gnueabihf-4.8-2013.10_linux**) and to run on windows (**gcc-linaro-arm-linux-gnueabihf-4.8-2013.10_win32**), etc.

`gdbserver --multi :<port_number>` : Start a GDB client from *Linaro Toolchains*. E.g.: `gdbserver --multi :2345`. You should run it on the device you would like to debug.

`arm-linux-gnueabihf-gdb` : Start a GDB server from *Linaro Toolchains*. **Note**: This is a 32bits application. You should run it on the device that you want to use the debugger.
 
### Remote Debugging Commands

`target extended <device_ip>:<device_port>`: Connect to the GDB Server.

`set remote exec-file <executable_path>` : Set the executable to be called.

`show remote exec-file` : Show the remote to be executed.

`run` : Run the executable set by the `set remote exec-file` command.

