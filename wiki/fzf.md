#FZF

FZF executes a live fuzzy finding on text

##Commands

`Files [PATH]` : Files (Similar to `FZF`)

`GFiles [OPTIONS]` : Git Files (git ls-files)

`GFiles?` : Git Files (git status)

`Buffers` : Open buffers

`Colors` : Color schemes

`Ag [PATTERN]` : Ag search result (ALT-A to select all, ALT-D)

`Lines [QUERY]` : Lines in load Buffers

`BLines [QUERY]` : Lines in current buffer

`Tags [QUERY]` : Tags in the project (ctags - R)

`BTags [QUERY]` : Tags in the current Buffer

`Marks` : Marks

`Windows` : Windows

`Locate PATTERN` : Locate command output

`History` : v:oldfiles and open buffers

`History:` : Command History

`History/` : Search History

`Snippets` : Sinppets (UtilSnips)

`Commits` : Git commits (requires fugitive)

##Custom mapped keys

`<silent><leader>sf ` : Files

`<silent><leader>sgf ` : GFiles

`<silent><leader>sgs ` : GFiles?

`<silent><leader>sgc ` : Commits

`<silent><leader>sb ` : Buffers

`<silent><leader>sco ` : Colors

`<silent><leader>sag ` Ag 

`<silent><leader>sl ` : Lines

`<silent><leader>sbl ` : BLines

`<silent><leader>st ` : Tags

`<silent><leader>sbt ` : BTags

`<silent><leader>sm ` : Marks

`<silent><leader>sw ` : Windows

`<silent><leader>slo ` Locate

`<silent><leader>sh ` : History

`<silent><leader>shc ` : History:

`<silent><leader>shs ` : History/

`<silent><leader>ss ` : Snippets

## Linux shell 

`ctrl-t` : Launch the fuzzy finder in the command line

`<command> **<tab>`: Launch fuzzy completion to the command. E.g.: `cd ~/**<tab>`


