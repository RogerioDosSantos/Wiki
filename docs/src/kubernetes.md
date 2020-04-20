# Kubernetes

[Kubernetes]( https://kubernetes.io/ ) is an open-source system for automating deployment, scaling, and management of containerized applications.

## Concepts

`Cluster`: Cluster is all the Kubernetes network (with several machines)

`Deployment`: Is one or more containers running an application.

`Services`: Is a container port exposed on the host machine.

`Replication Set`:

`Pod`: A logical unit that run your application

`Resources`: 

`Namespace`: Logical Hierarchy

`Nodes`: Is the physical machine in the *Kubernetes Cluster*

## Recomendations

### On Azure 

- Separate one cluster per project. There is no additional cost to create cluster.

- Always use *Namespaces* (**Never user default Namespaces**)

- Apply resources quotas 

- To create clusters use small VMs always possible. It is better to have several small machines than few big machines (Due failure). But be sure to do not forget the disk (Max uncached disk IOPS). Bigger the *IOPS* the better.

- Do not put *Load Balancer* in front of other *Load Balancer*

- Put an *Azure Firewall* outside the *Kubernetes Cluster* to avoid hacker to have access to outbound connections

- Microsoft does not reboot the machine. There is a procedure to do it. [Node aout updates and upgrades](http://tinyurl.com/wphp8jw). You should install [kured]() to reboot the nodes for you.

## Commands

`kubectl version`: Check the version of the *Kubernetes Control Client*

`kubectl cluster-info` : Check the information of the *Kubernetes engine*

`source <(kubectl completion bash)`: Get auto completion for bash.

`kubectl run --image <image> <deployment_name>`: Run an image (Deployment). Note: The app name cannot have *_* character.

`kubectl api-resources`: List all resources

`kubectl get deploy`: Get the current status of a deployment.

`kubectl describe deploy <deployment_name>`: Get the details of a deployment.

`kubectl get rs`: Get the status of the Replication Set.

`kubectl get pod`: Return all *Pod* status.

`kubectl port-forward <pod_name> <host_port>:<container_port>`: Forward the container port to the host machine. This is temporary and should be used for debug purposes only.

`kubectl expose deployment <deployment_name> --port=<container_port> --type=NodePort`: Create a *Kubernetes service* exposing the *container port* to all nodes on the *cluster*. 

`kubectl get services`: Get available services.

## How-To

### Install - Run Kubernetes on Windows Subsystem Linux (WSL)

#### Enable Kubernetes on Docker

![](http://tinyurl.com/yabue3r2)

#### Install and Configure Kubernetes Control Client in WSL

```shell
# Download the current stable version of Kubernetes Control
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl 

## Allow executable permission and copy it to the bin folder
chmod +x ./kubectl 
sudo mv ./kubectl /usr/local/bin/kubectl

## Get the Current Windows Configuration File (Kubernetes Config)
mkdir ~/.kube
cp /mnt/c/Users/<your_user>/.kube/config ~/.kube

## Set Kubernetes Control to use Docker for Windows context 
kubectl config use-context docker-for-desktop

# Check the version of the Client and Server and if they can communicate
kubectl version

# Check the Kubernetes Master is running and responding
kubectl cluster-info

# Setup auto complettion and add it permanentely to the bash shell
source <(kubectl completion bash)
echo "source <(kubectl completion bash)" >> ~/.bashrc
```

### Orchestration - Run Image using Kubernetes

On this example we will run the [nginx](https://nginx.org/en/) image as an app name web-server.

```shell
# Deploy 
kubectl run --image nginx web-server

# Get Deployment Status
kubectl get deploy

# Get the detail of the web-server Deployment
kubectl describe deploy web-server

# Expose the port 80 from the deployment
kubectl expose deployment web-server --port=80 --type=NodePort

# Display the Service information
kubectl get services | grep web-server
```

## References 

- [Video on virtual nodes on Azure](https://mail.google.com/mail/u/0/#inbox/KtbxLxGvZbRdrBpGqffDtFpzzSDrkpLvVB?projector=1)








