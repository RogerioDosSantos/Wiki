# Azure Storage

## Storage Types 

### Standard general-purpose v2 

Support the following storage services:

Blob (including Data Lake Storage1), Queue, and Table storage, Azure Files

Standard storage account type for blobs, file shares, queues, and tables. Recommended for most scenarios using Azure Storage. Note that if you want support for NFS file shares in Azure Files, use the premium file shares account type.

General-purpose v2 accounts deliver the lowest per-gigabyte capacity prices for Azure Storage, as well as industry-competitive transaction prices. General-purpose v2 accounts support default account access tiers of hot or cool and blob level tiering between hot, cool, or archive.

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

## References 

- [Azure Storage Documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview)

