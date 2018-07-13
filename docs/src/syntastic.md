# Syntastic #

Provide syntax check

## Commands ##


## Files ##

`.syntastic_cpp_config` 

Configuration file for C++ where you can specify the includes.

The plugin will search all upper folder until it finds the directory. 

Include directory syntax: `-I<include dir>`

*Note* : The include directory can be a relative path from the .syntastic_cpp_config directory or an absolute path. In case it is an absolute path,it cannot use the Home directory symbol "~" neither the home variable "${HOME}".

## Key bindings - Normal Mode ##

`<Leader>b `: Save and execute validation
