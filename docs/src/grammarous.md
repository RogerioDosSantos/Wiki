# Grammarous

## Introduction

[Grammarous](https://github.com/rhysd/vim-grammarous) is Plugin that allows spell check from Vim using [LanguageTool](https://www.languagetool.org/) which requires Java 8+ installed in the machine.

To install Java 8+ on a Linux machine you can execute the following commands:

```bash
sudo apt-get update
sudo apt-get install default-jre
```

## Commands

`:GrammarousCheck` : Start the spell check.

`:GrammarousReset` : reset a current active check.

## Key Maps on the Information Windows

`q` : Quit the info window

`<CR>` : Move to the location of the error

`f` : Fix the error automatically

`r` : Remove the error without fix

`R` : Disable the grammar rule in the checked buffer

`n` : Move to the next error's location

`p` : Move to the previous error's location

`?` : Show help of the mapping in info window

## Custom Mapping

`nnoremap <silent><leader>sc :GrammarousCheck<cr>`

The mapping below will only work when *Grammarous* is active: 

`nmap <buffer><C-n> <Plug>(grammarous-move-to-next-error)`
`nmap <buffer><C-p> <Plug>(grammarous-move-to-previous-error)`
`nmap <buffer><C-f> <Plug>(grammarous-fixit)`
`nmap <buffer><C-a> <Plug>(grammarous-fixall)`
`nmap <buffer><C-i> <Plug>(grammarous-remove-error)`

