# Ctags Commands #

## Creating Index File ##

`ctags -R .` : Create a tag file for all directories recursively. Note: This command does not generate tags file for external headers (e.g. stdio.h, stdlib.h).

`ctags --c++-kinds=+p --fields=+iaS --extra=+q -R .`: Create tags for C++ projects
