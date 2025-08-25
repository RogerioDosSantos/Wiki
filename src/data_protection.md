# Data Protection 

The *DataProtectionProvider* and *DataProtector* are the default way to execute data protection using *ASP.NET Core*. 

Although this solution works very well protecting the data betwen cloud components, it is not good for aplying data protection between the cloud and devices. Please see caveats below

## Caveats 

- Although there is an option for you to inform a certificate in the *DataProtectionProvider*, the certificate is only used for the creation of the key that will be encrypted. You cannot protect or unprotect using only the public certificate (Async Encryption).

- When you call the protect, a key is created. This key can be storaded in the file syste, in azure blob and other ways. Even if you use the same certificate, a new key will be created for a new instance of the *DataProtectionProvider*. Therefore the only way you can unprotect from another provider is to copying the generated key to the location the second provider is looking for it.

## References 

- [ASP.NET Core Data Protection](https://docs.microsoft.com/en-us/aspnet/core/security/data-protection/introduction?view=aspnetcore-3.1)

- [Examples and tests done with the Data Protection](https://github.com/RogerioDosSantos/example_dotnetcore_apis/blob/master/qa/TestDataProtectionTools.cs)

