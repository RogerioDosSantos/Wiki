# kubectl

[kubectl](https://kubernetes.io/docs/reference/kubectl/) is the command-line tool for interacting with Kubernetes clusters. It allows you to deploy applications, inspect and manage cluster resources, and view logs.

---

## Key Features

- Manage Kubernetes resources (Pods, Deployments, Services, etc.)
- Apply, update, and delete configuration files
- View logs and resource status
- Execute commands inside containers
- Troubleshoot networking and cluster issues

---

### Troubleshoot local network with DNS utilities

**[Run on host terminal]**

- **Debian-based debug pod:**
  ```shell
  kubectl run -i --tty debian-debug-pod --image=debian --rm --restart=Never -- bash
  ```
- **Ubuntu-based debug pod (alternative):**
  ```shell
  kubectl run -i --tty ubuntu-debug-pod --image=ubuntu --rm --restart=Never -- bash
  ```
  > 📌 **Tip:** The Ubuntu image may require you to install troubleshooting tools (like curl, dnsutils, iproute2) after starting the pod, just as with Debian. Use `apt-get update && apt-get install -y dnsutils curl iproute2` inside the pod.
- **Alpine-based debug pod (alternative):**
  ```shell
  kubectl run -i --tty alpine-debug-pod --image=alpine --rm --restart=Never -- sh
  ```
  > 📌 **Tip:** For Alpine, install troubleshooting tools with `apk add --no-cache bind-tools curl iproute2` inside the pod.

**[Run inside debug pod]**
- Debian/Ubuntu:
  ```sh
  apt-get update && apt-get install -y dnsutils curl iproute2
  ```
- Alpine:
  ```sh
  apk add --no-cache bind-tools curl iproute2
  ```

#### Check your network configuration
ip addr
ip route

#### Find your search domain (from /etc/resolv.conf)
grep '^search' /etc/resolv.conf

#### Use nslookup to resolve a local domain
nslookup <local-domain>

#### Use curl to test access to a local URL
curl http://<local-url>

#### Use curl to connect to another pod by its service name (example: my-service in the same namespace)
curl http://my-service:8080
#### Or, using the full cluster DNS name (example: my-service in namespace 'foo')
curl http://my-service.foo.svc.cluster.local:8080

**[Run on host terminal]**
You can list all available services in your namespace with:
```shell
kubectl get services
```

This allows you to use tools like `nslookup`, `dig`, `host`, `curl`, and `ip` for DNS and network troubleshooting inside your cluster.

**If you want to enter an existing pod:**
**[Run on host terminal]**
1. Find the running pod name:
   ```shell
   kubectl get pods
   ```
2. Re-enter the pod with:
   ```shell
   kubectl exec -it <debug-pod-name> -- bash
   ```
   > 📌 **Tip:** Replace `<debug-pod-name>` with either `debian-debug-pod`, `ubuntu-debug-pod`, or `alpine-debug-pod` depending on which pod you started.

**Check if CoreDNS pods are running:**
**[Run on host terminal]**
```shell
kubectl get pods -n kube-system -l k8s-app=kube-dns
```
Ensure that the CoreDNS pods are up and running in the `kube-system` namespace.

**Check CoreDNS logs for warnings or errors:**
**[Run on host terminal]**
```shell
kubectl logs -n kube-system -l k8s-app=kube-dns
```
> If you see repeated warnings like:
> `[WARNING] No files matching import glob pattern: custom/*.override`
> `[WARNING] No files matching import glob pattern: custom/*.server`
> These indicate that CoreDNS is trying to import custom configuration files that do not exist. This is usually harmless unless you expect custom DNS overrides or server configs. If you do not use these customizations, you can ignore these warnings. If you expect custom DNS behavior, check your CoreDNS ConfigMap for missing or misconfigured import statements.

### Manipulate PODs and Services

**[Run on host terminal]**

- List all pods in the current namespace:
  ```shell
  kubectl get pods
  ```

- List all pods in a specific namespace:
  ```shell
  kubectl get pods -n <namespace>
  ```

- Stop (delete) a pod by name:
  ```shell
  kubectl delete pod <pod-name>
  ```

- Enter an existing pod with an interactive shell:
  ```shell
  kubectl exec -it <pod-name> -- bash
  ```
  If the pod does not have bash, you can try:
  ```shell
  kubectl exec -it <pod-name> -- sh
  ```

- Show environment variables of a pod (using env command inside the pod):
  ```shell
  kubectl exec <pod-name> -- printenv
  ```
  Or, for a specific container in a pod:
  ```shell
  kubectl exec <pod-name> -c <container-name> -- printenv
  ```

- Describe a pod (detailed information including environment variables, events, any error in case the pode container does not start, and more):
  ```shell
  kubectl describe pod <pod-name>
  ```

Replace `<namespace>`, `<pod-name>`, and `<container-name>` with your actual namespace, pod, and container names.

### Check IPs connecting to a pod

**[Run inside the pod]**

1. Enter your pod with an interactive shell:
   ```shell
   kubectl exec -it <pod-name> -- bash
   ```
   Or, if bash is not available:
   ```shell
   kubectl exec -it <pod-name> -- sh
   ```

2. Install `netstat` or `ss` if not already present:
   - Debian/Ubuntu:
     ```shell
     apt-get update && apt-get install -y net-tools iproute2
     ```
   - Alpine:
     ```shell
     apk add --no-cache net-tools iproute2
     ```

3. List active network connections and see remote IPs:
   ```shell
   netstat -tln
   ```
   Or, using `ss`:
   ```shell
   ss -tln
   ```

- **Difference:**  
  Both commands show listening and established TCP connections. `netstat` is older and widely available, while `ss` is faster and provides more detailed information on modern systems. Use either based on availability in your container.

> 📌 **Tip:** To keep watching the connections in real time, use:
> ```shell
> watch netstat -tln
> ```
> or
> ```shell
> watch ss -tln
> ```

- The "Foreign Address" column shows the IPs currently connected to the pod, and the "Local Address" column shows listening ports.

> 📌 **Tip:** For HTTP-based services, you can also check your application logs for client IPs, or use tools like `tcpdump` for deeper inspection (requires installation and elevated privileges).

**Show all network requests, even very fast ones (using tcpdump):**

1. Install tcpdump inside your pod if not already present:
   - Debian/Ubuntu:
     ```shell
     apt-get update && apt-get install -y tcpdump
     ```
   - Alpine:
     ```shell
     apk add --no-cache tcpdump
     ```

2. Run tcpdump to capture all TCP traffic (replace eth0 with your pod’s network interface if different):
   - To see IP addresses (disable DNS resolution):
     ```shell
     tcpdump -n -i eth0 tcp
     ```
   - To see hostnames (default):
     ```shell
     tcpdump -i eth0 tcp
     ```
   Or, to see only connections to a specific port (e.g., 8080):
   - With IP addresses:
     ```shell
     tcpdump -n -i eth0 tcp port 8080
     ```
   - With hostnames:
     ```shell
     tcpdump -i eth0 tcp port 8080
     ```

> 📌 **Tip:** The `-n` flag disables DNS resolution, so tcpdump will display IP addresses directly. Without `-n`, tcpdump will attempt to resolve and display hostnames. You may need root privileges inside the pod to run tcpdump.
> 
> 📌 **Tip:** In the tcpdump output:
> - The first IP (before the ">") is the local IP and port (your pod/container).
> - The second IP (after the ">") is the remote IP and port (the external client or service).
>   
> Example:
> ```
> 22:30:00.417711 IP 10.244.1.174.37466 > 140.82.112.4.443: Flags [R], seq 2300699710, win 0, length 0
> ```
> Here, `10.244.1.174.37466` is the local (source) IP and port, and `140.82.112.4.443` is the remote (destination) IP and port.

### Check which platform (OS/distribution) you are in

**[Run inside the pod]**

- Show Linux distribution:
  ```shell
  cat /etc/os-release
  ```
  or
  ```shell
  cat /etc/*-release
  ```
  or (Debian/Ubuntu):
  ```shell
  lsb_release -a
  ```
  or (Alpine):
  ```shell
  cat /etc/alpine-release
  ```

- Show kernel and architecture:
  ```shell
  uname -a
  ```

> 📌 **Tip:** These commands help you identify the base image or OS your pod/container is running on (e.g., Ubuntu, Debian, Alpine, etc.).

---

## See Also

- [Kubernetes](./kubernetes.md): The core container orchestration platform.
- [MicroK8s](./microk8s.md): Lightweight Kubernetes for local development.
- [Helm](./helm.md): Kubernetes package manager.
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [kubectl Command Reference](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)
- [Kubernetes Official Documentation](https://kubernetes.io/docs/)
