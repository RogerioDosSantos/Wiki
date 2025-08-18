# HelmFile

[HelmFile](https://github.com/roboll/helmfile) is a declarative tool for deploying and managing collections of Helm charts on Kubernetes. It enables you to define your desired state for multiple Helm releases in a single YAML file, making complex deployments more manageable and repeatable.

---

## Table of Contents
- [Key Features](#key-features)
- [Common Commands](#common-commands)
- [Commongly Used Helmfile YAML Structure](#commongly-used-helmfile-yaml-structure)
- [Using Charts from a Remote Git Repository](#using-charts-from-a-remote-git-repository)
- [How Helmfile Connects to Kubernetes](#how-helmfile-connects-to-kubernetes)
- [Useful Links](#useful-links)
- [See Also](#see-also)

---

## Key Features

- **Declarative Management**: Define all Helm releases in a single `helmfile.yaml` file.
- **Multi-Environment Support**: Easily manage deployments for different environments (dev, staging, prod, etc.).
- **Bulk Operations**: Apply, sync, or delete all releases at once.
- **Integration with Helm**: Uses Helm under the hood, so you get all Helm features plus orchestration.
- **Secret Management**: Integrates with tools like SOPS for secure secret handling.
- **Templating**: Supports environment variables and templating for dynamic configuration.

---

## Common Commands

Below are frequently used Helmfile commands with brief descriptions:

| Command | Description |
|---------|-------------|
| `helmfile apply` | Apply all releases as defined in your `helmfile.yaml` |
| `helmfile sync` | Sync releases (install/upgrade as needed) |
| `helmfile diff` | Show a diff of what will change |
| `helmfile destroy` | Destroy all releases defined in the file |
| `helmfile list` | List all releases |

> ?? **Tip**: Run these commands in the directory containing your `helmfile.yaml`.

---

## Commongly Used Helmfile YAML Structure

A typical `helmfile.yaml` structure includes environments, releases, and optional values files. This structure helps organize deployments for different environments and multiple releases.

```yaml
# Example helmfile.yaml structure

environments:
  dev:
    values:
      - values-dev.yaml
  prod:
    values:
      - values-prod.yaml

releases:
  - name: my-app
    namespace: default
    chart: stable/my-app
    version: 1.2.3
    values:
      - replicaCount: 2
        image:
          repository: my-app
          tag: v1.2.3
        service:
          type: ClusterIP
  - name: another-app
    namespace: apps
    chart: stable/another-app
    values:
      - values/another-app-values.yaml
```

- **environments**: Define environment-specific values files.
- **releases**: List of Helm releases to manage, each with its own chart, namespace, and values.
- **values**: Inline values or references to external YAML files for configuration.

> ?? **Reference**: See the [HelmFile Documentation](https://helmfile.readthedocs.io/en/latest/) for more advanced usage and templating options.

---

## Using Charts from a Remote Git Repository

You can reference charts directly from remote git repositories, allowing you to use charts not published to a Helm repository.

**Example: Reference a chart from a remote git repository**

```yaml
releases:
  - name: my-remote-chart
    namespace: default
    chart: git::https://github.com/example-org/charts.git//mychart?ref=main
    values:
      - values.yaml
```

- The `chart` field uses the `git::` prefix, followed by the repository URL, double slashes (`//`) to specify the chart subdirectory, and an optional `?ref=` to specify the branch, tag, or commit.
- Works with both public and private repositories (authentication may be required for private repos).

> ?? **Reference**: See the [Helmfile Documentation - Remote Charts](https://helmfile.readthedocs.io/en/latest/#remote-charts) for more details and advanced options.

---

## How Helmfile Connects to Kubernetes

Helmfile interacts with your Kubernetes environment by leveraging the kubeconfig file (typically located at `$HOME/.kube/config`). This file contains the necessary configuration, such as cluster addresses, credentials, and context, that tells Helm (and thus Helmfile) which Kubernetes cluster to operate on.

When you run `helmfile sync` or `helmfile apply`, Helmfile uses the current context in your kubeconfig to determine which cluster to connect to and apply the desired state as defined in your `helmfile.yaml`.

**To target a different cluster:**

1. Switch the context in your kubeconfig:
   ```sh
   kubectl config use-context <context-name>
   ```
2. Or specify a different kubeconfig file:
   ```sh
   export KUBECONFIG=/path/to/your/kubeconfig
   helmfile apply
   ```

> ?? **Note**: This mechanism ensures that Helmfile and all related Helm operations are executed against the intended Kubernetes environment.

---

## Useful Links

- [HelmFile GitHub](https://github.com/roboll/helmfile)
- [HelmFile Documentation](https://helmfile.readthedocs.io/en/latest/)
- [Helm](https://helm.sh/)

---

## See Also

- [Helm](./helm.md)
- [Kubernetes](./kubernetes.md)
- [SOPS](https://github.com/mozilla/sops) (for secret management)
