# Git LFS (Large File Storage)

[Git Large File Storage (LFS)](https://git-lfs.github.com/) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.

## Installation

### Ubuntu

```shell
sudo apt-get update -y
sudo apt-get install -y git-lfs
```

## How-to

### Track file types on Git LFS 

Allow *Git LFS* to store the files in another location. You should list the list of files you want tracked using the following command:

```shell 
git lfs track "*.<file_extension>"
```

### List all files controlled by Git LFS

```shell
git-lfs ls-files <branch_name>
```

### Migrate existing commits to Git LFS 

```bash
for file in $(git ls-files | xargs git check-attr filter | grep "filter: lfs" | sed -r "s/(.*): filter: lfs/\1/"); do
  echo "Processing ${file}";
  git rm -f --cached ${file};   
  echo "Adding $file lfs style";   
  git add ${file}; 
done
```
