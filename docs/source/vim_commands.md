# Vim Commands #

## Command line ##

`vim -V<log level><log filename>` : Execute Vim with the log enabled. E.g.: Vim -V9vim_log.txt

## Leader - Normal Mode ##

   *Note: My <leader> is <space>*

`<leader><space>` : Switch between documents that are open in the same split

`<leader> z` : Centralize the cursor in the middle of the screen

`<leader> zz` : Centralize the cursor on the bottom of the screen.


## Navigation - Normal Mode ##

`<command>i"` : Select the item that is inside "". 

`<command>iw` : Select the word where the cursor is over.

`<command>a"` : Select the item that is inside "" including the ""

`<command>$` : End of line

`gd` : Will take you to the local variable declaration.

`gD` : Will take you to the global variable declaration.

`g*` : Search for the word under the cursor (like \*, but g* on 'rain' will find words like 'rainbow').

`g#` : Same as g* but in backward direction.

`gg` : Goes to the first line in the buffer (or provide a count before the command for a specific line).

`G ` : Go to the last line (or provide a count before the command for a specific line).

`gf` : Will go to the file under the cursor

`g]` : And other commands will jump to a tag definition (a tag can be a function or variable name, or more).

`ctrl+]` : Jump to definition using tags

`ctrl+T` : Jump back from the definition using tags.

`[{` : Jump to beginning of a code block

`]}`: Jump to the end of a code block

`[(` : Jump to beginning of a parentheses

`])`: Jump to the end of a parentheses

`[[`: Sections backward or to the previous '{' in the first column.

`]]`: Sections forward or to the next '{' in the first column.

`[]`: Sections backward or to the previous '}' in the first column.

`c<selection>` : Delete the selection where the cursor is and go to insert mode

`<selection> ~` : Toggle the case

`<selection> u` : Lower case

`<selection> U` : Upper case

`<tab number>gt` : Go to the desired tab 

`f <character>` : Jump to the next character

`F <character>` : Jump to the previous character
 
`t <character>` : Jump one character before the next character

`T <character>` : Jump one character after the previous character
 
`[<number>] ge` : Go to the previous word

`gf` : Go to the files where the cursor is (Open on the same window)

`m<key> `: Mark the position to a specified key. If the mark use capital letter, it will mark the position globally (Among several files even if you close VIM)

``<key> `: Go to the position of a marked key

``` `: Return to the position before the marked item

`z. `: Move the current cursor position to the middle of the screen

`z<return> `: Move the current cursor to the top of the screen

`'J `: Join the current line with the next line'

`zf<selection>` : Create a folding (Collapsed line)

`zo `: Open folding (Collapsed) were the cursor are

`zc `: Close folding were the cursor are

`zd`: Delete a folder

`zR` : Open all folding (Collapsed) lines

`zM`: Close all folding

`zss` : Set the folding method to Syntax

`zsm` : Set the folding method to Manual

`zsi` : Set the folding method to Indent

## Keys - Normal Mode ##

`ctrl-w` : got to the next window

`ctrl-PgUp ; ctrl-PgDown` : Switch Tabs

`ctrl-n` : open NERD tree (t - Open File into a new Tab ; i - Horizontal Split ; s - Vertical Split)

`ctrl+p` : Open CTRL+P Plugin.

`shift+i` : Show/hide hidden files on NERD tree

`ctrl-x` : If the cursor is over a number, decrement it

`ctrl-a` : If the cursor is over a number, increment it

`ctrl+r` : Redo

`ctrl+o` : Send you to the previous location before a jump

`*` : Find the word under cursor forward

`#` : Find the word under cursor backward

`"qp` : Paste the macro script

`shift+J` : Concatenate (Join) 02 lines

`g]` : Show the list of tags

## Commands - Normal Mode ##

`:0r <file path>` : Read the file and add in your current file

`:r !<shell command>` : Execute the shell command and write the result on the current file

`:ls` : List buffers

`:b<buffer number>` : Go to the buffer. Use ls to list buffer

`:colorshema` : Change the color schema (Solirized for C++ / Desert for CMake)

`<-/+ begin range>, <-/+ end range>co. `: Copy range to the current position (E.g.: -10,-5co.)

`:echo @% ` : directory/name of file (relative to the current working directory of /abc). E.g.: def/my.txt 

`:echo expand('%:t') ` : name of file ('tail'). E.g.:  my.txt 

`:echo expand('%:p') ` : full path. E.g.:  /abc/def/my.txt 

`:echo expand('%:p:h') `/: directory containing file ('head'). E.g.: abc/def 

`:echo expand('%:p:h:t') `d: first get the full path with :p (/abc/def/my.txt), then get the head of that with :h (/abc/def), then get the tail of that with :t (def). E.g.: ef 

`:tag` : Jump to the previous tag location. Util to return to a location when you used ctrl-t.

`:ts <tag to search>`: Search a specific tag

`:ts`: Show a list of all definitions for the last tag searched.

`:tn`: Move to the next definition

`:tp`: Move to the previous definition

`:copen` : Open list of items on the quickfix.

`:cw` : Open list of items on the quickfix. Note: Can be used after grep command.

## Others - Normal Mode ##

`ZZ` : Save and close

`q<macro key> <do your stuff> ` : Record a macro and store into the key desired. 
`@<macro key>` : Play the macro

`m<mark key>` : Mark a position that you are in into the key desired

`\`<mark key>` : Go to the marked position stored on the key

`:sb` : Split the current buffer

`<space>itl` : Insert locale time E.g.: Thu 27 Sep 2007 07:37:42 AM EDT (depends on locale)

`<sampe>iti` : Insert iso time ISO8601/W3C E.g.: 2007-08-29T02:37:13-0400 (Custom map)

`<space>its` : Insert simple time 07:36:44 (Custom map)

`<space>ids` : Insert simple date E.g.: 11-23-2016 (Custom map)

`<space>idr` : Insert reverse date E.g.: 2016-11-23 (Custom map)

## Keys - Edition Mode ##

`ctrl+k` : Complete the snippet

`ctrl+p (previous) ; ctrl+n (next)` : Word completion

`ctrl+x (completion mode) + ctrl+] (Tag completion)` : Tag completion (requires CTags)

`ctrl+x (completion mode) + ctrl+f (File name completion)` : File completion

`ctrl+r "` : Past the content of the " register, aka last yank / delete

`ctrl+o <command of normal mode>` : Allow you use command of normal mode while in insert mode

`:marks `: List all marks

`:delmark<key> `: Delete mark

## Keys Visual Mode ##

`gf `: Create a folder from the selection

`//` : Search the selected text (Custom map)

`*` : Select until the next word. Execute command in multiple lines.

## Keys Any mode ##

`F2` : Toggle Paste Mode (Custom map to set pastetoggle)

## Commands ##

`/<string>` : Search a string down

`?<string>` : Search a string up

`:%s/<search string>/<replace string>[/<options>]` : search whole file and replace. The options are:

  `/c` : confirm each replace

  `/I` : Case sensitive

`:noh` : Clear search highlight. Added custom map `<leader>,`

`:q!` : Exit without saving

`:w` : Save

`n` : repeat last command

`:sh` : go to shell (Exit or Ctrl+D to return)

`:r <file name>` : Read a file an put the content on the current file

`:r ! <shell command>` : Execute the shell command and put the result on the current file

`:PlugInstall` : install all plugins configured on vim-plug plugin

`:e filename` : Open file for edition

`:split filename` : split window and load another file

`ctrl-w up arrow` : move cursor up a window

`ctrl-w ctrl-w` : move cursor to another window (cycle)

`ctrl-w_` : maximize current window

`ctrl-w=` : make all equal size

`10 ctrl-w+` : increase window size by 10 lines

`:vsplit file` : vertical split

`:sview file` : same as split, but read only

`:hide` : close current window

`:only` : keep only this window open

`:ls` : show current buffers

`:b 2` : open buffer #2 in this window

`:Explore` : Open the Explore (Equivalent to Windows Explorer)

`:X` : Encrypt a file. When the file is opened again it will ask you for a password to open the file.

`:set key=<nothing>` : Remove the cryptography of an open file. You need to save it after.

## Explore Keys and Commands ##

`d` : creates a new directory

`%` : creates and opens a new file

`D` : deletes a directory or file

`R` : renames a file

`o` : opens the file in a horizontal split

`v` : opens the file in a vertical split

`<numeric id>mb` : Create a bookmark on the current folder with the id informed.

`<numeric id>gb` : Goto bookmark

`qb` : List bookmarks

## Spell Check ##

`<leader> se` : Set spell check to English Language (Custom Map).

`<leader> sp` : Set spell check to Portuguese Language (Custom Map).

`<leader> so` : Turn spell check off (Custom Map).

`]s` : Move the cursor the next misspelled word.

`[s` : Move the cursor to the previous misspelled word.

`z=` : Show spelling corrections options.

`zg` : Add the word to a file list so it can be used again as correct words.

`zG` : As `zg` but do not add the word on the file list

`zw` : Remove the word from the file list

`<leader> sa` : Replace all. Replace all words with the same word done on the last replacement (Custom Map).

## Macros ##

### Saving a Macro ###

To save a macro you can do:

  From normal mode: `qq`
  enter whatever commands
  From normal mode: `q`
  open .vimrc
  `"qp` to insert the macro into your `let @q = '...'`