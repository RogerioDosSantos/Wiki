# Kusto 

[Kusto / Azure Data Explorer](https://aka.ms/kusto) is a big data analytics cloud service optimized for interactive ad-hoc queries over structured, semi-structured, and unstructured data. Kusto is the internal code name of the project in Microsoft. Externally, the cloud service is called Azure Data Explorer.

The capabilities of Kusto itself are far more extensive than what is currently exposed to external customers via Azure Data Explorer. Over time, these capabilities will be available externally as well (at which time internal users will be migrated to the public offering).

Most of the Kusto team is located in ILDC (Microsoft Israel R&D Center), with representatives in Redmond and San Francisco.

## Queries Examples

### Top 10

```kusto
MyTable
| top 10 by MyColumn asc 
```

### Parse Json Content 

```kusto
// This query creats a new column with the content of MyColumn parsed in Json as well create an object to be used on the query itself
MyTable
| extend json_object = parse_json(replace(@"'", @'"', MyColumn))
| where json_object.key == 5))
```

## References 

- [Kusto Website](https://aka.ms/kusto)

