# Gravizo

Gravizo is a simple way of describing graphs and include it easily in your web for free, blog, markdown page, github, and any location where remote images can be showed. Gravizo uses Graphviz to render graphs. It supports DOT, PlantUML, UMLGraph syntax and SVG in JSON format. It will include other formats in the future. No javascript, no plugins needed so you can include in any document.

## Examples

### Using Markdown

![](https://g.gravizo.com/svg?
    digraph G {
    aize ="4,4";
    main [shape=box];
    main -> parse [weight=8];
    parse -> execute;
    main -> init [style=dotted];
    main -> cleanup;
    execute -> { make_string; printf }
    init -> make_string;
    edge [color=red];
    main -> printf [style=bold,label="100 times"];
    make_string [label="make a string"];
    node [shape=box,style=filled,color=".7 .3 1.0"];
    execute -> compare;
    }
)

### Using indirect Markdown

![Alt text](https://g.gravizo.com/source/svg/thiisthemark?http%3A%2F%2Fwww.gravizo.com)
![Alt text](http://www.gravizo.com/img/1x1.png#

thiisthemark        
@startuml
object Object01
object Object02
object Object03
object Object04
object Object05
object Object06
object Object07
object Object08

Object01 <|-- Object02
Object03 *-- Object04
Object05 o-- "4" Object06
Object07 .. Object08 : some labels
@enduml
thiisthemark        
        

