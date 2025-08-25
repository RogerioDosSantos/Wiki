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

## Useful Links

- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [kubectl Command Reference](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)
- [Kubernetes Official Documentation](https://kubernetes.io/docs/)

---

## Troubleshooting / How-to

<details>
<summary><strong>Troubleshoot local network with DNS utilities</strong></summary>

**[Run on host terminal]**
```shell
kubectl run -i --tty debian-debug-pod --image=debian --rm --restart=Never -- bash
```

**[Run inside debian-debug-pod]**
```sh
apt-get update && apt-get install -y dnsutils curl iproute2

# Check your network configuration
ip addr
ip route

# Find your search domain (from /etc/resolv.conf)
grep '^search' /etc/resolv.conf

# Use nslookup to resolve a local domain
nslookup <local-domain>

# Use curl to test access to a local URL
curl http://<local-url>

# Use curl to connect to another pod by its service name (example: my-service in the same namespace)
curl http://my-service:8080
# Or, using the full cluster DNS name (example: my-service in namespace 'foo')
curl http://my-service.foo.svc.cluster.local:8080
```

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
   kubectl exec -it debian-debug-pod -- bash
   ```

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

</details>

<details>
<summary><strong>Manipulate PODs and Services</strong></summary>

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

</details>


---

## See Also

- [Kubernetes](./kubernetes.md): The core container orchestration platform.
- [MicroK8s](./microk8s.md): Lightweight Kubernetes for local development.
- [Helm](./helm.md): Kubernetes package manager.
