# Linux Kernel #

## Device Driver ##


Policy-free drivers (Preferred) have a number of typical characteristics:
 - These include support for both synchronous and asynchronous operation
 - The ability to be opened multiple times
 - The ability to exploit the full capabilities of the hardware
 - The lack of software layers to simplify things or provide policy-related operations.

Device Types:
 - Char modules: Streams (open, close, read and write)
 - Block modules: Allow connect per block (512 bytes or any x^2). It easily mapped to a node of the file system (open, close, read and write).
 - Network modules: Sockets and packet transmission.
