# Mermaid

[Mermaid](https://mermaidjs.github.io/) allow generation of diagrams and flowcharts from text in a similar manner as markdown.

## Conversion Tool (mermaid.cli)

```sh
# Install
npm install -g mermaid.cli

# Convert to SVG
mmdc -i input.mmd -o output.svg

# Convert to PNG
mmdc -i input.mmd -o output.png
```

## Mermaid on Azure Devops Wikis 

You can add Mermaid diagrams to a wiki page, use the following syntax:

```markdown
::: mermaid
<mermaid diagram syntax>
:::
```

## Diagram Example 

### Sequence Diagram 

```mmd
sequenceDiagram

    participant p1 as Participant 01
    participant p2 as Participant 02

    Note left of p1: Note 01<br/>Content 01
    activate p1
    p1->>p2: Connect P1 to P2
    activate p2
    p2->p2: Action on P2 only
    p2-->>p1: Callback into P1
    deactivate p2
    deactivate p1
```

### Gantt Chart 

```mmd
gantt
dateFormat  YY-MM-DD
axisFormat  %b %d, %Y (%a)
excludes    weekends

title Buildout Special Clouds

Project Definition and Planning (Start): milestone, m_definition_start, 22-01-03, 0d

Projects and Product Evaluations (Start): milestone, m_evaluation_start, after m_definition_start, 0d

section S1 Projects
OneClick:  t_evaluation_p1, after m_evaluation_start, 1d
ELP:       t_evaluation_p2, after t_evaluation_p1, 1d

section S2 Projects
OneClick:  t_evaluation_p3, after t_evaluation_p2, 1d
ELP:       t_evaluation_p4, after t_evaluation_p3, 1d

section S3 Projects
OneClick:  t_evaluation_p5, after t_evaluation_p2, 1d
ELP:       t_evaluation_p6, after t_evaluation_p1, 1d


Projects and Product Evaluations (End): milestone, m_evaluation_end, after t_evaluation_p6, 0d

Project Definition and Planning (End): milestone, m_definition_end, after m_evaluation_end, 0d

click t_evaluation_p1 href "https://mermaidjs.github.io/"
```

![]( ../resources/mermaid_sequence_diagram.svg )

## References

- [Mermaid Online Tool](https://mermaid.live)
- [Mermaid Documentation](https://mermaid-js.github.io/mermaid/#/n00b-gettingStarted)
- [Azure Devops Wiki Markdown Guidance](https://docs.microsoft.com/en-us/azure/devops/project/wiki/wiki-markdown-guidance)
