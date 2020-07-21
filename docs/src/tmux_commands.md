# TMUX Commands #

`tmux a <session number> ` : attach  

`tmux ls ` : list sessions

`tmux kill-session -t <session number or session name name> ` : kill sessions

`ctrl+b` : tmux Command key. Put tmux on command mode

`tmux new -s session_name` : creates a new tmux session named session_name

`tmux attach -t session_name` : attaches to an existing tmux session named session_name

`tmux switch -t session_name` : switches to an existing session named session_name

`tmux list-sessions` : lists existing tmux sessions

`tmux detach (prefix + d)` : detach the currently attached session

`tmux split-window -d`: Split a pane without closing it and return to the current pane.

`tmux split-window <command>`: Run command in a new horizontal split and go to the new split.

`tmux split-window -d <command>`: Run command in a new horizontal split and return to the current split.

`tmux display-pane`: Display the number of each pane

`tmux kill-pane -t <target_pane>`: Close a pane

`tmux send-keys -t <target_pane> <commands>`: Send keys to a pane. E.g.: `tmux send-keys -t 1 "clear" C-m "ls" C-m "pwd" C-m`

`tmux run-shell -t <target_pane> <command>`: Run command in another pane. E.g.: `tmux run-shell -t 2 ls`

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

`z ` : Maximize and minimize current view (Occupy all window size)

`!` : Break the pane into a new window.

`{` : Move pane to the left

`}` : Move the pane to the right

`<space>` : Change panes Layout

`:join-pane -s <windows number>` : Join the last accessed pane from a window

`:join-pane -t <windows number>` : Send the current selected pane to an window

`join-pane -s <source_window_number> -t <destination_window_number>`: Join two windows into one.

## Scroll Mode - Commands ##

`g` : Goto line

`/` : Search a string. Press `n` to go to next word.

## Copy from a TMUX pane to another ##


`Ctrl+b, [` : Enter scroll / copy mode.

`Space` : Start highlighting text.

`Enter` : Copy the highlighted text.

`Ctrl+b ]` : Paste the previous copied text

