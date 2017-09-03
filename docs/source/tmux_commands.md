# TMUX Commands #

`TMUX a <session number> ` : attach  

`TMUX ls ` : list sessions

`TMUX kill-session -t <session number or session name name> ` : kill sessions

`ctrl+b` : TMUX Command key. Put TMUX on command mode

`tmux new -s session_name` : creates a new tmux session named session_name

`tmux attach -t session_name` : attaches to an existing tmux session named session_name

`tmux switch -t session_name` : switches to an existing session named session_name

`tmux list-sessions` : lists existing tmux sessions

`tmux detach (prefix + d)` : detach the currently attached session

## Command Mode - Sessions ##

`:new<CR> ` : new session

`s ` : list sessions

`$ ` : name session

`d ` : detach session

`[` : Scroll / Copy mode. Press `q` to exit. In this mode you can scroll up and down.

## Command Mode - Windows (tabs) ##

`c ` : new window

`, ` : name window

`w ` : list windows

`f ` : find window

`& ` : kill window

`. ` : move window - prompted for a new number

`:movew ` : move window to the next unused number

## Command Mode - Panes (splits) ##

`?` : Help to display available commands.

`% ` : vertical split

`" ` :horizontal split

`o ` : Go to the next pane

`ctrl+o ` : Swap pane contents

`q ` : show pane numbers

`x ` : kill pane

`z ` : Maximaze and minimize current view (Occupy all window size)

`!` : Break the pane into a new window.

`{` : Move pane to the left

`}` : Move the pane to the right

`<space>` : Change panes Layout

`:join-pane -s <windows number>` : Join the last accessed pane from a window

`:join-pane -t <windows number>` : Send the current selected pane to an window

## Scroll Mode - Commands ##

`g` : Goto line

`/` : Search a string. Press `n` to go to next word.

## Copy from a TMUX pane to another ##


`Ctrl+b, [` : Enter scroll / copy mode.

`Space` : Start highlighting text.

`Enter` : Copy the highlighted text.

`Ctrl+b ]` : Paste the previous copied text
