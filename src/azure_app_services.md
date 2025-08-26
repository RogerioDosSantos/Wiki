# Azure App Services

Azure App Services is a fully managed platform for building, deploying, and scaling web apps, APIs, and mobile backends in Microsoft Azure. It supports multiple programming languages and frameworks, providing integrated tools for DevOps, authentication, scaling, and more.

---

## Table of Contents

- [Overview](#azure-app-services)
- [Key Features](#key-features)
- [App Services for Containers](#app-services-for-containers)
- [Deployment Slots](#deployment-slots)
- [Deployment Center](#deployment-center)
- [How-To](#how-to)
- [Useful Links](#useful-links)
- [See Also](#see-also)

---

## Key Features

- **Multi-language support:** .NET, .NET Core, Java, Ruby, Node.js, PHP, or Python
- **Managed hosting:** Automatic OS patching, load balancing, and scaling
- **Integrated DevOps:** Continuous deployment from GitHub, Azure DevOps, or any Git repo
- **Custom domains and SSL:** Easy configuration for secure, branded endpoints
- **Authentication and authorization:** Built-in integration with Azure Active Directory and social providers
- **Staging environments:** Deploy and test in slots before going live
- **Global scale:** Deploy apps in data centers worldwide
- **Hybrid connectivity:** Connect securely to on-premises resources

---

## App Services for Containers

Azure App Services supports running containerized applications. Advanced troubleshooting tools are available.

> 📌 **Tip**: Use the advanced tools (Kudu) for troubleshooting and diagnostics in containerized App Services.

---

## Deployment Slots

Deployment slots allow you to host different versions of your app and swap them with zero downtime.

- The URL does not change; both slot and production share the same base URL.
- Slots can have differences in code and configuration.
- You can route a percentage of production traffic to a slot (e.g., 50%).
- Access slots using the production URL with: `<url>/?x-ms-routing-name=<slot_name>`
- Swapping slots updates the deployment without changing DNS; active connections remain on the previous deployment.

> 💡 **Note**: Deployment slots are ideal for staged rollouts and A/B testing.

---

## Deployment Center

The Deployment Center is a centralized way to connect your source control (e.g., Git) to your App Service for automated deployments.

- Link to source control for continuous deployment.
- Redeploy any previous deployment from the center.
- Unlike slots, redeployments may cause brief downtime.

---

## How-To

### Access the Shell of a Container App

To open a shell session inside an Azure Container App, use the following command:

```sh
az containerapp exec --name <container-app-name> --resource-group <resource-group> --command "/bin/bash"
```

> 📌 **Tip**: This is useful for troubleshooting, inspecting files, or running commands directly inside your container app.

---

## Useful Links

| Resource | Description |
|----------|-------------|
| [Azure App Service Documentation](https://docs.microsoft.com/en-us/azure/app-service/) | Official Microsoft Docs |
| [Quickstart: Create a web app](https://docs.microsoft.com/en-us/azure/app-service/quickstart-html) | Step-by-step guide |
| [Pricing](https://azure.microsoft.com/en-us/pricing/details/app-service/) | App Service pricing |
| [App Service on GitHub](https://github.com/Azure/app-service) | Source and samples |
| [Video: Slots](https://www.youtube.com/watch?v=0cgy4GplC4I) | Explains deployment slots |
| [Video: Deployment Center](https://www.youtube.com/watch?v=QdI_BJHMadU) | Explains deployment center |

---

## See Also

- [Azure Container Instances](./azure_container_instances.md)
- [Azure Storage](./azure_storage.md)
- [Azure Key Vault](./azure_key_vault.md)
- [Azure Pipeline](./azure_pipeline.md)
- [Amazon Web Services (AWS)](./aws.md)

---

> 📌 **Tip**: Use deployment slots to safely test new versions of your app before swapping into production.

