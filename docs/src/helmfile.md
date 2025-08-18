# HelmFile

[HelmFile](https://github.com/roboll/helmfile) is a declarative tool for deploying and managing collections of Helm charts on Kubernetes. It enables you to define your desired state for multiple Helm releases in a single YAML file, making complex deployments more manageable and repeatable.

## Key Features

- **Declarative Management**: Define all Helm releases in a single `helmfile.yaml` file.
- **Multi-Environment Support**: Easily manage deployments for different environments (dev, staging, prod, etc.).
- **Bulk Operations**: Apply, sync, or delete all releases at once.
- **Integration with Helm**: Uses Helm under the hood, so you get all Helm features plus orchestration.
- **Secret Management**: Integrates with tools like SOPS for secure secret handling.
- **Templating**: Supports environment variables and templating for dynamic configuration.

## Common Commands

- Apply all releases as defined in your `helmfile.yaml`:
  ```powershell
  helmfile apply
  ```
- Sync releases (install/upgrade as needed):
  ```powershell
  helmfile sync
  ```
- Show a diff of what will change:
  ```powershell
  helmfile diff
  ```
- Destroy all releases defined in the file:
  ```powershell
  helmfile destroy
  ```
- List all releases:
  ```powershell
  helmfile list
  ```

## Useful Links

- [HelmFile GitHub](https://github.com/roboll/helmfile)
- [HelmFile Documentation](https://helmfile.readthedocs.io/en/latest/)
- [Helm](https://helm.sh/)

## See Also

- [Helm](./helm.md)
- [Kubernetes](./kubernetes.md)
- [SOPS](https://github.com/mozilla/sops) (for secret management)
