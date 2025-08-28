# Helm

Helm is a **package manager for Kubernetes** that simplifies defining, installing, and managing applications on Kubernetes clusters. Helm uses a packaging format called **charts**, which are collections of files describing a related set of Kubernetes resources. With Helm, you can version, share, and deploy complex applications with ease, making it an essential tool for Kubernetes operators and developers.

---

## Concepts

The following table summarizes key Helm concepts:

| **Concept**            | **Description**                                                                 |
|------------------------|---------------------------------------------------------------------------------|
| **Helm Chart**         | A collection of files that describe a set of Kubernetes resources required to run an application, tool, or service. Charts package all necessary configuration and templates together. |
| **Release**            | An instance of a chart running in a Kubernetes cluster. Each install creates a new release, allowing multiple deployments of the same application with different configurations. |
| **Helm Repository**    | A location where charts are stored and shared. Public and private repositories are supported. |

---

## Helm Workflow and Architecture

Helm's architecture and workflow enable efficient application management on Kubernetes.

### Helm Debug and Dry-Run

The following diagram illustrates the Helm debug and dry-run workflow:

![Helm Debug and Dry-Run Workflow](./resources/helm/helm_debug_dryrun.png)
*This diagram shows how Helm interacts with the Kubernetes API server to render templates and validate configurations without making any changes to the cluster. Once verified, you can proceed with the actual deployment.*

To simulate the deployment process, use the following command with `--dry-run` and `--debug` options:

> ?? **Tip**: Use dry-run to preview changes before applying them to your cluster.

```powershell
# Simulate a Helm install with debug output
helm install <release_name> <chart> --dry-run --debug
```

---

## Common Helm Commands

Below are common Helm commands, each with a brief description:

- **Add a Helm chart repository (e.g., stable charts):**

  ```powershell
  helm repo add <repo_name> <repo_url>
  ```

- **Update information of available charts from all repositories:**

  ```powershell
  helm repo update
  ```

- **Search for a chart in repositories:**

  ```powershell
  helm search repo <chart>
  ```

- **Install a chart as a release in your cluster:**

  ```powershell
  helm install <release_name> <chart> [flags]
  ```

- **List all releases in the current Kubernetes context:**

  ```powershell
  helm list
  ```

- **Uninstall a release from the cluster:**

  ```powershell
  helm uninstall <release_name>
  ```

- **Upgrade a release to a new chart version or configuration:**

  ```powershell
  helm upgrade <release_name> <chart> [flags]
  ```

- **Rollback a release to a previous revision:**

  ```powershell
  helm rollback <release_name> <revision>
  ```

- **Show the history of a release, including previous revisions:**

  ```powershell
  helm history <release_name>
  ```

- **Display all information for a given release, including resources, hooks, and values:**

  ```powershell
  helm get all <release_name>
  ```

- **Render chart templates locally and display the output without installing:**

  ```powershell
  helm template <chart>
  ```

- **Run a series of checks to verify that the chart is well-formed and follows best practices:**

  ```powershell
  helm lint <chart>
  ```

- **Generate a new chart directory structure with sample files:**

  ```powershell
  helm create <chart_name>
  ```

> ?? **Tip**: Use `helm --help` to explore more commands and options.

---

## Kubernetes Cluster Connection

Helm interacts with your Kubernetes cluster using your current kubeconfig context.

> ?? **Tip**: For Azure Kubernetes Service (AKS), connect using Azure CLI as shown below.

- **Connect to your AKS cluster:**

  ```powershell
  az aks get-credentials --resource-group <resource_group_name> --name <kubernetes_cluster_name>
  ```

- **Check your cluster connection:**

  ```powershell
  kubectl cluster-info
  ```

---

## Helm Test

Helm provides a built-in mechanism to test releases using the `helm test` command. This feature allows you to define Kubernetes resources (such as Jobs or Pods) in your chart that are executed to verify the health or correctness of a deployed release.

### How Helm Test Works

- Test resources are defined in the chart's `templates/` directory and annotated with `helm.sh/hook: test`.
- When you run `helm test <release_name>`, Helm creates and runs these resources in the cluster.
- The test is considered successful if all test pods complete with a `Succeeded` status.

### Example: Defining a Test Job in a Chart

Below is an example of a Kubernetes Job manifest for a Helm test:

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: "{{ include \"mychart.fullname\" . }}-test-connection"
  annotations:
    "helm.sh/hook": test
spec:
  template:
    spec:
      containers:
        - name: curl
          image: busybox
          command: ['sh', '-c', 'curl -sf http://my-service:8080/healthz']
      restartPolicy: Never
```

### Running Helm Tests

To execute the tests for a release:

```powershell
helm test <release_name>
```

> ?? **Tip**: Use Helm tests to validate deployments, check service health, or run integration checks after installation or upgrade.

**Learn more:** [Helm Documentation - Chart Tests](https://helm.sh/docs/topics/chart_tests/)

---

## Persistent Volume Claim (PVC)

A **Persistent Volume Claim (PVC)** is a request for storage by a user in Kubernetes. It allows you to dynamically or statically provision storage resources for your applications, ensuring data persists beyond the lifecycle of individual pods.

### Key Concepts

- **Persistent Volume (PV):** A piece of storage in the cluster, provisioned by an administrator or dynamically provisioned using StorageClasses.
- **Persistent Volume Claim (PVC):** A user's request for storage, specifying size, access mode, and storage class.
- **StorageClass:** Defines the type of storage (e.g., SSD, HDD, network storage) and its parameters.

### Example PVC Manifest

Below is an example of a PVC manifest (`pvc.yaml`):

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
  storageClassName: standard
```

- `accessModes`: Defines how the volume can be mounted (e.g., `ReadWriteOnce`, `ReadOnlyMany`, `ReadWriteMany`).
- `resources.requests.storage`: The amount of storage requested.
- `storageClassName`: The storage class to use for dynamic provisioning.

### Usage in Helm Charts

You can define PVCs in your Helm chart templates and reference them in your application deployments. This ensures your application has persistent storage across pod restarts and upgrades.

> ?? **Tip:** Always check your cluster's available StorageClasses and configure your PVCs accordingly. Use `kubectl get storageclass` to list them.

---

## References

- [Helm Official Documentation](https://helm.sh/docs/)
- [Building Helm Charts From the Ground Up](https://www.youtube.com/watch?v=vQX5nokoqrQ)
- [Implementing Blue/Green strategy](https://medium.com/@saraswatpuneet/blue-green-deployments-using-helm-charts-93ec479c0282)

---
