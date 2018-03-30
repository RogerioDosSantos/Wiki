# Fugitive # 

Provide integration with Git

## Commands ##

`:Glog` : Load previous revisions on the quickfix

`:Ggrep <sentence> [<branch name>] [<tag name or commit id>]` : Search for the sentence into the project.

`GLog --grep=<keyword> --` : Return the check-ins that contains the description mentioned on the keyword.

`Glog -S<keyword> --` : Looks for all changeset where the keyword was removed.

## Personal Key Mappings ##

`<leader>gs `: Git Status

`<leader>gd `: Git Diff (Non commit items vs Non added items)

`<leader>gdh `: Git Diff origin / HEAD (Commit items vs Non Commit items)

`<leader>gdm `: Git Diff origin / master (Commit items vs Server)

`<leader>gc `: Git Commit

`<leader>gp `: Git Push

`<leader>gpu `: Git Pull

`<leader>gb `: Git Brame (Verify the history of the file)

`<leader>gr `: Git checkout <file name> (You can execute undo before saving)

`<leader>glo `: (:Glog -10) Load the 10 last log of a files into the buffer and display it 

`<leader>gla `: (:Glog) Load the all log of a files into the buffer and display it 

`<leader>gle `: (:Gedit) Return to the current file being edited.


## Status Window Keys ##

`q` : Close Status

`r` : Reload Status

`O` : Open the file into a new tab.

`o` : Open the file into a new split

`g?`: show this help

`<C-N>`: next file

`<C-P>`: previous file

`<CR>`: :Gedit

`-`: :Git add

`-`: :Git reset (staged files)

`a`: Show alternative format

`cA`: :Gcommit --amend --reuse-message=HEAD

`ca`: :Gcommit --amend

`cc`: :Gcommit

`cva`: :Gcommit --amend --verbose

`cvc`: :Gcommit --verbose

`ds`: :Gsdiff

`dp`: :Git! diff (p for patch; use :Gw to apply)

`dv`: :Gvdiff

`p`: :Git add --patch

`p`: :Git reset --patch (staged files)

`q`: close status

`r`: reload status

`S`: :Gvsplit

`U`: :Git checkout

`U`: :Git checkout HEAD (staged files)

`U`: :Git clean (untracked files)

`U`: :Git rm (unmerged files)

