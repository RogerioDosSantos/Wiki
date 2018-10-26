# Regular expressions

## Tools

- [regexr](https://regexr.com/): Site that allows to test regular expressions and regular expressions reference.

## Examples and Patterns

### Replace includes

```c++
// Search Expression
#include "\.\..*\/(my_project\/.*)" 

// Replace Expression
#include <$1> 

// Will find
#include "../../my_project.h"
#include "../my_project.h"
#include "../my_project/sub_project.h"
#include "../my_project/sub_project.hpp"

// And replace to
#include <my_project.h>
#include <my_project.h>
#include <my_project/sub_project.h>
#include <my_project/sub_project.hpp>
```

**Note**: Parenthesis `(  )` indicate group. Everything inside it will be available in the variable `$1`
