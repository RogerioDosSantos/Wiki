# Microsoft Defender for Cloud's just-in-time (JIT)

[Microsoft Defender for Cloud's just-in-time (JIT) VM access](https://docs.microsoft.com/en-us/azure/defender-for-cloud/just-in-time-access-usage) allow you to lock down the inbound traffic to your VMs, reducing exposure to attacks while providing easy access to connect to VMs when needed. 

Basically the *JIT* blocks all ports in the [Azure Network Security Group (NSG)](https://docs.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview#security-rules) and when an user request access a VM port to be used, *JIT* will look in the [Azure role-based access control (Azure RBAC)](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal?tabs=current) permission to determine if the user has or not access to that particular VM. If the user has access, a rule will be created on the [Azure Firewall](https://docs.microsoft.com/en-us/azure/firewall/rule-processing) to allow that particular port to be accessible by the *User IP* for a specific period of time specified. Once the time expires, *JIT* will close the openned port. 

## How Defender for Cloud identifies which VMs should have JIT applied

![](./azure_jit/2022_01_20_14_50_24_Understanding_just-in-time_virtual_machine_access_.png)

## References 

- [Azure JIT VM access configuration](https://docs.microsoft.com/en-us/azure/defender-for-cloud/just-in-time-access-usage)
- [Azure JIT consepts](https://docs.microsoft.com/en-us/azure/defender-for-cloud/just-in-time-access-overview)
