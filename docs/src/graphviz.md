# Graphviz 

[Graphviz](https://graphviz.gitlab.io) stands for graph visualization software. Graphs are created by describing them in a specifically created language: [dot](https://graphviz.gitlab.io/_pages/doc/info/lang.html).

## Examples

### Shapes

![](https://g.gravizo.com/svg?
  digraph D {
  A [shape=diamond]
  B [shape=box]
  C [shape=circle]
  A -> B [style=dashed, color=grey]
  A -> C [color="black:invis:black"]
  A -> D [penwidth=5, arrowhead=none]
  }
)

```dot
digraph D {
  A [shape=diamond]
  B [shape=box]
  C [shape=circle]
  A -> B [style=dashed, color=grey]
  A -> C [color="black:invis:black"]
  A -> D [penwidth=5, arrowhead=none]
}
```
