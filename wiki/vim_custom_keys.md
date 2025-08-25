# Vim Custom Keys

## Navigation 

### Windows 

`nnoremap <leader>x :x<cr>` : Close current window

`nnoremap <leader>X :q!<cr>` : Close current window (Forced)

`nnoremap <leader><leader> <c-^>` : Previous Window

### Splits 

`nnoremap <silent><leader>vv :vsplit<cr>` : Vertical Split

`nnoremap <silent><leader>hh :split<cr>` : Horizontal Split

### Tabs 

`nnoremap <leader>tf :tabe` : Open file in a new tab

`nnoremap <silent><leader>tn :tabn<cr>` : Open next tab

`nnoremap <silent><leader>tp :tabp<cr>` : Open previous tab

### List and Preview 

`nnoremap <leader>pt :ptag <C-R><C-W> <CR>` : Preview tag

`nnoremap <silent><leader>lo :lopen<cr>` Open a list to show the location list for current window

`nnoremap <silent><leader>po :cw<cr>` : Open Preview Window (If exist)

`nnoremap <leader>pc :pc <CR>` : Close Preview

## Buffer 

`nnoremap <leader>bbb :buffers` : List Buffers

`nnoremap <silent><leader>bbn :bnext<cr>` Go to the next buffer

`nnoremap <silent><leader>bbp :bprevious<cr>` Go to the previous buffer

`nnoremap <silent><leader>bbd :bdelete<cr>` : Delete current Buffer

## Folding 

`nnoremap <silent>zss :set foldmethod=syntax<cr>` : Set the folding method to Syntax

`nnoremap <silent>zsm :set foldmethod=manual<cr>` : Set the folding method to Manual

`nnoremap <silent>zsi :set foldmethod=indent<cr>` : Set the folding method to Indent

## CTags 

`nnoremap <leader>tc :! ctags -R ~/` : Create Custom Tags

`nnoremap <silent><leader>ta :! ctags -a -f ~/tags -R %:p:h<cr>` : Append Custom Tags

`nnoremap <silent><leader>tr :! rm ~/tags<cr>` : Remove Custom Tags

## Grep 

`nnoremap <leader>g0 :grep! ''` : Call grep function to be added a string

`nnoremap <leader>g<level 1-5> :grep! '\b<C-R><C-W>\b'<CR>:cw<CR>` : Grep the string on the cursor on the folder level informed. `E.g.: <space>g1`

`vnoremap <leader>g<level 1-5> y:grep! '<C-R>"'<CR>:cw<CR>'"'` : Grep the string on the selection on the folder level informed. `E.g.: <space>g1`

## Find / Search

`vnoremap // y/<C-R>"<cr>"` : Search Visually selected text

`nnoremap <silent><leader>, :noh<cr>` : Stop highlight after searching

`nnoremap <leader>fh :w<cr>:e %:r.h<cr>` : Find .h

`nnoremap <leader>fhi :w<cr>:e ../include/%:r.h<cr>` : Find .h (include)

`nnoremap <leader>fc :w<cr>:e %:r.cpp<cr>` : Find .cpp

`nnoremap <leader>fcs :w<cr>:e ../source/%:r.cpp<cr>` : Find .cpp (source)

## Files 

`nnoremap <silent><leader>e :Lexplore<cr>, :noh<cr>` : Stop highlight after searching

`nnoremap <leader>fl :w<cr>:e ~/.location_list.wiki<cr>` : Open location List

`map <leader>s <C-S>` : Save file

## Shell 

`nnoremap <leader>c :GetShell` : Shell commands

## Spell Check 

`nnoremap <leader>se :setlocal spell spelllang=en_us<cr>:set spellfile=$HOME/.vim/spell-en.utf-8.add<cr>` : Set spell check to English.

`nnoremap <leader>sp :setlocal spell spelllang=pt_br<cr>:set spellfile=$HOME/.vim/spell-pt.utf-8.add<cr>` : Set spell check to Portuguese

`nnoremap <leader>so :set nospell<cr>` : Stop Spell Check

`nnoremap <leader>sa :spellrepall<cr>` : Correct all strings with the previous correction

## Text Objects 

`f` : Allow to select inside files (E.g.: vif, yif, vaf, yaf etc.)
