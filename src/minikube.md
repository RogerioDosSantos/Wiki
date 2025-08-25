# Minikube

[Minikube](https://minikube.sigs.k8s.io/docs/) creates a local *Kubernetes cluster*. It supports  *macOS*, *Linux*, and *Windows* operational system. 

*Minikube* supports several drivers as follow:

- **Docker**: Install *Kubernetes* using an installed *Docker engine*. Pre-requirement: *Docker* needs to be installed.
- **Hyper-V**: Install *Kubernetes* on *Hyper-V*. Pre-requirement: *Hyper-V* needs to be installed.
- **SSH**: Allow to Install Kubernetes by connecting with any compatible docker runtime remotelly.

## Minikube as Docker Desktop replacement (Linux Containers)

Because *Docker Desktop* is no longer a free solution for big corporations and due the acquisition of *Docker Desktop* by a Russian company, which provide some usage contraints for some companies that works with the US governement, having a *Docker Desktop* alternative became crucial. This session will describe how you can replace for development purposed the *Docker Desktop* using *Minikube*.

*Docker Desktop* is composed of the following components:

- *Docker Server*: This is the main component. The *Docker Server* is the runtime engine that run the *containers*, allow the compilation of the *containers* and talk with the *Docker registries*.
- Docker CLI: This is a small executable where the only role is to retreive commands from the computer shell, send it to the *Docker Server* and display the responses.
- *User Interface*: Allow the users to monitor and control the containers that are running on the *Docker Server*. 

The goal is to replace each components of the *Docker Desktop* using open sources alternatives as follows:

- *Docker Server*: Replace with *Minikube* running under *Hyper-V*. 
- Docker CLI: Use the *Docker CLI* community edition (Open source version). 
- *User Interface*: No replacement, we will just drop this component. 

### Instalation / Setup (Windows Machine)

- Download and Install [Minikube for Windows](https://minikube.sigs.k8s.io/docs/start/)

- Get the [Docker CLI (Community Edition) ](https://download.docker.com/win/static/stable/x86_64/)

Once you download and *Unzip* it you should see the following files:

```
Directory: \docker-17.09.0-ce\docker

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
------         9/26/2017   5:53 PM       19868160 docker.exe
------         9/26/2017   5:53 PM       36972666 dockerd.exe
```

The *docker.exe* file is your docker client.

- Enable *Hyper-V* on *Windows* if not enabled yet. 

```porwershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

*Note:* If *Hyper-V* was not previously active, you will need to reboot.

- Create a *Kubernetes cruster* using over a *Hyper-V* machine 

```porwershell
minikube start --driver=hyperv
```

The command above will create a *Virtual Machine*, install all the *Docker Server* components using open source runtime and create a *Kubernetes cruster*.

**Note:** The default driver used by *Minikube* is *docker* which used a *Docker Desktop* engine to create the *Kubernetes cluster*. You can change the default to be *Hyper-V* by using the following command: 

```porwershell
minikube config set driver hyperv
```

- Prepare the *Environment variables* so the *Docker CLI* can talk with the *Docker Server* engine installed by *Minikube*

```porwershell
minikube -p minikube docker-env | Invoke-Expression
```

- Test the solution is working properly using *Docker commands*

```porwershell
docker run hello-world
```

### Stoping the Kubernetes cluster and destroying the Minikube Environment

- Remove the *Minikube* inatallation and configuration

```porwershell
minikube delete
```

## Reference

- [Minikube Website](https://minikube.sigs.k8s.io/docs/)
