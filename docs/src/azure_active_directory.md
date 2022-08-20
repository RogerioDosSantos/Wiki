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

### Create Application Registration (From the Portal)

- Go to *Azure Portal* and go to *Azure Active Directory* 
- On the left menu click in *App Registrations*
- Click on *New Registration* on the top menu 
- Fill the required fields and click in the *Register* button 

### Create Application Secret (From the Portal)

- Go to *Azure Portal* and go to *Azure Active Directory* 
- On the left menu click in *App Registrations*
- Create an *Application Registration* if you do not have one (Create Application Registration (From the Portal))
- Select your *Application Registration* 
- On the left menu click in *Certificates & secrets* 
- Select the *Client secrets* tab 
- Click in the *New client secret* 
- Add a *Description* and select when the *secret* will expire 
- Press *Add* button
- Copy the *Secret value* and save it in a secure place. 
  - *Note*: You will not be able to retrieve this value again

#### References 

- [Active Directory B2C Introduction Video](https://www.youtube.com/watch?v=h5bxhZRF4mI)
- [Active Directory B2C Documentation](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-overview)


