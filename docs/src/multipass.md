# Multipass

Multipass is a lightweight, cross-platform tool developed by Canonical for launching and managing Ubuntu virtual machines (VMs) with minimal effort. It is designed for developers who need quick, disposable, and consistent Ubuntu environments for testing, development, or CI/CD pipelines.

---

## Table of Contents
- [Key Features](#key-features)
- [Useful Commands](#useful-commands)
- [Useful Links](#useful-links)
- [See Also](#see-also)

---

## Key Features

| Feature                                   | Description                                                                 |
|-------------------------------------------|-----------------------------------------------------------------------------|
| **Fast Ubuntu VM provisioning**           | Instantly launch fresh Ubuntu instances with a single command.              |
| **Cross-platform support**                | Available for Windows, macOS, and Linux.                                   |
| **Cloud-init support**                    | Automate instance configuration using cloud-init scripts.                   |
| **Command-line interface**                | Simple CLI for managing instances (launch, stop, delete, etc.).            |
| **Mount host directories**                | Easily share files between your host and VMs.                              |
| **Customizable resources**                | Specify CPU, memory, and disk size for each instance.                      |
| **Integration with Docker/Kubernetes**    | Use Multipass as a backend for local container orchestration.              |

---

## Useful Commands

Below are common Multipass commands. Each command is preceded by a brief description.

Launch a new instance:
```shell
multipass launch
```

List all instances and their IP addresses:
```shell
multipass list
```

Open a shell on the specified instance:
```shell
multipass shell <instance>
```

Run a command on the specified instance:
```shell
multipass exec <instance> -- <command>
```

Stop an instance:
```shell
multipass stop <instance>
```

Start an instance:
```shell
multipass start <instance>
```

Restart an instance:
```shell
multipass restart <instance>
```

Delete an instance:
```shell
multipass delete <instance>
```

Delete all deleted instances and free up disk space:
```shell
multipass purge
```

Get detailed information about an instance:
```shell
multipass info <instance>
```

Mount a local directory into an instance:
```shell
multipass mount <host_path> <instance>:<mount_path>
```

Unmount a directory from an instance:
```shell
multipass unmount <instance>:<mount_path>
```

---

## Useful Links

- [Official Multipass Website](https://multipass.run/)
- [GitHub Repository](https://github.com/canonical/multipass)
- [Documentation](https://multipass.run/docs)
- [Cloud-init Documentation](https://cloud-init.io/)

---

## See Also

- [Docker](./docker.md)
- [Minikube](./minikube.md)
- [VirtualBox](./virtualbox.md)
- [WSL](./wsl.md)

---

> 📌 **Tip**: Multipass is ideal for quickly spinning up clean Ubuntu environments for testing scripts, building software, or experimenting with cloud-init configurations without affecting your main system.
