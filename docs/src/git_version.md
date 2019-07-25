# GitVersion 

[GitVersion](https://gitversion.readthedocs.io/en/latest/) is a tool to help you achieve Semantic Versioning on your project.

This tool is utile to get proper versioning of *NuGet* packages. 

## Install GitVersion in Ubuntu

```sh
# Install Mono and libcurl3
sudo apt-get install mono-complete 
sudo apt-get install libcurl3 

# Download the latest release from GitHub
wget https://github.com/GitTools/GitVersion/releases/download/v4.0.0/GitVersion-bin-net40-v4.0.0.zip

# Unzip it to a new folder
unzip GitVersion-bin-net40-v4.0.0.zip -d GitVersion

# Run GitVersion 
mono GitVersion/GitVersion.exe
```

