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

## To-Do / Troubleshooting

- **Troubleshoot local network with DNS utilities:**
  ```shell
  kubectl run -i --tty debian --image=debian --rm --restart=Never -- bash
  ```
  Once inside the shell, install DNS utilities with:
  ```sh
  apt-get update && apt-get install -y dnsutils
  ```
  This allows you to use tools like `nslookup`, `dig`, and `host` for DNS troubleshooting inside your cluster.

---

## See Also

- [Kubernetes](./kubernetes.md): The core container orchestration platform.
- [MicroK8s](./microk8s.md): Lightweight Kubernetes for local development.
- [Helm](./helm.md): Kubernetes package manager.
