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
