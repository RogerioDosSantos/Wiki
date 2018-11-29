# Docker Commands 

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

`docker rmi <image name>` : Remove an image

`docker cp <source file> <destination container>:<destination location>` : Copy a file from the host computer to the container. E.g.: `docker cp ./host/temp/Programs/CppLint/file.txt vim:/root/temp`

`docker cp <destination container>:<destination location> <source file>` : Copy a file from the container to host computer. E.g.: `docker cp vim:/root/temp/file.txt ./host/temp/Programs/CppLint/`

`docker commit -a "<author>" -m "<message>" <container id> [<dockerhub user>]<image name>:<tag>` : Commit a container into an image. E.g.: `docker commit -a "Roger Santos" -m "My Comment" ec6cc8c6e490 rogersantos/vim:1.0`

`docker diff <container id>` : Shows the difference between the current container and the original image.

`docker tag <image id> [<dockerhub user>]/<image name>:<tag>`: Tag an image. E.g.: `docker tag 5ffd21ba24cf rogersantos/vim:1.0`

`docker push <full image name>`: Publish the image into the docker hub. Note: You need to be logged before pushing an image. E.g.: `docker push rogersantos/vim`

`docker login` : Log into a repository

`docker login --username <user_name> --password <password> <server>` : Login into a repository into a specific server.

`docker-compose up [-d]` : Start a docker images using a docker compose file (docker-compose.yml). It will look for the file in the same directory you are. The `-d` option allow to start the container as service, _forking_ the process.

`docker-compose stop` : Stop all running Docker containers for an application group, issue the following command in the same directory as the _docker-compose.yml_ file used to start the Docker group.

`docker-compose kill` : Same as `docker-compose stop` but force the running container to stop. 

`docker volume create <volume_name>`: `Create a volume`

`docker volume ls -qf dangling=true | xargs -r docker volume rm` : Remove all volumes that are not being used.

`docker volume rm $(docker volume ls -f dangling=true -q)` : Remove dangling volumes (Volumes not being used at the moment). Note: if you need sudo use: `sudo docker volume rm $(sudo docker volume ls -f dangling=true -q)`

`docker stop $(docker ps -a -q)`: Stop all containers.  

`docker rm $(docker ps -a -q)`: Remove all containers.

`docker rm $(docker ps -a -f status=exited -q)`: Remove all exited containers.

`docker rmi $(docker images -a -q)`: Remove all images.

`docker rmi $(docker images -f dangling=true -q)`: Remove dangling images

`docker build -f <docker_file_name> [--build-arg http_proxy=<proxy url>] -t <image_tag>` : E.g: docker build -f ./DockerFile -t rogersantos/image_01:latest

`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_name_or_id>`

`docker inspect -f '{{ range .Mounts  }}{{ if eq .Destination "/home/conan/workspace"  }}{{ .Source  }}{{ end  }}{{ end  }}' builder_linux_x86`: Get the path of the host machine of a volume of a container path that was mounted.

`docker rm $(docker ps -a -q)` : Remove all docker containers

`docker rmi $(docker images -a -q)`: Remove all docker images

`docker login -u <registry_user> -p <password> <registry_url>`:  Allow docker to login on the Azure registry

`docker image prune` : Clean old docker images

`docker volume prune`: Clean old volumes

`docker system prune`: Clean all old images and volumes

`docker system prune -a`: Clean all containers

`docker logs -f <container>` : View the logs of a container.

`docker run --rm -v /var/run/docker.sock:/var/run/docker.sock rogersantos/docker_runlike <image_name>`: Get the run command of a docker image.

## Keys

`crtl+p ctrl+q`: Detach from a session.

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

### Pipe stdin into the docker

```bash
docker run -it -d --rm --name "my_container" ubuntu:artful

# Display item piped
echo "test" | docker exec --interactive "my_container" bash -c "cat"

# Save piped item into a file
echo "content to file" | docker exec --interactive "my_container" bash -c "cat > ~/t1.txt"

docker exec "my_container" bash -c "cat ~/t1.txt"

docker stop "my_container"
```




