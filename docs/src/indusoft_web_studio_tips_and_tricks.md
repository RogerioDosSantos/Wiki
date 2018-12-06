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
