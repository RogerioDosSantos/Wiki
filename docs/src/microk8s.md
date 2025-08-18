# MicroK8s Overview

MicroK8s is a lightweight, fast, and secure Kubernetes distribution designed for developers, DevOps, and edge use cases. It is easy to install and run on Linux, Windows, and macOS, making it ideal for local development, CI/CD, and IoT/edge scenarios.

---

## Table of Contents
- [Key Features](#key-features)
- [Common Commands](#common-commands)
- [Useful Links](#useful-links)
- [See Also](#see-also)

---

## Key Features

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Zero-ops Kubernetes**| Simple installation and automatic updates with minimal configuration         |
| **Lightweight**        | Low resource footprint, suitable for laptops, desktops, and edge devices     |
| **Modular**            | Enable/disable add-ons (DNS, dashboard, Istio, Helm, etc.) as needed         |
| **Production-grade**   | Supports clustering, high availability, and strict confinement via snaps      |
| **Cross-platform**     | Runs on Linux, Windows, and macOS (via Multipass or native installers)        |
| **Fast startup**       | Quick cluster boot and restart times                                         |
| **Secure by default**  | Runs in a confined snap for isolation and security                           |

---

## Common Commands

Below are frequently used MicroK8s commands. Each command is preceded by a brief description.

> ?? **Tip**: Replace `<addon>` or `<command>` with the specific add-on or kubectl command you wish to use.

**Start the dashboard proxy:**
```shell
microk8s dashboard-proxy
```

**Open the MicroK8s dashboard in your browser:**
```shell
microk8s dashboard
```

**Show the status of MicroK8s and enabled add-ons:**
```shell
microk8s status
```

**Enable an add-on (e.g., dns, dashboard, ingress):**
```shell
microk8s enable <addon>
```

**Disable an add-on:**
```shell
microk8s disable <addon>
```

**Start MicroK8s:**
```shell
microk8s start
```

**Stop MicroK8s:**
```shell
microk8s stop
```

**Restart MicroK8s:**
```shell
microk8s restart
```

**Run kubectl commands directly with MicroK8s context:**
```shell
microk8s kubectl <command>
```

**Show kubeconfig for MicroK8s:**
```shell
microk8s config
```

**Reset MicroK8s to a fresh state:**
```shell
microk8s reset
```

**Upgrade MicroK8s to the latest version:**
```shell
microk8s upgrade
```

**Run diagnostics of the MicroK8s installation:**
```shell
microk8s inspect
```

---

## Useful Links

- [MicroK8s Official Site](https://microk8s.io/)
- [MicroK8s Documentation](https://microk8s.io/docs)
- [MicroK8s GitHub](https://github.com/canonical/microk8s)
- [Kubernetes Official Documentation](https://kubernetes.io/docs/)

---

## See Also

- [Minikube](./minikube.md): Another local Kubernetes solution, more configurable for different drivers.
- [Kubernetes](./kubernetes.md): The core container orchestration platform.
- [Helm](./helm.md): Kubernetes package manager, works with MicroK8s add-on.
- [Docker](./docker.md): Container runtime, often used with Kubernetes.
