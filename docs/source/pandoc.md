# Pandoc 

Pandoc is a document converter.

## Commands 

`pandoc --version` : Display the version of the Pandoc installed.

## Document Conversion Examples

### .docx to .md

- Pandoc: `pandoc -f docx -t markdown_mmd ./t1.docx --output=t1.md --atx-headers --wrap=none --toc --extract-media="resource"`

### .md to .html

HTML5: 
``` bash
pandoc -s doc.md -t html5 -c ../resources/style.css -o doc.html
``````

HTML5 with index:
``` bash 
pandoc -s doc.md -t html5 --toc -c ../resources/style.css -o doc.html
``````

Slide Show (Slidy):
``` bash 
pandoc -s doc.md -t slidy -s --webtex --base-header-level=1 -i -o doc.html
``````

Slide Show (DZSlides):
``` bash 
pandoc -s doc.md -t dzslides -o doc.html
``````

Slide Show (RevealJS):
``` bash 
pandoc -s doc.md -t revealjs -o doc.html
``````

Slide Show (Slideous):
``` bash 
pandoc -s doc.md -t slideous -o doc.html
``````

Slide Show (S5):
``` bash 
pandoc -s doc.md -t s5 -o doc.html
``````

Slide Show (Haddock):
``` bash 
pandoc -s doc.md -t haddock -o doc.html
``````

### .md to .docx

Word with index:
``` bash 
echo pandoc -s doc.md -t docx --toc -o doc.docx
``````

Word without index:
``` bash 
pandoc -s doc.md -t rtf -o doc.rtf
``````

### .md to .pdf

PDF without index: 
``` bash 
pandoc -s doc.md -t --latex-engine=xelatex -o doc.pdf
``````

PDF with index: 
``` bash 
pandoc -s doc.md -t --latex-engine=xelatex --toc -o doc.pdf
``````

### .md to .txt

- det - Plain Text: `pandoc -s doc.md -t plain -o doc.txt`
- detm - Linux Manual: `pandoc -s doc.md -t man -o doc.txt`
[AsciiDoc](http://asciidoc.org/): 
``` bash 
pandoc -s doc.md -t asciidoc -o doc.txt
``````

[LaTex](https://www.latex-project.org/): 
``` bash 
pandoc -s doc.md -t latex -o doc.txt
``````

[ConTeXt](http://wiki.contextgarden.net/What_is_ConTeXt): 
``` bash 
pandoc -s doc.md -t context -o doc.txt
``````

[Org](https://orgmode.org/): 
``` bash 
pandoc -s doc.md -t org -o doc.org
``````

[reStructuredText](http://docutils.sourceforge.net/rst.html): 
``` bash 
pandoc -s doc.md -t rst -o doc.text
``````

[Texinfo - The GNU Documentation System](https://www.gnu.org/software/texinfo/): 
``` bash 
pandoc -s doc.md -t texinfo -o doc.texi
``````

[Native](https://www.ntcolorado.com/): 
``` bash 
pandoc -s doc.md -t native -o doc.txt
``````

[TxStyle](https://txstyle.org/): 
``` bash 
pandoc -s doc.md -t textile -o doc.textile
``````

[MediaWiki](https://www.mediawiki.org): 
``` bash 
pandoc -s doc.md -t mediawiki -o doc.wiki
``````

[DokuWiki](https://www.dokuwiki.org): 
``` bash 
pandoc -s doc.md -t dokuwiki -o doc.wiki
``````

### .md to .xml

[OpenDocument](https://en.wikipedia.org/wiki/OpenDocument): 
``` bash 
pandoc -s doc.md -t opendocument -o doc.xml
``````

[OPML](https://en.wikipedia.org/wiki/OPML): 
``` bash 
pandoc -s doc.md -t opml -o doc.xml
``````

[DocBook](http://docbook.org/): 
``` bash 
pandoc -s doc.md -t docbook -o doc.xml
``````

[Adobe InCopy](https://en.wikipedia.org/wiki/Adobe_InCopy): 
``` bash 
pandoc -s doc.md -t icml -o doc.icml
``````

### .md to .md

Regular Markdown: 
``` bash 
pandoc -s doc.md -t markdown -o doc.md
``````

Github: 
``` bash 
pandoc -s doc.md -t markdown_github -o doc.html
``````

[MultiMarkdown](http://fletcherpenney.net/multimarkdown/): 
``` bash 
pandoc -s doc.md -t markdown_mmd -o doc.md
``````

[php Markdown Extra](https://michelf.ca/projects/php-markdown/extra/): 
``` bash 
pandoc -s doc.md -t markdown_phpextra  -o doc.md
``````

[CommonMark](http://commonmark.org/): 
``` bash 
pandoc -s doc.md -t commonmark -o doc.md
``````

[CommonMark](http://spec.commonmark.org/0.28/): 
``` bash 
pandoc -s doc.md -t markdown_strict -o doc.md
``````

Github README: 
``` bash 
pandoc -s source.md -t markdown_github -o ../../README.md
``````

### .md to .epub (Ebook)

[EPUB 3.0](http://idpf.org/epub/30): 
``` bash 
pandoc -s doc.md -t epub3 -o doc.epub
``````

[EPUB](http://idpf.org/epub): 
``` bash 
pandoc -s doc.md -t epub -o doc.epub
``````

## Batch conversions

### Export all files from a folder to html

```` bash 
find . -name '*.md' -exec basename {} .md \; | xargs -n1 -I XXX pandoc -s XXX.md -t html5 -c ../resources/style.css -o ../stage/XXX.html
````

## Vim Custom Mapped Key 

`<space> + deh `: Convert from markdown to HTML5

`<space> + deht `: Convert from markdown to HTML5 with index

`<space> + des `: Convert from markdown to Slide Show (Slidy)

`<space> + des2 `: Convert from markdown to Slide Show (DZSlides)

`<space> + des3 `: Convert from markdown to Slide Show (RevealJS)

`<space> + des4 `: Convert from markdown to Slide Show (Slideous)

`<space> + des5 `: Convert from markdown to Slide Show (S5)

`<space> + des6 `: Convert from markdown to Slide Show (Haddock)

`<space> + dew `: Convert from markdown to Word with index

`<space> + dewr `: Convert from markdown to Word without index

`<space> + dep `: Convert from markdown to PDF without index

`<space> + dept `: Convert from markdown to PDF with index

`<space> + det `: Convert from markdown to Plain Text

`<space> + detm `: Convert from markdown to Linux Manual

`<space> + deta `: Convert from markdown to [AsciiDoc](http://asciidoc.org/)

`<space> + detl `: Convert from markdown to [LaTex](https://www.latex-project.org/)

`<space> + detc `: Convert from markdown to [ConTeXt](http://wiki.contextgarden.net/What_is_ConTeXt)

`<space> + deto `: Convert from markdown to [Org](https://orgmode.org/)

`<space> + detr `: Convert from markdown to [reStructuredText](http://docutils.sourceforge.net/rst.html)

`<space> + deti `: Convert from markdown to [Texinfo - The GNU Documentation System](https://www.gnu.org/software/texinfo/)

`<space> + detn `: Convert from markdown to [Native](https://www.ntcolorado.com/)

`<space> + dett `: Convert from markdown to [TxStyle](https://txstyle.org/)

`<space> + detw `: Convert from markdown to [MediaWiki](https://www.mediawiki.org)

`<space> + detd `: Convert from markdown to [DokuWiki](https://www.dokuwiki.org)

`<space> + dex `: Convert from markdown to [OpenDocument](https://en.wikipedia.org/wiki/OpenDocument)

`<space> + dexo `: Convert from markdown to [OPML](https://en.wikipedia.org/wiki/OPML)

`<space> + dexd `: Convert from markdown to [DocBook](http://docbook.org/)

`<space> + dexi `: Convert from markdown to [Adobe InCopy](https://en.wikipedia.org/wiki/Adobe_InCopy)

`<space> + dem `: Convert from markdown to Regular Markdown

`<space> + demg `: Convert from markdown to Github

`<space> + demm `: Convert from markdown to [MultiMarkdown](http://fletcherpenney.net/multimarkdown/)

`<space> + demp `: Convert from markdown to [php Markdown Extra](https://michelf.ca/projects/php-markdown/extra/)

`<space> + demc `: Convert from markdown to [CommonMark](http://commonmark.org/)

`<space> + dems `: Convert from markdown to [CommonMark](http://spec.commonmark.org/0.28/)

`<space> + demr `: Convert from markdown to Github README

`<space> + deb `: Convert from markdown to [EPUB 3.0](http://idpf.org/epub/30)

`<space> + deb1 `: Convert from markdown to [EPUB](http://idpf.org/epub)


