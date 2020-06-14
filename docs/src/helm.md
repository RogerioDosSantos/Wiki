# Helm

[Helm](https://helm.sh/) helps you manage Kubernetes applications — Helm Charts help you define, install, and upgrade even the most complex Kubernetes application. 

## Introduction
![](https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/helm_chart_and_commands.png)
![](https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/helm_chart_ingress.png)

## Concepts

### Helm Charts 

*Helm Charts* are configurations that describe a *deployment*. All configuration files are located into a folder.

### Releases 

Releases is the deployment of a *Helm Chart*

### Helm Repository 

*Helm Repository* is a global location that you can find *Helm Charts*. For example on the *stable* repository you can find a *Jenkins Helm Chart* that install *Jenkins* (stable/jenkins).

## Commands

`helm repo add stable https://kubernetes-charts.storage.googleapis.com/`: Add the stable default helm repository

`helm search repo stable [<filter_keyword>]`: Search the stable helm repository. If `<filter_keyword>` is informed, the search will be filtered by it. 

`helm repo update`: Update the local information of all repositories.

`az aks get-credentials --resource-group <resource_group_name> --name <kubernetes_cluster_name>` : Helm uses *az* behind the scenes, therefore requires it to be properly connected with the *Kubernetes Cluster*. This command allows the *az* tool to be connected with it.

`kubectl cluster-info` : Allow you to check if the *az* tool is connected with a *Kubernetes Cluster*

`helm install [<release_name>] <chart_name> [--generate-name]`: Install a *Helm Chart* into the *Kubernetes Cluster*. Use `<release_name>` to informe the name of the deployment. In case you want the name to be created automatically you can use the `--generate-name` option. E.g.: `helm install jenkins-test stable/jenkins`

`helm ls`: List all releases

`helm uninstall <release_name> [--keep-history]`: Uninstall a *release*. If the `--keep-history` is informed, the *release history* will be saved and it can be recovered using `helm rollback` command. 

`helm rollback <release_name>`: Recover / restore a release. 

## References

- [Building Helm Charts From the Ground Up](https://www.youtube.com/watch?v=vQX5nokoqrQ)
- [Implementing Blue/Green strategy](https://medium.com/@saraswatpuneet/blue-green-deployments-using-helm-charts-93ec479c0282)
