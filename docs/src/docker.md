# Docker 

## Commands 

`docker search [-s <number_of_stars>] <text>` : Search for a docker image into online repositories

`docker images` : List the available images

`docker ps` : List the running containers

`docker ps -a` : List all containers

`docker ps --format '{{.Names}}'`: List the running container displaying only the container names.

`docker run --name <container name> -it <image name>:<image version>` : Start a new container from image. E.g.: `docker run --name vim_install -it ubuntu:16.04`

`docker run --name <container name> --env-file <environment_config_file> <image name>:<image version>` : Start a new container from image and sets the environment variables based into a file configuration. This is useful when you want to enter credentials.

`docker start <container name>` : Start a stopped container. E.g.: `docker start vim_install`

`docker attach <container name>` : Attach to a running container. E.g.: `docker attach vim_install`

`docker exec -it <container name> <program to execute>` : Execute a program in a running container. E.g.: To execute the command line in a Linux based running container you can use `docker exec -it <container name> <program to execute>`.

`docker rm <container name>` : Remove a container

`docker cp <source file> <destination container>:<destination location>` : Copy a file from the host computer to the container. E.g.: `docker cp ./host/temp/Programs/CppLint/file.txt vim:/root/temp`

`docker cp <destination container>:<destination location> <source file>` : Copy a file from the container to host computer. E.g.: `docker cp vim:/root/temp/file.txt ./host/temp/Programs/CppLint/`

`docker commit -a "<author>" -m "<message>" <container id> [<dockerhub user>]<image name>:<tag>` : Commit a container into an image. E.g.: `docker commit -a "Roger Santos" -m "My Comment" ec6cc8c6e490 rogersantos/vim:1.0`

`docker diff <container id>` : Shows the difference between the current container and the original image.

`docker tag <image id> [<dockerhub user>]/<image name>:<tag>`: Tag an image. E.g.: `docker tag 5ffd21ba24cf rogersantos/vim:1.0`

`docker push <full image name>`: Publish the image into the docker hub. Note: You need to be logged before pushing an image. E.g.: `docker push rogersantos.azurecr.io/vim`

`docker login` : Log into a repository

`docker login --username <user_name> --password <password> <server>` : Login into a repository into a specific server.

`echo '<password>' | docker login --username <user> --password-stdin <server>`: Login into a repository into specific server safelly

`docker volume create <volume_name>`: `Create a volume`

`docker volume ls -qf dangling=true | xargs -r docker volume rm` : Remove all volumes that are not being used.

`docker volume rm $(docker volume ls -f dangling=true -q)` : Remove dangling volumes (Volumes not being used at the moment). Note: if you need sudo use: `sudo docker volume rm $(sudo docker volume ls -f dangling=true -q)`

`docker stop $(docker ps -a -q)`: Stop all containers.  

`docker rm $(docker ps -a -q)`: Remove all containers.

`docker rm $(docker ps -a -f status=exited -q)`: Remove all exited containers.

`docker rmi <image name>` : Remove an image

`docker rmi $(docker images -a -q)`: Remove all images.

`docker rmi $(docker images -f dangling=true -q)`: Remove dangling images

`docker build -f <docker_file_name> [--build-arg http_proxy=<proxy url>] -t <image_tag>` : E.g: docker build -f ./DockerFile -t rogersantos/image_01:latest

`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_name_or_id>`

`docker inspect -f '{{ range .Mounts  }}{{ if eq .Destination "/home/conan/workspace"  }}{{ .Source  }}{{ end  }}{{ end  }}' builder_linux_x86`: Get the path of the host machine of a volume of a container path that was mounted.

`docker rm $(docker ps -a -q)` : Remove all docker containers

`docker login -u <registry_user> -p <password> <registry_url>`:  Allow docker to login on the Azure registry

`docker image prune` : Clean old docker images

`docker volume prune`: Clean old volumes

`docker system prune`: Clean all old images and volumes

`docker system prune -a`: Clean all containers

`docker logs -f <container>` : View the logs of a container.

`docker run --rm -v /var/run/docker.sock:/var/run/docker.sock rogersantos/docker_runlike <image_name>`: Get the run command of a docker image.

`docker stats [<container_name>]`: Provide the statistics of resources consumed by the containers

## Keys

`crtl+p ctrl+q`: Detach from a session. Note: You might have to press ctrl+c after in case you are using tmux

## Volumes Credentials

Be aware that when changing your password, you will need to go to settings >> shared drivers >> reset credentials. Once you select the drivers you want to share again and enter the new password, everything will start working again.

## Start / Attach options 

`-v <local folder>:<remote folder>` : Mount a folder (volume) from the host into the container. Note the container folder should have the full path. E.g.: `-v ~/host:/root/host`. 

`--restart=always` : Allow the container to always restart

## Multi-Platform 

`docker run --rm --privileged multiarch/qemu-user-static:register --reset` : Allow you run different platforms using docker. It uses QEMU emulation to do it.

## Docker Compose Files 

## Docker Machine 


`docker-machine.exe create <machine name> --driver virtualbox --virtualbox-cpu-count "-1" --virtualbox-disk-size "<disk size>" --virtualbox-memory "<memory size>" --virtualbox-boot2docker-url=https://github.com/boot2docker/boot2docker/releases/download/v17.03.1-ce/boot2docker.iso` : Add a docker host machine E.g.: `docker-machine.exe create machine1 --driver virtualbox --virtualbox-cpu-count "-1" --virtualbox-disk-size "8000" --virtualbox-memory "512" --virtualbox-boot2docker-url=https://github.com/boot2docker/boot2docker/releases/download/v17.03.1-ce/boot2docker.iso`

`docker-machine ssh <machine name>` : Execute a ssh into a machine.

`docker-machine create -d virtualbox --virtualbox-boot2docker-url https://releases.rancher.com/os/latest/machine-rancheros.iso rancher` : Create a machine using rancher image.

`docker-machine create --driver generic --generic-ip-address=<vm ip address> --generic-ssh-key <path of the public certificate> <name of the VM that will appear on the docker machine>`: Add an existing vm with docker installed on it to the docker machine. (E.g.: `docker-machine create --driver generic --generic-ip-address=203.0.113.81 --generic-ssh-key ~/.ssh/id_rsa vm`)

`docker-machine create -d virtualbox --virtualbox-boot2docker-url https://github.com/RogerioDosSantos/docker/raw/master/docker_machine/boot2docker/32bits/boot2docker.iso <machine name>`: create a new 32 bits host machine.

`docker-machine create -d virtualbox --virtualbox-boot2docker-url https://github.com/RogerioDosSantos/docker/raw/master/docker_machine/boot2docker/64bits/boot2docker.iso <machine name>`: create a new 64 bits host machine.

## Share folder

### Using VirtualBox

`-v /c/Users:/home/host`: Share user folder with home directory

## Run docker client from inside a container

You can run a docker client from inside a container and connect to your host machine by sharing the *Docker unix socket* and install the *docker client* in your container.

E.g:

```bash
# Start Continer sharing the docker.sock and install the docker client in the container
docker run -it -v /var/run/docker.sock:/var/run/docker.sock ubuntu:latest sh -c "apt-get update ; apt-get install docker.io -y ; bash"

# Execute the docker images command (Note to execute docker commands you need to use sudo)
sudo docker images
```

## Installation

### Install on the WSL

* [Install Docker for Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows)

* [Enable WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

* [Install Docker in WSL](https://docs.docker.com/install/linux/docker-ce/debian/)

* [Install docker-compose in WSL](https://docs.docker.com/compose/install/)

* [Make relay WSL->Docker for Windows with GO](https://blogs.msdn.microsoft.com/commandline/2017/12/08/cross-post-wsl-interoperability-with-docker/)

* Fix drive paths for volume mount

```bash
sudo mkdir /c
sudo mount --bind /mnt/c /c
```

To make the bind mount permanent you can  change the `/etc/fstab` file

```bash
# <device>  <dir> <type> <options> <dump> <pass>
/mnt/c  /c  none  bind  0 0
```

## How-To

### Create an alpine image with docker client

To have the most recent client go to the [URL below](https://download.docker.com/linux/static/stable/x86_64)

```DockerFile
ARG DOCKER_CLI_VERSION="docker-18.06.1-ce"
ENV DOWNLOAD_URL="https://download.docker.com/linux/static/stable/x86_64/docker-$DOCKER_CLI_VERSION.tgz"

# install docker client
RUN apk --update add curl \
    && mkdir -p /tmp/download \
    # && curl -L $DOWNLOAD_URL | tar -xz -C /tmp/download \
		&& curl -L https://download.docker.com/linux/static/stable/x86_64/docker-docker-18.06.1-ce.tgz | tar -xz -C /tmp/download
    && mv /tmp/download/docker/docker /usr/local/bin/ \
    && rm -rf /tmp/download \
    && apk del curl \
    && rm -rf /var/cache/apk/*
```

### Create an debian image with docker client

```DockerFile
# Install Docker Client
RUN echo "*** Install Docker Client - Start" \
    && apt-get update \
    && apt-get install sudo -y \
    && usermod -aG sudo jenkins \
    && echo '%sudo ALL=(ALL:ALL) ALL' | EDITOR='tee -a' visudo \
    && echo 'jenkins ALL=(ALL) NOPASSWD: ALL' | EDITOR='tee -a' visudo \
    && mkdir -p /tmp/docker \
    && wget -P /tmp/docker https://download.docker.com/linux/debian/dists/stretch/pool/stable/amd64/docker-ce_18.06.1~ce~3-0~debian_amd64.deb \
    && dpkg -i /tmp/docker/docker-ce_18.06.1~ce~3-0~debian_amd64.deb || true \
    && apt-get -f -y install \
    && dpkg -i /tmp/docker/docker-ce_18.06.1~ce~3-0~debian_amd64.deb \
    && rm -rf /tmp/docker \
    && mv /usr/bin/docker /usr/bin/docker_program \
    && echo '#!/usr/bin/env bash' | tee -a /usr/bin/docker \
    && echo 'sudo docker_program "$@"' | tee -a /usr/bin/docker \
    && chmod +x /usr/bin/docker \
    && echo "*** Install Docker Client - END"
```

### Pipe into docker container

```bash
docker run -it -d --rm --name "my_container" ubuntu:artful

# Display item piped
echo "test" | docker exec --interactive "my_container" bash -c "cat"

# Save piped item into a file
echo "content to file" | docker exec --interactive "my_container" bash -c "cat > ~/t1.txt"

docker exec "my_container" bash -c "cat ~/t1.txt"

docker stop "my_container"
```

### Docker Containers - Allow a container restart always

```bash
# Start a container that will always restart
docker run -it -d --rm --restart=always --name "my_container" ubuntu:artful

# To stop the container you can:
docker update --restart=no my_container

# Allow container restart always unless docker stop is executed:
docker run -it -d --rm --restart=unless-stopped --name "my_container" ubuntu:artful
```

### Docker Images - Implement Health Check

Health checks can be any single command. They run inside the container and if the command exit code is 0, the container is reported as healthy, and if the output is 1, the container is marked as unhealthy.

The example below checks if you are getting answer from the port 3000

```bash
HEALTHCHECK CMD curl --fail http://localhost:3000/ || exit 1
```
Calling the `docker ps` command, it will show the following in case the *Health Check* returns *1*:

![](http://tinyurl.com/y73vdma5)

### Docker Registry - Deploy a local Registry Server

Below you can find the basic commands to deploy a local registry server for Linux images. [This article](https://docs.docker.com/registry/deploying/) can provide you additional explanation and details.

```shell
# Run a registry server in the local machine
docker run -d -p 5000:5000 --restart=always --name registry registry:2

# Stop the registry server
docker container stop registry

# Push image to the local registry
docker tag alpine:latest localhost:5000/alpine:latest
docker push localhost:5000/alpine:latest

# Pull image from the local registry
docker rmi localhost:5000/alpine:latest
docker pull localhost:5000/alpine:latest
```

**Note**: Out of the box, the *local registry* is not a *secure register*. To access the *local registry* as it is, you can change the *docker engine configuration* (daemon.json) to have the following entry:

```json
{
  "insecure-registries": ["<docker_registry_machine_ip>:5000"]
}
```

![](http://tinyurl.com/y7d9xhjw)



### Docker Server - Experimental Features

```shell
# Check if the experimental features is enabled
docker version -f '{{.Server.Experimental}}'
```

### Docker Images - Save and Restore image to file

If you do not have network connection to a docker repository, you can use the [docker save](https://docs.docker.com/engine/reference/commandline/save/) and [docker load](https://docs.docker.com/engine/reference/commandline/load/) to save/load the image from/to a file.

```shell
# Save the image to file
docker save microsoft/nanoserver:1803 > ./microsoft_nanoserver_1803.tar

# Load image from file
docker load -i ./microsoft_nanoserver_1803.tar
```
### Docker Compose - How to user docker compose

`docker-compose up [-f] [-d]` : Start a docker images using a docker compose file (docker-compose.yml). It will look for the file in the same directory you are. 
- `-d` option allow to start the container as service, _forking_ the process.
- `-f` option allow to inform a docker-compose file

`docker-compose stop` : Stop all running Docker containers for an application group, issue the following command in the same directory as the _docker-compose.yml_ file used to start the Docker group.

`docker-compose kill` : Same as `docker-compose stop` but force the running container to stop. 

`docker-compose down` : Same as `docker-compose stop` but remove the container after stopping

### Docker Compose - Install Docker Compose using PowerShell

You can find the latest version of *Docker-Compose* in the [Docker Compose Github Release Page](https://github.com/docker/compose/releases)

```ps
# Github requires TLS1.2
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

# Download Docker Compose from the release page and put it where the docker binaries are
Invoke-WebRequest "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-Windows-x86_64.exe" -UseBasicParsing -OutFile $Env:ProgramFiles\Docker\Docker\resources\bin\docker-compose.exe
```

### Docker - Bug - How to stop a container that the engine does not stop in any way

There is a bug in the *docker engine* for *Windows* that will not allow you to stop the container either using `docker stop` or `docker kill` commands.

To solve the issue: 

- Quit the *docker engine* (*Docker desktop*)
- Remove the content of the following folder:
`C:\ProgramData\Docker\containers`
- Restart the *docker engine* (*Docker desktop*)

### Docker - Bug - Docker crash when starting

I had the same issue. By some reason Windows reserves port 2375:

```ps
netsh interface ipv4 show excludedportrange protocol=tcp
```

If you see that one of port ranges include port 2375 then you have the same issue.

Disable Hyper-V and reboot:

```ps
dism.exe /Online /Disable-Feature:Microsoft-Hyper-V
```

Then reserve port 2375:

```ps
netsh int ipv4 add excludedportrange protocol=tcp startport=2375 numberofports=1
```
Enable Hyper-V and reboot again:

```ps
dism.exe /Online /Enable-Feature:Microsoft-Hyper-V /All
```

Now it should be fine.

- Reference [https://github.com/docker/for-win/issues/3546#issuecomment-483311479](https://github.com/docker/for-win/issues/3546#issuecomment-483311479)

## Known issues and Workaround

### Docker Issue - DNS does not work inside the container

#### Version

Docker Engine v19.03.8

#### Description 

A running docker container cannot resolve URLs addressed.

E.g.:

```ps
PS C:\workspace> Test-Connection google.com -Count 1
Test-Connection: Testing connection to computer 'google.com' failed: Cannot resolve the target name.
```

#### Workaround 

Set the DNS in the *Docker Engine daemon file: 

![](http://tinyurl.com/ybwz2bk2)








