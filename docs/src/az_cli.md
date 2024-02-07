# AZ CLI

## Commands

### Login using service principal
```shell
az login --service-principal -u <user> --password=<password> --tenant <tenant_id> --allow-no-subscriptions
```

### Update Container into container App
```shell
az containerapp update --name "<service_name>" --revision-suffix "<revision>" --resource-group "<resource_group>" --image "<container_image_name>:<container_image_version>"
```

### Set current subscription as default
```shell
az account set --subscription <subscription_name>
```
