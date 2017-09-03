# Marvim #

Marvim is a macro manager

Hotkeys 
-----------
`<F2>`: Find and execute a macro or insert template from repository
`Visual <F2>`: Replays last macro for each line selected
`<F3>`: Save default macro register by name to the macro repository 
`Visual <F3>`: Save selection as template by name to the macro repository 
`<Tab>`: On the Macro command line for cycling through autocomplete
`<Control>`: On the Macro command line for listing autocomplete options

Usage:
----------
o Store a new macro to the repository

1)  record macro as usual into q register 
    (i.e. qq..<macro keystrokes>..q)
2)  press save macro key <F3> (default) in normal mode
3)  enter the macro name when prompted after the prefix 
    (a prefix will be provided based on the filetype)
4)  macro is now store in the repository

o Save template into repository

1)  select area you want to save in visual mode
2)  press the macro save button <F3> (default) in visual mode
3)  enter the template name when prompted
    (a prefix will be provided based on the filetype)
4)  template is now saved in repository

o Recall macro/template through a search

1)  press the macro find key <F2> (default) in normal mode
2)  enter a search string when prompted 
    (a prefix will be put by default, which can be deleted)
3)  press <Tab> or <Control-D> to auto-complete until you find the macro
4)  macro is now run and also loaded for further use into the q register

