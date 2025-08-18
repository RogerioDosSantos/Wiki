# Helm

[Helm](https://helm.sh/) is a package manager for Kubernetes that simplifies the process of defining, installing, and managing applications on Kubernetes clusters. Helm uses a packaging format called charts, which are collections of files that describe a related set of Kubernetes resources. With Helm, you can version, share, and deploy complex applications with ease, making it an essential tool for Kubernetes operators and developers.

## Concepts

### Helm Chart
A **Helm Chart** is a collection of files that describe a set of Kubernetes resources required to run an application, tool, or service. Charts make it easy to deploy and manage applications by packaging all necessary configuration and templates together.

### Release
A **Release** is an instance of a chart running in a Kubernetes cluster. Each time you install a chart, a new release is created, allowing you to manage multiple deployments of the same application with different configurations.

### Helm Repository
A **Helm Repository** is a location where charts are stored and shared. Public repositories, like the stable repository, provide charts for popular applications. You can also create private repositories for your own charts.

## Common Commands

Helm commands are as follows:

- Add a Helm chart repository (e.g., stable charts):
    ```powershell
    helm repo add <repo_name> <repo_url>
    ```

- Update information of available charts from all repositories:
    ```powershell
    helm repo update
    ```

- Search for a chart in repositories:
    ```powershell
    helm search repo <chart>
    ```

- Install a chart as a release in your cluster:
    ```powershell
    helm install <release_name> <chart> [flags]
    ```

- List all releases in the current Kubernetes context:
    ```powershell
    helm list
    ```

- Uninstall a release from the cluster:
    ```powershell
    helm uninstall <release_name>
    ```

- Upgrade a release to a new chart version or configuration:
    ```powershell
    helm upgrade <release_name> <chart> [flags]
    ```

- Rollback a release to a previous revision:
    ```powershell
    helm rollback <release_name> <revision>
    ```

- Show the history of a release, including previous revisions:
    ```powershell
    helm history <release_name>
    ```

- Display all information for a given release, including resources, hooks, and values:
    ```powershell
    helm get all <release_name>
    ```

- Render chart templates locally and display the output without installing:
    ```powershell
    helm template <chart>
    ```

- Run a series of checks to verify that the chart is well-formed and follows best practices:
    ```powershell
    helm lint <chart>
    ```

- Generate a new chart directory structure with sample files:
    ```powershell
    helm create <chart_name>
    ```

### Kubernetes Cluster Connection

Helm interacts with your Kubernetes cluster using your current kubeconfig context. For Azure Kubernetes Service (AKS), you may need to connect using Azure CLI:

- Connect to your AKS cluster:
    ```powershell
    az aks get-credentials --resource-group <resource_group_name> --name <kubernetes_cluster_name>
    ```

- Check your cluster connection:
    ```powershell
    kubectl cluster-info
    ```

## References

- [Helm Official Documentation](https://helm.sh/docs/)
- [Building Helm Charts From the Ground Up](https://www.youtube.com/watch?v=vQX5nokoqrQ)
- [Implementing Blue/Green strategy](https://medium.com/@saraswatpuneet/blue-green-deployments-using-helm-charts-93ec479c0282)
