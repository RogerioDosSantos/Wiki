# Helm

[Helm](https://helm.sh/) helps you manage Kubernetes applications — Helm Charts help you define, install, and upgrade even the most complex Kubernetes application. 

## Introduction
![](https://photos.google.com/share/AF1QipPhkobnteIpx5Dk_AJ0gAmGZAiXuGTLP9-mo1wJxDuyCiox9qiAtJ5HiLaJPmou5g/photo/AF1QipOSSn0hufdy_FNNdLz3pzMsSdKgBOJOID1-pcL8?key=djBQWE5Na0R3NlBvQlhuU2Z6LTJjWV80M3U2Skxn)
![](https://photos.google.com/share/AF1QipM4cCpAsgsp_HTwWllhWyO1r6mGdVKQ88R4ADyxC9LKU-5Yp7ozAYW5BahO6m85Bw/photo/AF1QipNXSq1v0soDin_1tgZmwIcD0FMBcYSWplnPtm7r?key=Qno5QUhnRWdtcFhtVG5aYmt2U1dhcENGUTN3UnB3)

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
