# CMake Toolchains #

## Naming convention ## 

  Toolchains have a loose name convention like <arch>[-<vendor>][-<os>]-<abi>.

   *<arch>* is for architecture: arm, mips, x86, i686...

   *<vendor>* is tool chain supplier: apple,

   *<os>* is for operating system: linux, none (bare metal)

   *<abi>* is for application binary interface convention: eabi, gnueabi, gnueabihf. Note: *hf* means hard float (floating pointers are calculated by hardware). 

## Toolchain File ##

The toolchain file should have the following CMake variables set:

### System Information and version ###

`CMAKE_SYSTEM_NAME` : E.g.: Linux

`CMAKE_SYSTEM_VERSION` : E.g.: 1

### Cross compiler information ###

`CMAKE_C_COMPILER` : E.g.:   /opt/arm-bcm2708-linux-gnueabi/bin/arm-bcm2708-linux-gnueabi-gcc

`CMAKE_CXX_COMPILER` : E.g.: /opt/arm-bcm2708-linux-gnueabi/bin/arm-bcm2708-linux-gnueabi-g++

`CMAKE_STRIP` : E.g.: /opt/arm-bcm2708-linux-gnueabi/bin/arm-bcm2708-linux-gnueabi-strip

### Target environment ###

`CMAKE_FIND_ROOT_PATH` : E.g.:  /opt/arm-bcm2708-linux-gnueabi/arm-bcm2708-linux-gnueabi

### Search for programs in the build host directorie ###

`CMAKE_FIND_ROOT_PATH_MODE_PROGRAM` : E.g.: NEVER

### # for libraries and headers in the target directorie ###

`CMAKE_FIND_ROOT_PATH_MODE_LIBRARY` : E.g.: ONLY

`CMAKE_FIND_ROOT_PATH_MODE_INCLUDE` : E.g.: ONLY
 
