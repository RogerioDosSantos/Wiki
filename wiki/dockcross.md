# Dockcross

Cross compiling toolchains in Docker images.

## Commands

## Installation

This image does not need to be run manually. Instead, there is a helper script
to execute build commands on source code existing on the local host filesystem. This
script is bundled with the image.

To install the helper script, run one of the images with no arguments, and
redirect the output to a file::

  docker run --rm CROSS_COMPILER_IMAGE_NAME > ./dockcross
  chmod +x ./dockcross
  mv ./dockcross ~/bin/

Where `CROSS_COMPILER_IMAGE_NAME` is the name of the cross-compiler toolchain
Docker instance, e.g. `dockcross/linux-armv7`.

Only 64-bit images are provided; a 64-bit host system is required.

## Usage

``` sh
cd ~/src/dockcross
docker run --rm dockcross/linux-armv7 > ./dockcross-linux-armv7
chmod +x ./dockcross-linux-armv7
./dockcross-linux-armv7 bash -c '$CC test/C/hello.c -o hello_arm'
``` 

Note how invoking any toolchain command (make, gcc, etc.) is just a matter of prepending the **dockcross** script on the commandline::


``` sh
  ./dockcross-linux-armv7 [command] [args...]
```

The dockcross script will execute the given command-line inside the container,
along with all arguments passed after the command. Commands that evaluate
environmental variables in the image, like `$CC` above, should be executed in
`bash -c`. The present working directory is mounted within the image, which
can be used to make source code available in the Docker container.


