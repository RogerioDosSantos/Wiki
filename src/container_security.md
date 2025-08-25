# Container Security 

## Kernel namespaces 

- Namespaces provide the first and most straightforward form of isolation: processes running within a container cannot see, and even less affect, processes running in another container, or in the host system
- Each container also gets its own network stack, meaning that a container doesn’t get privileged access to the sockets or interfaces of another container.
- From a network architecture point of view, all containers on a given Docker host are sitting on bridge interfaces

## Control groups 

- They implement resource accounting and limiting 
- Ensure that each container gets its fair share of memory, CPU, disk I/O; and, more importantly, that a single container cannot bring the system down by exhausting one of those resources
- They are essential to fend off some denial-of-service attacks

## Docker daemon attack surface 

- Docker daemon requires root privileges. There is a mode called [Rootless mode](https://docs.docker.com/engine/security/rootless/) (experimental).
- Since the daemon has *root privileges*, it can for example access Ports with numbers 0–1023 which are called system or well-known ports.

## Container Signature (Image Signing)

### Content Trust



## References

- [Docker Security](https://docs.docker.com/engine/security/security/)
- [Signing Images with Docker Content Trust](https://docs.docker.com/engine/security/trust/content_trust/)
- [Content trust in Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-content-trust)
