# *Scoop*

*Scoop* is a command-line installer for *Windows*. 
It helps you quickly install and manage software packages and development tools directly from the terminal, similar to package managers on *Linux*.

## Features
- Simple installation of *CLI* and *GUI* apps
- Installs programs to your user profile (no admin required)
- Keeps apps isolated and easy to update or remove
- Supports *buckets* (collections of apps)

## Security Aspects
*Scoop* is designed to simplify software installation, but users should be aware of several security considerations:

- *Script Trust*: *Scoop* uses *PowerShell* scripts to install and manage software. You must set the execution policy to *RemoteSigned*, which allows local scripts to run without restriction but requires downloaded scripts to be signed. Only run scripts from trusted sources.
- *Bucket and Source Trust*: *Scoop* installs apps from *buckets* (collections of manifests). The default *bucket* is maintained by the *Scoop* team, but third-party *buckets* may not be vetted. Only add *buckets* from sources you trust.
- *Manifest Review*: Each app is defined by a manifest (*JSON* file) that specifies download *URLs* and install steps. You can review these manifests before installing to ensure they do not perform unexpected actions.
- *Risks of Third-Party Buckets*: Third-party *buckets* can introduce malicious or outdated software. Prefer official or well-known community *buckets*, and periodically review the *buckets* you have added with `*scoop bucket list*`.
- *Updates and Verification*: Regularly update *Scoop* and your installed apps to receive security patches. Use `*scoop update * *` to update all apps. *Scoop* does not verify digital signatures of downloaded binaries by default, so consider verifying hashes or signatures manually for critical software.
- *Least Privilege*: *Scoop* installs software to your user profile by default, reducing the risk of system-wide changes. However, always be cautious when running installed software.

## Installation
To install *Scoop*, open *PowerShell* and run:

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
irm get.scoop.sh | iex
```

## Basic Commands
- Install a package:
  ```powershell
  scoop install <package>
  ```
- Search for a package:
  ```powershell
  scoop search <name>
  ```
- List installed packages:
  ```powershell
  scoop list
  ```
- Update *Scoop* and all apps:
  ```powershell
  scoop update *
  ```
- Uninstall a package:
  ```powershell
  scoop uninstall <package>
  ```

## Buckets
*Buckets* are collections of apps. To add the popular '*extras*' *bucket*:

```powershell
scoop bucket add extras
```

## Useful Links
- [*Scoop* Official Site](https://scoop.sh/)
- [*Scoop* GitHub](https://github.com/ScoopInstaller/Scoop)

## Example Usage
Install *7zip* and *Visual Studio Code*:
```powershell
scoop install 7zip vscode
```

## See Also
- [*Chocolatey*](./chocolatey.md): Another *Windows* package manager
