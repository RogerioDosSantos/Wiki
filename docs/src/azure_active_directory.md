# Azure Active Directory

## Commands 

`az storage account keys list -g <resource_group> -n <storage_account>`: List Storage Account keys

## How-to 

### Create Service Principal 

- Go to *Azure Portal* and get your *Subscription ID (azure_subscription_id)*:

![](https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/azure_active_directory/azure_portal_subscription.png)

```shell
echo "-- Login on Azure (Using User and Password)" 
az login -u ${azure_user} -p ${azure_password} 
echo "-- Create Service Principal" 
az account set --subscription="${azure_subscription_id}" 
az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/${azure_subscription_id}"
echo "-- Login on Azure using Service Principal" 
az login --service-principal -u "${azure_client_id}" -p "${azure_client_secret}" --tenant "${azure_tenant_id}" 
```

#### References 

- [Active Directory B2C Introduction Video](https://www.youtube.com/watch?v=h5bxhZRF4mI)
- [Active Directory B2C Documentation](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-overview)


