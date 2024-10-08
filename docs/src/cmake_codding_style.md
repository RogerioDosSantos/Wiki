# CMAKE Codding Style #

## Naming ##


*Functions* : lower_case name. Ex: `do_something(...)`

*Local variables* : <variable_name> lower_case name. Local variables are used exclusively inside the file that contained them, and their values were simply passed as parameters to CMake functions. Ex: `set(some_variable "...")`

*Global variables* : <PROJECT_NAME>\_<VARIABLE_NAME> (UPPER_CASE) name. Project name is required to do not conflict with any other variable. Global variables(can also be called "export variables") are intended for exporting up/down-stream via the environment variable mechanism. Ex: `set(SOME_VARIABLE "...")`

*Control statements* : lower_case name without repeat the condition in the closing brackets. Ex: If Statements

````
  if(condition)
    ...
  else() # not repeat condition
    ...
  endif() # not repeat condition
````

*Operators* : UPPER_CASE name. Ex: `if(condition STREQUAL "")`
  
*Directives and/or extra options* : UPPER_CASE name. Ex: `do_something(... USE_THIS)`
