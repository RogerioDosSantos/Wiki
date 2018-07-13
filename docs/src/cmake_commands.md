# CMAKE Commands # 

## Functions ##

`set(<variable name> <default value> CACHE <Type> <help description>)` : Allow set a variable with input option.

    The variable declared can be passed trough command prompt or ccmake or cmake-gui. 

      E.g: `SET(FAB "po" CACHE STRING "Some user-specified option")`. 
    
    Note:You can pass the variable type when calling the CMake executale using: 

      `-D<variable name>:STRING=<variable value>` 

        E.g.: `-DFAB:STRING=po`

`file(MAKE_DIRECTORY <directory>)` : Create directory

`file(COPY "<source directory or file>" DESTINATION "<destination directory>")` : Copy file or directory

`add_subdirectory(<source_dir> [<binary_dir>] [EXCLUDE_FROM_ALL]) ` : Add a subdirectory to the build. 

`include_directories([AFTER|BEFORE] [SYSTEM] <directory1> [<directory2> ...]) ` : Add include directories

`include(<file|module> [OPTIONAL] [RESULT_VARIABLE <VAR>] [NO_POLICY_SCOPE])` : Include another make file. IMPORTANT: The code will run on the scope of the file that included it (Original file), as if the file was copied inside the original file. As consequence, all relative paths will be relative to the original file.

## Variables ##

`CMAKE_TOOLCHAIN_FILE=<toolchain path>` : Inform the toolchain file path

## Tips ##

`make -C <directory>` : Execute the make file from a specific directory.

`make help` : Display CMAKE project creation help that informs the type of compilations that can be done