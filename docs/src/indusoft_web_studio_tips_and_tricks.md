# InduSoft Web Studio Tips and Tricks

`viewer.exe nosplash /ceemul /noprogressbar /ds1:localhost /dsp:1234 /url:"file://<application_path>"` : Command to start the Viewer in CE emulation mode pointing to an application.

## How-to

### Configure CEView to run in device without monitor

- Add the following entry on your *CEView.ini*

```ini
[OEM]
BlindDevice=1
```

### Configure IIS to run both ISSymbol and SMA

![](http://tinyurl.com/ybby4k2a)


### Change CEView Application manually

- Change the *CEApp.ini* file to point to the desired application.

```ini
[Application]
Configuration=C:\Users\iws\app\app.app
Directory=C:\Users\iws\app\
```

### SMA - Manually Start Studio Mobile Access

With the InduSoft runtime running (TCP/IP Task should be running), you can start the *Studio Mobile Access Task* manually using the following command:

```shell
#Start the Studio Mobile Task with an application located at C:\workspace\app\app.app
"c:\workspace\Bin\MobileAccessTask.exe" /port:4448 /s:false /project:"C:\workspace\app\app.app" /remoteport:1234
```

### SMA - Load a specific screen directly

To go directly to an screen in the *Studio Mobile Access*, you can type the following in the *URL*:

`<application_url>?screen=<screen_name>.<scree_extension>`

E.g.: `http://localhost:10080/sma/?screen=startup.sg`

