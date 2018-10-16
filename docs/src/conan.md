# Conan Package Manager

[Conan](https://docs.conan.io) is a decentralized package manager with a client-server architecture. This means that clients can fetch packages from, as well as upload packages to, different servers ("remotes"), similar to the "git" push-pull model to/from git remotes.

## Commands

`pip install conan`: Install *Conan* client. Note: You need to have *Python 2.7 or 3.X* distribution installed on your machine.

`conan search` : Display the current packages available in the cache.

`conan search <package_name>` : Details on the package manager

`conan remove <package_name>` : Removes a package from the cache. Note: You can use expressions (E.g.:  conan remove boost*)

`conan search "<search_word>*" -r=conan-center` : Search for a package based in the search word passed.

`conan install <source_folder> --install-folder <stage_folder>`: Prepare a folder for compilation. The source folde is the folder where the `conanfile.py` file is located. After the preparation you can call the command `conan build` to build the application. E.g.: `conan install . --install-folder stage`

`conan build <source_folder> --build-folder <stage_folder>`: Build the application in the folder. The `<source_folder>` is the folder where the `conanfile.py` is located. The end result will be in the `<stage_folder>/bin` folder. Note: You can execute all process for creating the package (`install`, `build`, `packaging`) by using the command `conan create`. E.g.: `conan build . --build-folder stage`

`conan create <source_folder> <package_name>/<package_state>`: Create a package from the source. The `<source_folder>` is the folder where the `conanfile.py` is located. E.g.: `conan create . my_project/dev`

## Environment Variables

`CONAN_USER_HOME` : Define the location of the cache directory (Default: ~/.conan/data)


## Package Manager Repository

The [Artifactory - jfrog:artifactory-cpp-ce](https://jfrog.com/blog/announcing-jfrog-artifactory-community-edition-c-c/) is a free version of the *Conan Package Manager Repository* with an *HTML* user interface that allows you to manage the packages. The *Community edition* is *free* and can run using *Docker*

`docker pull docker.bintray.io/jfrog/artifactory-cpp-ce` : Pull the Artifactory CE Docker Image

`docker run --name artifactory -d -p 8081:8081 docker.bintray.io/jfrog/artifactory-cpp-ce:latest`: Run the *Artifactory* into a container. Note: When running an Artifactory Docker container, you can pass in Java arguments using the -e EXTRA_JAVA_OPTIONS flag. For example, to specify a maximum memory allocation of 8 GB, you could run `run --name artifactory -d -p 8081:8081 -e EXTRA_JAVA_OPTIONS=-Xmx8g docker.bintray.io/jfrog/artifactory-pro:latest`



