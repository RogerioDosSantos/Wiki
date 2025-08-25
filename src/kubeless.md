# Kubeless

[Kubeless]( https://github.com/kubeless/kubeless ) is a Kubernetes-native serverless framework that lets you deploy small bits of code without having to worry about the underlying infrastructure plumbing. It leverages Kubernetes resources to provide auto-scaling, API routing, monitoring, troubleshooting and more.

Kubeless stands out as we use a Custom Resource Definition to be able to create functions as custom kubernetes resources. We then run an in-cluster controller that watches these custom resources and launches runtimes on-demand. The controller dynamically injects the functions code into the runtimes and make them available over HTTP or via a PubSub mechanism.

Kubeless is purely open-source and non-affiliated to any commercial organization.
