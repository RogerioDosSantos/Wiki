# Azure Key Vault

Cloud applications and services use cryptographic keys and secrets to help keep information secure. Azure Key Vault safeguards these keys and secrets. When you use Key Vault, you can encrypt authentication keys, storage account keys, data encryption keys, .pfx files, and passwords by using keys that are protected by hardware security modules (HSMs).

Key Vault helps solve the following problems:

Secret management: Securely store and tightly control access to tokens, passwords, certificates, API keys, and other secrets.
Key management: Create and control encryption keys that encrypt your data.
Certificate management: Provision, manage, and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with Azure and your internal connected resources.
Store secrets backed by HSMs: Use either software or FIPS 140-2 Level 2 validated HSMs to help protect secrets and keys.

## How-to 

### Add and Retrieve Secrets

```shell 
# Set a secret
az keyvault secret set --vault-name '<vault_name>' --name '<key>' --value '<value>'

# Get a secret (Show full metadata)
az keyvault secret show --vault-name 'name' --name '<key>' 

# Get a secret return only the value
az keyvault secret show --vault-name '<name>' --name '<key>' --query value -o tsv
```

### Create *Key-Vault* (From the Portal) 

- Create a *Resource Group* if you do not have one
- Go to *Azure Portal* and go to the *Resource Group* you would like to create the *Key-Vault*
- Press the *Create* button 
- From the search menu type *Key Vault* 
- Select the *Key Vault* from *Microsoft* and press the *Create* button 
- Enter the *Key vault name*, *Region*, and *Pricing tier* 
- Press the *Review and Create* button 


### Link Asp.Net application *appsettings.json* with *Key-Vault* using *Managed Identity* with *Client Secret Credendial* 

Using *Managed Identity* allows you to create a configuration that can *authenticate* to the *Azure Services* in several diferent ways. The most secure way would be using [Managed Service Identity (MSI)](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview), which no *user*, *token*, *id*, *certificates*, or *secrets* needs to be passed to the application. However, *MSI* is not supported yet in all *Azure Resources* (E.g.: *App Services for Containers*), on those cases you can use a *Client Secret Credendial* to *authenticate* to the *Azure Service* by passing an *Azure Client Id*, *Azure Tenant Id*, and *Azure Client Secret* from an *Azure Application Registration (Service Principal)*. 

#### Allow an *Application* to *Get* and *List* values from *Key-Vault*

- [Create an Application Registration](./azure_active_directory.md) (Create Application Registration (From the Portal) session)
- [Create a new Application Secret](./azure_active_directory.md) (Create Application Secret (From the Portal) session)
- Go to *Azure Portal* and go to *Azure Active Directory* 
- Create a *Key-Vault* if it does not exist (Create *Key-Vault* (From the Portal) session)
- Go to the *Key-Vault*. E.g.: *MyKeyVaultName*
- On the left menu click in *Access Policies* 
- Click in *Add Access Policy* 
- Select the *Get* and *List* permissions for *Key*, *Secret*, and *Certificate*
- Click in *Select Principal*
- Search for you *Application Registration*, click on it, and press the *Select* button 
  - *Note*: You can confirm if you have the correct *Application Registration* by comparing the *Object ID*. 
- Press the *Add* button. 
- Press the *Save* button.

#### Add *Secrets* into the *Key-Vault* 

- Go to the *Key-Vault* 
- Click in *Secrets* on the left menu 
- Click in *Generate / Import* button 
- Add the name in the following format: `<application_prefix>-<appsettings_level_01>--<appsettings_level_02>...`

For example if you have the following entry in your *appsettings.json* in your *MyAppName* application: 

```json
"KeyVault": {
    "AzureClientSecret": "<this_configuration_is_set_by_environment_variable>",
  }
```

Your key will be `MyAppName-KeyVault--AzureClientSecret`

- Add the *Value* and press the *Create* button

#### Prepare the Asp.Net application to replace the *appsettings.json* with the values from the *Key-Vault* 

- Add the following into you *appsettings.json* 

```json
{
 "KeyVault": {
    "EnableKeyVault": true,
    "ApplicationName": "<the_name_of_your_applicaton>",
    "KeyVaultName": "<the_name_of_your_key_vault>",
    "AzureCredential": "ClientSecretCredential",
    "AzureClientId": "<the_applicaton_registration_client_id>",
    "AzureTenantId": "<the_applicaton_registration_tenant_id>",
    "AzureClientSecret": "<use_secrets_json_to_configure_this_settings>",
  }
}
```

*Note*: See [Visual Studio (Add Secrets configured in the appsettings.json in the secrets.json session)](./visual_studio.md) for how to add the *AzureClientSecret* into the *secrets.json* file.

- Create a *PrefixKeyVaultSecretManager.cs* class file with the following code 

```C#
using Azure.Extensions.AspNetCore.Configuration.Secrets;
using Azure.Security.KeyVault.Secrets;
using Microsoft.Extensions.Configuration;

namespace MyAppName
{
    public class PrefixKeyVaultSecretManager : KeyVaultSecretManager
    {
        private readonly string _prefix;

        public PrefixKeyVaultSecretManager(string prefix)
            => _prefix = $"{prefix}-";

        public override bool Load(SecretProperties properties)
            => properties.Name.StartsWith(_prefix);

        public override string GetKey(KeyVaultSecret secret)
            => secret.Name[_prefix.Length..].Replace("--", ConfigurationPath.KeyDelimiter);
    }
}
```

- Modify your *Program.cs* to use the *Key-Vault* and *Environment Variables* by using the *ConfigureAppConfiguration* 

```C#
public static IWebHostBuilder CreateWebHostBuilder(string[] args)
{
    return WebHost.CreateDefaultBuilder(args)
    .ConfigureAppConfiguration(configurationBuilder =>
    {
        configurationBuilder.AddEnvironmentVariables();

        IConfigurationRoot? rootConfiguration = configurationBuilder.Build();
        bool.TryParse(rootConfiguration["KeyVault:EnableKeyVault"], out bool enableKeyVault);
        if (enableKeyVault)
        {
            Console.WriteLine("Key-Vault: Connecting to Key-Vault - Start");

            string vaultName = rootConfiguration["KeyVault:KeyVaultName"];
            Console.WriteLine($"Key-Vault: Vault Name: {vaultName}");

            Uri keyVaultAddress = new Uri($"https://{vaultName}.vault.azure.net/");
            string azureCredential = rootConfiguration["KeyVault:AzureCredential"];
            Console.WriteLine($"Key-Vault: Using {azureCredential} credentials");

            Enum.TryParse(azureCredential, out AzureCredentialModel credential);
            TokenCredential? keyVaultCredential = null;
            switch (credential)
            {
                default:
                case AzureCredentialModel.DefaultAzureCredential:
                    keyVaultCredential = new DefaultAzureCredential();
                    break;
                case AzureCredentialModel.SharedTokenCacheCredential:
                    keyVaultCredential = new SharedTokenCacheCredential();
                    break;
                case AzureCredentialModel.ManagedIdentityCredential:
                    keyVaultCredential = new ManagedIdentityCredential();
                    break;
                case AzureCredentialModel.EnvironmentCredential:
                    keyVaultCredential = new EnvironmentCredential();
                    break;
                case AzureCredentialModel.ClientSecretCredential:
                    string azureClientId = rootConfiguration["KeyVault:AzureClientId"];
                    Console.WriteLine($"Key-Vault: Azure Client ID: {azureClientId}");

                    string azureTenantId = rootConfiguration["KeyVault:AzureTenantId"];
                    Console.WriteLine($"Key-Vault: Azure Tenant ID: {azureTenantId}");

                    string azureClientSecret = rootConfiguration["KeyVault:AzureClientSecret"];
                    keyVaultCredential = new ClientSecretCredential(
                        clientId: azureClientId,
                        tenantId: azureTenantId,
                        clientSecret: azureClientSecret
                        );
                    break;
            }

            SecretClient secretClient = new SecretClient(keyVaultAddress, keyVaultCredential);
            try
            {
                string expectedValidationString = rootConfiguration["KeyVault:ValidationString"];
                Console.WriteLine("Key-Vault: Verifying Key-Vault Connection");

                KeyVaultSecret validationString = secretClient.GetSecret("ArtifactsManagerAPI-KeyVault--ValidationString");
                if (!expectedValidationString.Equals(validationString.Value))
                    throw new Exception($"Key-Vault: Application is not connection to the correct key-vault. Expected Validation String: {expectedValidationString} ; Received Validation String: {validationString.Value}");                        
            }
            catch (AuthenticationFailedException authenticationException)
            {
                Console.WriteLine($"Key-Vault: Authentication Failed. {authenticationException.Message}");
                throw;
            }

            string applicationName = rootConfiguration["KeyVault:ApplicationName"];
            Console.WriteLine($"Key-Vault: Application Name: {applicationName}");

            PrefixKeyVaultSecretManager prefixKeyVaultManager = new PrefixKeyVaultSecretManager(applicationName);
            configurationBuilder.AddAzureKeyVault(secretClient, prefixKeyVaultManager);
            Console.WriteLine("Key-Vault: Connecting to Key-Vault - Done");
        }
    })
    .UseStartup<Startup>()
    .UseKestrel();
}
```

*Note*: The code abbove allow you to execute several *Azure Authentication Type* including *MSI*, therefore in case you have a resource that *MSI* is supported, you can use it without change your code. All you need to do it to inform to use the desired *Authentication* method (E.g.: *DefaultAzureCredential*) in your *appsettings.json*

## References 

[Managed Service Identity (MSI) - Documentation](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview)
