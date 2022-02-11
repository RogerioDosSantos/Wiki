# Jsonnet 

A data templating language for app and tool developers

- Generate config data
- Side-effect free
- Organize, simplify, unify
- Manage sprawling config

## Templates

### Function with debug

```jsonnet

  FunctionName(parameter01, parameter02)::
    local ret = {
      "name01": "value01",
      "name02": "value02"
    };
    ret,
    /* local msg = { */
    /*     ret: ret */
    /* }; */
    /* std.trace('FunctionName: ' + std.toString(msg), ret), */

```

## References

- [Jsonnet Website](https://jsonnet.org/)

