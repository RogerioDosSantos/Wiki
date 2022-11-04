# Certificates 

## HOW-TOs

### Create certificate using OpenSSL 

```shell 
# Create Private and Public Key
openssl req -newkey rsa:2048 -nodes -keyout primary_key.pem -x509 -days 365 -out public_key.pem

# Encapsulate in a Personal Information Exchange (.pfx) file (Contains the primary_key and public_key)
openssl pkcs12 -inkey primary_key.pem -in public_key.pem -export -out certificate.pfx 
```

### Create Self-Signed Certificate using Powershell 

```ps1
$cert = New-SelfSignedCertificate -certstorelocation cert:\localmachine\my -dnsname <auto_signed_certificate_dns>
```
The certificate can be found using `certlm` in:

![](https://i.vgy.me/9hobFz.png)

### Find Certificate By Thumbprint using Powershell 

```powershell
gci cert:\ -Recurse | where{$_.Thumbprint -eq "<thumbprint>"}
```

### Get all certificate property by Thumbprint using Powershell 

```powershell
# Using GCI 
gci cert:\ -Recurse | where{$_.Thumbprint -eq "<thumbprint>"} | Format-List -property *

# Unsing Dir
dir -recurse | where {$_.Thumbprint -eq "<thumbprint>"} | Format-List -property *
```

### Remove Certificate by Thumbprint using Powershell

```powershell
gci cert:\ -Recurse | where{$_.Thumbprint -eq “<thumbprint>”} | Remove-Item -Force -Verbose
```

## References 

- [Use a TLS/SSL certificate in your code in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/configure-ssl-certificate-in-code)
