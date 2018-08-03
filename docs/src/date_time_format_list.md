# Date and Time Format List

| Format/result                   | Command                    | Output                        |
| ---                             | ---                        | ---                           |
| YYYY-MM-DD_hh:mm:ss             | date +%F_%T                | $(date +%F_%T)                |
| YYYYMMDD_hhmmss                 | date +%Y%m%d_%H%M%S        | $(date +%Y%m%d_%H%M%S)        |
| YYYYMMDD_hhmmss (UTC version)   | date --utc +%Y%m%d_%H%M%SZ | $(date --utc +%Y%m%d_%H%M%SZ) |
| YYYYMMDD_hhmmss (with local TZ) | date +%Y%m%d_%H%M%S%Z      | $(date +%Y%m%d_%H%M%S%Z)      |
| YYYYMMSShhmmss                  | date +%Y%m%d%H%M%S         | $(date +%Y%m%d%H%M%S)         |
| YYYYMMSShhmmssnnnnnnnnn         | date +%Y%m%d%H%M%S%N       | $(date +%Y%m%d%H%M%S%N)       |
| YYMMDD_hhmmss                   | date +%y%m%d_%H%M%S        | $(date +%y%m%d_%H%M%S)        |
| Seconds since UNIX epoch:       | date +%s                   | $(date +%s)                   |
| Nanoseconds only:               | date +%N                   | $(date +%N)                   |
| Nanoseconds since UNIX epoch:   | date +%s%N                 | $(date +%s%N)                 |
| ISO8601 UTC timestamp           | date --utc +%FT%TZ         | $(date --utc +%FT%TZ)         |
| ISO8601 UTC timestamp + ms      | date --utc +%FT%T.%3NZ     | $(date --utc +%FT%T.%3NZ)     |
| ISO8601 Local TZ timestamp      | date +%FT%T%Z              | $(date +%FT%T%Z)              |
| YYYY-MM-DD (Short day)          | date +%F\(%a\)             | $(date +%F\(%a\))             |
| YYYY-MM-DD (Long day)           | date +%F\(%A\)             | $(date +%F\(%A\))             |
| YYYY-MM-DD_hh:mm:ss             | date +%F_%T                | 2018-01-24_13:06:51           |
| YYYYMMDD_hhmmss                 | date +%Y%m%d_%H%M%S        | 20180124_130651               |
| YYYYMMDD_hhmmss (UTC version)   | date --utc +%Y%m%d_%H%M%SZ | 20180124_040651Z              |
| YYYYMMDD_hhmmss (with local TZ) | date +%Y%m%d_%H%M%S%Z      | 20180124_130651JST            |
| YYYYMMSShhmmss                  | date +%Y%m%d%H%M%S         | 20180124130651                |
| YYYYMMSShhmmssnnnnnnnnn         | date +%Y%m%d%H%M%S%N       | 20180124130651170243401       |
| YYMMDD_hhmmss                   | date +%y%m%d_%H%M%S        | 180124_130651                 |
| Seconds since UNIX epoch:       | date +%s                   | 1516766811                    |
| Nanoseconds only:               | date +%N                   | 174236092                     |
| Nanoseconds since UNIX epoch:   | date +%s%N                 | 1516766811175655627           |
| ISO8601 UTC timestamp           | date --utc +%FT%TZ         | 2018-01-24T04:06:51Z          |
| ISO8601 UTC timestamp + ms      | date --utc +%FT%T.%3NZ     | 2018-01-24T04:06:51.178Z      |
| ISO8601 Local TZ timestamp      | date +%FT%T%Z              | 2018-01-24T13:06:51JST        |
| YYYY-MM-DD (Short day)          | date +%F\(%a\)             | 2018-01-24(chinese)           |
| YYYY-MM-DD (Long day)           | date +%F\(%A\)             | 2018-01-24(chinese)           |
