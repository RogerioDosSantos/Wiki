# Regular expressions

## Tools

- [debuggex](https://www.debuggex.com/) : Not only allow you to test Regular expressions but also allow you to see it graphical representation.
- [regexr](https://regexr.com/): Site that allows to test regular expressions and regular expressions reference.

## CheatSheet

![](http://tinyurl.com/yd3md2wc)

`[abx-z]`: One character of: a, b, or the range x-z

`[^abx-z]`: One character except: a, b, or the range x-z

`a|b`: a or b

`a?`: Zero or one a's (greedy)

`a??`: Zero or one a's (lazy)

`a*`: Zero or more a's (greedy)

`a*?`: Zero or more a's (lazy)

`a+`: One or more a's (greedy)

`a+?`: One or more a's (lazy)

`a{4}`: Exactly 4 a's

`a{4,8}`: Between (inclusive) 4 and 8 a's

`a{9,}`: 9 or more a's

`(?=...)`: A positive lookahead

`(?!...)`: A negative lookahead

`(?:...)`: A non-capturing group

`(...)`: A capturing group

`^`: Beginning of the string

`$`: End of the string

`\d`: A digit (same as [0-9])

`\D`: A non-digit (same as [^0-9])

`\w`: A word character (same as [_a-zA-Z0-9])

`\W`: A non-word character (same as [^_a-zA-Z0-9]) 

`\s`: A whitespace character

`\S`: A non-whitespace character

`\b`: A word boundary

`\B`: A non-word boundary

`\n`: A newline

`\t`: A tab

`\cY`: The control character with the hex code Y

`\xYY`: The character with the hex code YY

`\uYYYY`: The character with the hex code YYYY

`.`: Any character

`\Y`: The Y'th captured group

## How-to

### Regular Expressions - Replace includes

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
