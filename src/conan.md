# Conan Package Manager

![](http://tinyurl.com/ycjgsuhy)

[Conan](https://docs.conan.io) is a decentralized package manager with a client-server architecture. This means that clients can fetch packages from, as well as upload packages to, different servers ("remotes"), similar to the "git" push-pull model to/from git remotes.


## Commands

`pip install conan`: Install *Conan* client. Note: You need to have *Python 2.7 or 3.X* distribution installed on your machine.

`conan search` : Display the current packages available in the cache.

`conan search <package_name>` : Details on the package manager

`conan remove <package_name>` : Removes a package from the cache. Note: You can use expressions (E.g.:  conan remove boost*)

`conan search "<search_word>*" -r=conan-center` : Search for a package based in the search word passed.

`conan install <package_name>/<package_version>@<package_owner>/<package_channel>` : Install a specific package. E.g.: `Poco/1.9.0@pocoproject/stable`

`conan install <source_folder> --install-folder <stage_folder>`: Prepare a folder for compilation. The source folde is the folder where the `conanfile.py` file is located. After the preparation you can call the command `conan build` to build the application. E.g.: `conan install . --install-folder stage`

`conan build <source_folder> --build-folder <stage_folder>`: Build the application in the folder. The `<source_folder>` is the folder where the `conanfile.py` is located. The end result will be in the `<stage_folder>/bin` folder. Note: You can execute all process for creating the package (`install`, `build`, `packaging`) by using the command `conan create`. E.g.: `conan build . --build-folder stage`

`conan create <source_folder> <package_name>/<package_state>`: Create a package from the source. The `<source_folder>` is the folder where the `conanfile.py` is located. E.g.: `conan create . my_project/dev`

`conan remote add <repository_server_name> <repository_server_url> [false]`: Add a *repository server*. If `false` is informed the remote will not look for *SSL* autentication `[Verify SSL: True]`

`conan user -p <password> -r <repository_server_name> <user_name>`: Log an user to the a *repository server*

`conan upload <full_package_name> -r <repository_server_name> -all`: Upload a package to a repository server. The `<full_package_name>` uses the `<NAME>/<VERSION>@<USER>/<CHANNEL>` format.

`conan profile show <profile>`: Show the content of a profile. If only the profile name is passed, it will look on the default path '.conan/profiles'. If a custom directory is passed it will display the profile of the custom directory. E.g.: `conan profile show default`

`conan profile update <options> <profile>`: Update the options of a profile. E.g.: `conan profile update options.branch=dev default`

``

## Environment Variables

`CONAN_USER_HOME` : Define the location of the cache directory (Default: ~/.conan/data)

## conanfile.py

### Methods Calling Sequence

#### When executing conan install command

1- config_options()
2- configure()
3- requirements()
4- build_requirements()
5- package_id()
6- package_info()
7- deploy()

#### When executing conan build command

1- imports()
2- build()

#### When executing conan create command

1- config_options()
2- configure()
3- requirements()
4- package_id()
5- build_requirements()
6- build_id()
7- system_requirements()
8- source()
9- imports()
10- build()
11- package()
12- package_info()

## CMake Configuration

### Basic configuration

```cmake
project(project_name)
cmake_minimum_required(VERSION 2.8.12)
# add_definitions("-std=c++11")
include(${CMAKE_BINARY_DIR}/conanbuildinfo.cmake)
conan_basic_setup()
add_executable(project_name ./src/main.cpp)
target_link_libraries(project_name ${CONAN_LIBS})
```

### Allow a different configuration if is using Conan

```cmake
if(CONAN_SYSREQUIRES_MODE)
	message("*** Compiling using Conan ***")
	include(./build.cmake)
	return()
endif()
```

## Package Manager Repository

The [Artifactory - jfrog:artifactory-cpp-ce](https://jfrog.com/blog/announcing-jfrog-artifactory-community-edition-c-c/) is a free version of the *Conan Package Manager Repository* with an *HTML* user interface that allows you to manage the packages. The *Community edition* is *free* and [can run using *Docker*](https://www.jfrog.com/confluence/display/RTF/Installing+with+Docker)

`docker pull docker.bintray.io/jfrog/artifactory-cpp-ce` : Pull the Artifactory CE Docker Image

`docker run --name artifactory -d -p 8081:8081 -v conan_repository_data:/var/opt/jfrog/artifactory docker.bintray.io/jfrog/artifactory-cpp-ce:latest`: Run the *Artifactory* into a container. Note: When running an Artifactory Docker container, you can pass in Java arguments using the -e EXTRA_JAVA_OPTIONS flag. For example, to specify a maximum memory allocation of 8 GB, you could run `run --name artifactory -d -p 8081:8081 -e EXTRA_JAVA_OPTIONS=-Xmx8g docker.bintray.io/jfrog/artifactory-pro:latest`



