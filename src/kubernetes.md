# Kubernetes

[Kubernetes](https://kubernetes.io/) is a powerful open-source platform for automating deployment, scaling, and management of containerized applications. It provides a robust framework to run distributed systems resiliently, handling scaling, failover, and deployment patterns.

## What is Kubernetes?
Kubernetes (often abbreviated as K8s) orchestrates containers across a cluster of machines, abstracting away the underlying infrastructure. It enables you to:
- Deploy and manage applications at scale
- Automate rollouts and rollbacks
- Self-heal applications (auto-restart, reschedule, replicate)
- Expose services via networking primitives

## Core Concepts

- **Cluster**: A set of machines (nodes) running Kubernetes, managed as a single unit.
- **Node**: A physical or virtual machine in the cluster.
- **Pod**: The smallest deployable unit, a Pod encapsulates one or more containers that share storage and networking.
- **Deployment**: Manages the desired state for Pods, enabling rolling updates and rollbacks.
- **Service**: An abstraction that exposes a set of Pods as a network service, enabling stable access.
- **Namespace**: Namespaces provide logical isolation for resources within a Kubernetes cluster. They allow you to divide cluster resources between multiple users, teams, or environments (such as development, staging, and production). Namespaces help organize resources, apply resource quotas, and manage access control. By default, Kubernetes includes namespaces like `default`, `kube-system`, and `kube-public`.
- **ReplicaSet**: Ensures a specified number of Pod replicas are running at any time.
- **Resource**: Any Kubernetes object (Pod, Service, Deployment, etc.) managed via the API.

## Best Practices & Recommendations

- Use a separate cluster per project when possible (especially on Azure; no extra cost for clusters).
- Always use custom namespaces (avoid the default namespace).
- Apply resource quotas to control resource usage.
- Prefer several small VMs over a few large ones for better resilience (watch disk IOPS).
- Avoid chaining load balancers.
- Place firewalls outside the cluster to secure outbound connections.
- Automate node reboots for updates (e.g., with [kured](https://github.com/weaveworks/kured)).

## Common kubectl Commands

- Check client and server version:
  ```shell
  kubectl version
  ```
- Show cluster information:
  ```shell
  kubectl cluster-info
  ```
- Enable bash completion:
  ```shell
  source <(kubectl completion bash)
  ```
- List all resources:
  ```shell
  kubectl api-resources
  ```
- Deploy an image as a new deployment:
  ```shell
  kubectl run <deployment_name> --image <image>
  ```
- Get deployments, pods, and services:
  ```shell
  kubectl get deploy
  kubectl get pods
  kubectl get services
  ```
- Describe a deployment or pod:
  ```shell
  kubectl describe deploy <deployment_name>
  kubectl describe pod <pod_name>
  ```
- Expose a deployment as a service:
  ```shell
  kubectl expose deployment <deployment_name> --port=<container_port> --type=NodePort
  ```
- Forward a pod port to your local machine (for debugging):
  ```shell
  kubectl port-forward <pod_name> <local_port>:<container_port>
  ```
- Apply or delete resources from a YAML file:
  ```shell
  kubectl apply -f <file.yaml>
  kubectl delete -f <file.yaml>
  ```
- Execute a command inside a pod:
  ```shell
  kubectl exec -it <pod_name> -- /bin/sh
  ```
- View logs for a pod:
  ```shell
  kubectl logs <pod_name>
  ```

## Quickstart: Running Kubernetes on WSL

### Enable Kubernetes in Docker Desktop

![](./resources/kubernetes/kubernetes_enable_kubernetes_on_docker.png)

### Install and Configure kubectl in WSL

```shell
# Download kubectl
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl

# Copy your Windows kubeconfig
mkdir ~/.kube
cp /mnt/c/Users/<your_user>/.kube/config ~/.kube

# Set context for Docker Desktop
kubectl config use-context docker-for-desktop

# Test connection
kubectl version
kubectl cluster-info

# Enable bash completion
source <(kubectl completion bash)
echo "source <(kubectl completion bash)" >> ~/.bashrc
```

## Example: Deploying and Exposing an App

```shell
# Deploy nginx as 'web-server'
kubectl run web-server --image=nginx

# Check deployment and pod status
kubectl get deploy
kubectl get pods

# Expose deployment on port 80
kubectl expose deployment web-server --port=80 --type=NodePort

# List services
kubectl get services
```

## References

- [Kubernetes Official Documentation](https://kubernetes.io/docs/)
- [Node auto updates and upgrades](http://tinyurl.com/wphp8jw)
- [kured - Kubernetes Reboot Daemon](https://github.com/weaveworks/kured)
- [Video on virtual nodes on Azure](https://mail.google.com/mail/u/0/#inbox/KtbxLxGvZbRdrBpGqffDtFpzzSDrkpLvVB?projector=1)





























