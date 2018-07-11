# Docker Commands #

`docker search [-s <number_of_stars>] <text>` : Search for a docker image into online repositories

`docker images` : List the available images

`docker ps` : List the running containers

`docker ps -a` : List all containers

`docker run --name <container name> -it <image name>:<image version>` : Start a new container from image. E.g.: `docker run --name vim_install -it ubuntu:16.04`

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

Push Note: You need to be logged before pushing an image. E.g.: `docker push rogersantos/vim`

`docker login` : Log into a repository

`docker login --username <user_name> --password <password> <server>` : Login into a repository into a specific server.

`docker-compose up [-d]` : Start a docker images using a docker compose file (docker-compose.yml). It will look for the file in the same directory you are. The `-d` option allow to start the container as service, _forking_ the process.

`docker-compose stop` : Stop all running Docker containers for an application group, issue the following command in the same directory as the _docker-compose.yml_ file used to start the Docker group.

`docker-compose kill` : Same as `docker-compose stop` but force the running container to stop. 

`docker volume ls -qf dangling=true | xargs -r docker volume rm` : Remove all volumes that are not being used.

`docker volume rm $(docker volume ls -f dangling=true -q)` : Remove dangling volumes (Volumes not being used at the moment). Note: if you need sudo use: `sudo docker volume rm $(sudo docker volume ls -f dangling=true -q)`

`docker stop $(docker ps -a -q)`: Stop all containers.  

`docker rm $(docker ps -a -q)`: Remove all containers.

`docker rm $(docker ps -a -f status=exited -q)`: Remove all exited containers.

`docker rmi $(docker images -a -q)`: Remove all images.

`docker rmi $(docker images -f dangling=true -q)`: Remove dangling images

`docker build -f <docker_file_name> [--build-arg http_proxy=<proxy url>] -t <image_tag>` : E.g: docker build -f ./DockerFile -t rogersantos/image_01:latest

`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_name_or_id>`

## Volumes Credentials

Be aware that when changing your password, you will need to go to settings >> shared drivers >> reset credentials. Once you select the drivers you want to share again and enter the new password, everything will start working again.

## Start / Attach options ##

`-v <local folder>:<remote folder>` : Mount a folder (volume) from the host into the container. Note the container folder should have the full path. E.g.: `-v ~/host:/root/host`. 

`--restart=always` : Allow the container to always restart

## Multi-Platform ##

`docker run --rm --privileged multiarch/qemu-user-static:register --reset` : Allow you run different platforms using docker. It uses QEMU emulation to do it.

## Docker Compose Files ##

## Docker Machine ##


`docker-machine.exe create <machine name> --driver virtualbox --virtualbox-cpu-count "-1" --virtualbox-disk-size "<disk size>" --virtualbox-memory "<memory size>" --virtualbox-boot2docker-url=https://github.com/boot2docker/boot2docker/releases/download/v17.03.1-ce/boot2docker.iso` : Add a docker host machine E.g.: `docker-machine.exe create machine1 --driver virtualbox --virtualbox-cpu-count "-1" --virtualbox-disk-size "8000" --virtualbox-memory "512" --virtualbox-boot2docker-url=https://github.com/boot2docker/boot2docker/releases/download/v17.03.1-ce/boot2docker.iso`

`docker-machine ssh <machine name>` : Execute a ssh into a machine.

`docker-machine create -d virtualbox --virtualbox-boot2docker-url https://releases.rancher.com/os/latest/machine-rancheros.iso rancher` : Create a machine using rancher image.

`docker-machine create --driver generic --generic-ip-address=<vm ip address> --generic-ssh-key <path of the public certificate> <name of the VM that will appear on the docker machine>`: Add an existing vm with docker installed on it to the docker machine. (E.g.: `docker-machine create --driver generic --generic-ip-address=203.0.113.81 --generic-ssh-key ~/.ssh/id_rsa vm`)

`docker-machine create -d virtualbox --virtualbox-boot2docker-url https://github.com/RogerioDosSantos/docker/raw/master/docker_machine/boot2docker/32bits/boot2docker.iso <machine name>`: create a new 32 bits host machine.

`docker-machine create -d virtualbox --virtualbox-boot2docker-url https://github.com/RogerioDosSantos/docker/raw/master/docker_machine/boot2docker/64bits/boot2docker.iso <machine name>`: create a new 64 bits host machine.

## Share folder

### Using VirtualBox

`-v /c/Users:/home/host`: Share user folder with home directory
