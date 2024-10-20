# VimWiki #

Wiki on VIM

## Commands ##

`<enter>` : Open a new document linked with the word

`<backspace>` : Return to were it came from

`:VWS /<string to search>/` : Search a string

`:lopen` : if you have more than one result you can display the list of result.

`:Vimwiki2HTML` : Convert the current page to HTML

`:VimwikiAll2HTML` : Convert the all pages to HTML

## VinWiki Markdown ##


`#` : Numbered List

`-` : Bullet List

`= Header1 = `: Header

`== Header2 == `: Header

`=== Header3 === `: Header

`*bold* `: bold text

`_italic_ `: italic text

`~~scratch~~` : scratch text

`,,sub,,` : sub text

`^upper^` : upper text

`[[wiki link]] `: wiki link

`[[wiki link|description]] `: wiki link with description

`{{<image url>}}` : Add an image embedded on the system. E.g.: `{{local:../../images/vimwiki_logo.png}}` or `{{http://vimwiki.googlecode.com/hg/images/vimwiki_logo.png}}`

`|text|text|text|`: Table column separator

`|---|---|---|` : Table Title separator

`----` : Horizontal Line

`term:: definintion`: Used to describe definition (Term is bold and definition is separated from term).

`:<tag 01>:<tag 02:...:` : Define Tags to the document

`{{{<code>}}}` : Source Code that occupies more than one line.

## Keys ##

`Enter` : Create a Link

`Tab / Shift + Tab` : Find the next or previous.

`\wd` : Delete a link (:VimwikiDeleteLink)

`\wr` : Rename a link (:VimwikiRenameLink)

`=` : Increase Header level

`-`: Decrease Header level

## Key bindings - Normal Mode ##

`<Leader>ww `: Open default wiki index file.

`<Leader>wt `: Open default wiki index file in a new tab.

`<Leader>ws `: Select and open wiki index file.

## Key bindings - Normal Mode (Custom) ##


`<Leader>wc` : Toggle callendar

`<Leader>wl` : Generate a diary

`<Leader>wp` : Publish current file

`<Leader>wpa` : Publish all files

