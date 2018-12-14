# Migrating to Visual Studio 2017 platform toolset

## Configuration Changes

![](http://tinyurl.com/ybdr3lc4)

**Note**: Windows SDK version will not appear until you apply the *Platform Toolset* to be *Visual Studio 2017 (v141)*

## Issues

#### MIDL Error

##### Error

![](http://tinyurl.com/ydcbm94k)

##### Solution

Change the *Minimum Target Platform* to *empty*

![](http://tinyurl.com/yah279ew)


#### Several afxwin not declared macros

##### Error

![](http://tinyurl.com/ya5dyhwd)

##### Solution

In some part of the code, or property sheet the *Windows Version* is being defined.

E.g.:

```ini
WINVER=0x500
_WIN32_WINNT=0x0600
```



