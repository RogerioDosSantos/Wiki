# Azure Storage

## Commands

`azcopy --source <source> --destination <destination> [Options]` : Download/Upload applications


`azcopy --source <source> --destination <destination> --dest-key <key> --resume <log_file_path> --quiet` : Download/Upload applications silently and put the result into a log file

## Installations

### AzCopy

AzCopy requires .Net Core

```bash
mkdir ~/temp
cd ~/temp
wget -O azcopy.tar.gz https://aka.ms/downloadazcopyprlinux
tar -xf azcopy.tar.gz
sudo ./install.sh
```

