# X11 Bridge 

The [X11 protocol or X Window System Protocol](https://www.x.org/wiki/) for GUI environment common on *Unix-like* operational system.

With *X11* you can remote control a machine similarly to the [VNC](https://www.realvnc.com/en/connect/download/viewer/) and [Remote Desktop](https://support.microsoft.com/en-us/help/4028379/windows-10-how-to-use-remote-desktop). 

However, the main differences between *VNC* and *x11* is that *VNC* sends all mouse movements to the remote machine, and all screen updates come back as compressed *bitmap* data. This truly is a live remote connection at the lowest level. *VNC* uses compression, so this performs better than you might think, but still it’s quite an inefficient protocol if you have a poor connection to the remote machine.

*X11*/windows however, runs a *X11* display server on the computer you are sitting at, and the programs running on the remote machine just send display update commands in to that server. This is inherently much more efficient, and more flexible.

## References 

- [docker-x11-bridge](https://github.com/JAremko/docker-x11-bridge)
- [x11docker](https://github.com/mviereck/x11docker)
- [Viewing Dockerised Desktops via an X11 Bridge, novnc and RDP, Sort of...](https://blog.ouseful.info/2019/02/06/viewing-dockerised-desktops-via-an-x11-bridge-novnc/)
- [X11 on Raspberry Pi – remote login from your laptop](http://blog.whaleygeek.co.uk/x11-on-raspberry-pi-remote-login-from-your-laptop/)


