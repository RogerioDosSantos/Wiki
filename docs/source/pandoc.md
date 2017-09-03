# Pandoc #

Pandoc is a document converter.

## Commands ##

`pandoc --version` : Display the version of the Pandoc installed.

## Custom Mapped Key ##

`<space> + dch `: Create the html directory. The directory created will be above the current directory of the file.

`<space> + deh `: Save the document as html on the html output directory.

`<space> + dcw `: Create the word directory. The directory created will be above the current directory of the file.

`<space> + dew `: Save the document as word on the word output directory.

## Markdown ##

### Headers ###

````
# This is H1.
## This is H2.
### This is H3.
#### ...  
###### This is H6.  
````

### Basic Emphasis ###

````
*single asterisks*  
_single underscores_  
**double asterisks**  
__double underscores__ 
````

### Strikeout, superscript and subscript ###

````
~~~deleted text~~~  
H~2~O is a liquid.  
2^10^ is 1024. 
````

### Math ###

````
$a^2 = b^2 + c^2$  
$x^{17} - 1$  
$M^\bot = \{ f \in V' : f(m) = 0 \mbox{ for all } m \in M \}.$  
$\[ \cos(\theta + \phi) = \cos \theta \cos \phi - \sin \theta \sin \phi \]$  
$\[ |y - x| < \delta \]$ then $\[ |f(y) - f(x)| < \epsilon. \]$  
\newcommand{\tuple}[1]{\langle #1 \rangle}  
$\tuple{a, b, c}$  
````

### Links ###

````
This is an automatic link <http://www.google.com>.  
This is [inline link](http://example.com/ "Title") inline link with title.  
This is [inline link](http://example.com/ ) inline link without title attribute.  
This is [reference link ][ref] with ID.  
This is [reference link][] without ID.  
This is [Inline Internal link](#TOC).  
This is [Internal link].  

[ref]: http://example.com/  
[reference link]: http://www.google.com  
[Internal link]: #pandocs-markdown-reference 
````

### Images ###

````
![](http://3.bp.bloGspot.com/-BLhmfBdELH0/UBT3uUd7r5I/AAAAAAAAADw/-rnn2kz5vjY/s220/oops_monk01_120.jpg "OopsMonk")

![Alt text][pic2]

[pic2]: http://3.bp.bloGspot.com/-BLhmfBdELH0/UBT3uUd7r5I/AAAAAAAAADw/-rnn2kz5vjY/s220/oops_monk01_120.jpg 
````

`![<caption>]( <image url>  )`: Add a message. Note: The space is important othwerise the word converter might not find the image. `E.g.: ![Driver List]( ../resource/Image_29_Tatsoft.png   )`

`![<caption>]( <image url> ){ <css properties> }`: Add image with any .css propery. `E.g.: ![InduSoft]( ../resource/Image_04_Indusoft.png  ){width=100% heigh=100%}`

### Embedded Video ###

````
<iframe src="http://embed.ted.com/talks/lang/zh-tw/ken_robinson_how_to_escape_education_s_death_valley.html"
width="560" height="315" frameborder="0" scrolling="no" 
webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
````

### Basic Code block ###

Force code block(more then three ~)

````
~~~~~~~
if (a > 3) {
  moveShip(5 * gravity, DOWN);
  }
~~~~~~~
````

### Code Syntax highlight ###

````
```python
import os
import sys

def application(env, start_response):  
    start_response('200 OK', [('Content-Type','text/html')])  
    return "Hello WSGI!!"
```
````

### Line Number ###

````
~~~~ {#pycode .python .numberLines startFrom="10"}
import os
import sys

def application(env, start_response):  
    start_response('200 OK', [('Content-Type','text/html')])  
    return "Hello WSGI!!"
~~~~
````

### Blockquotes ###

````
> This is a block quote.
>
> > A block quote within a block quote.
> > 
> > > Nets.
````

### Unordered (Bulleted) ###

````
* fruits
    + apples
        - macintosh
        - red delicious
    + pears
    + peaches
* vegetables
    + brocolli
    + chard
````

### Ordered (Numbered) ###

````
1. list1.
1. list2.
1. list3.
1. list4.
````

### Lists ###

````
(@)  My first example will be numbered (1).
(@)  My second example will be numbered (2).

Explanation of examples.

(@)  My third example will be numbered (3).  

(@good)  This is a good example.

As (@good) illustrates, ...  
````

### Footnotes ###

````
Here is an inline note.^[Inlines notes are easier to write, since
you don't have to pick an identifier and move down to type the
note.]  

Here is a footnote reference,^[^[^1]^]^ and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.

        { some.code }

    The whole paragraph can be indented, or just the first
    line.  In this way, multi-paragraph footnotes work like
    multi-paragraph list items.

This paragraph won't be part of the note, because it
isn't indented.
````

### Simple tables ###

````
 Right     Left     Center     Default
-------     ------ ----------   -------
     12     12        12            12
    123     123       123          123
      1     1          1             1
````

### Multiline tables ###


````
--------------------------
 Centered   Default           Right Left
  Header    Aligned         Aligned Aligned
----------- ------- --------------- -------------------------
   First    row                12.0 Example of a row that
                                    spans multiple lines.

  Second    row                 5.0 Here's another one. Note
                                    the blank line between
                                    rows.
--------------------------
````


