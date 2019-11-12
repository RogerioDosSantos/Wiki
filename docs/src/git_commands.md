# Git

## Commands

Origin (Server) >> master (Work branch) >> Header (Local commits) >> tracked (files added) >> untracked (any change)

`git config --global user.email <your e-mail> ` : config your e-mail account globally

`git config --global user.name <your name> ` : config your name globally

`git  init ` : Initialize git repository. To init the repository on the server, use the option --bare

`git add <folder> ` : add content to the git repository

`git diff --cached --name-status ` : Get the list of the git files added

`git diff HEAD <file name> ` : Compare the file with the one added.

`git commit -m <check-in description> ` : send the content to the git repository

`git commit --amend`: Allow to change a message committed and files commited.

`git config --list ` : List the current git configuration

`git clone <repository git url> <local folder name> ` : Clone git repository (E.g.: git clone ssh://git@192.168.56.113/~/git-server/leel.git)

`g123.123.123.123it status ` : Show the current status of the git repository

`git push ` : Push the changed to the server

`git config --global credential.helper "cache --timeout=3600" ` : configure to cache your credentials for a specific amount of time.

`git config credential.helper store` : Configure the user and password to be stored into the `~/.git-credentials` file. Note: The password is stored without encryption. The only protection is that the file will be set to only have read and write access to your user. If this is not an acceptable level of security, please user the *credential.helper with cache option*

`kill $(pidof git-credential-cache--daemon)`: Close the process responsible for the credential cache. This will make the password to be asked again next time you use a git command that requires it.

`git stash` : Get the information from server replacing the information of existing files with the server content. NO MERGE

`git checkout -- <filename>` : Discard added changed for a file

`git fetch origin` : Sync local origin with the remote server 

`git reset [--hard] origin/master` : Discard all local committed changes. If --hard is used all changes are lost. If --hard is not used all changed files will be on the untracked stage.

`git show`: Display the last git commit.

`git log -<quantity>`: Shows the lasts <quantity> commits.

`git log --pretty=oneline -<quantity>`: Shows the lasts <quantity> commits. Only the commit line.

`git show-branch` : Show the commits on all available branches

`git branch` : List the available branch and inform in what branch you are

`git checkout -b <branch>` : Create local branch

`git branch -d <branch>` : Remove local branch

`git checkout <branch>` : Go to the branch

`git checkout -`: Go to the latest commit on that branch.

`git pull` : Update local repository with the newest commit

`git merge <another branch` : Merge another branch into your active branch. The merged files will be on the untracked stage

`git rm <file name>` : Remove git file or directory

`git reset --hard` : Undo a change that was added but not commit yet

`git reset --hard origin/master` : Undo all changes and commits. Your code will be equivalent to the server.

`git checkout HEAD -- <file>` : Reset the file with its original value
  
`git clean -fd` : Remove untracked files.

`git rev-parse [--short] HEAD` : Display the HEAD id. Use short for the short version.

`git revert <commit_id>` : Revert command changes all the files for a specific commit back to their state before that commit was completed

`git blame` : Allow you to check the file chain history (Similar to VS annotate)

`git diff <source branch> <target branch>` : Preview the branch differences. 

`git remote show origin`: Show the URL a git repository is cloned from.

`git submodule add <repository url> ` : Add a submodule into a git project.

`git submodule add -b <branch> <repository url> ` : Add a submodule that tracks a branch

`git submodule init ` : Initialize the submodule configuration. You should run it after you clone the project with submodule on it.

`git submodule update` : Get the content of all submodules.

`git submodule update --recursive --remote` : Update all submodules to the latest commit

`git checkout <branch or label> ` : Checkout a branch to allow edition on it. IMPORTANT: If you are checkingout a lebel, you will not be allowed to modify it. Execute the command below to put the lable in another branch

`git checkout -b <new branch> <branch or label> ` : Create a new Branch for the Branch or label checked out.

`git status --ignore-submodules=dirty ` : Ignore the dirty feature that slow down the command in case you have submodules with a lot of files. You can also change the ".gitmodules" files to add the following entry in a submodule you want to ignore: ignore ## dirty

`git config --global --edit` : Edit the global configuration

`git tag -l <pattern> ` : List the tags available. If <pattern> is nothing it will list all the tags

`git describe --tags ` : Inform in what tag you are on

`git fetch origin` : Get the information from the server (History)

`git branch -a` : Show all branches. If you have a branch that is remote you need to get it on your computer using the command  `checkout`

`git checkout -b <local name> <remote name>` : Checkout a Branch. E.g.: `git checkout -b develop origin/develop`

`git remote add <name of remote> <remote url of an empty repository>` : The remote name can be any name. The remote URL should be created on the server bu not initialized, otherwise you will have an conflict error. E.g.: `git remote add new-origin git@github.com:manakor/manascope.git`

`git push --all <name of remote>` : Push all changes, include the history. It does not only push the tags information. E.g.: `git push --all new-origin`

`git push --tags <name of remote>` : Push the tags. E.g.: `git push --tags new-origin`

`git remote rm <name of the origin remote>` : Remove the remote name from the local repository. Note that `origin` is the default name. E.g.: `git remote rm origin` Note: To list the remotes available you can use the command `git remote show`

`git remote rename <name of the remote> <name of the origin remote>` : Rename the remote. E.g.: `git remote rename new-origin origin` Note: To list the remotes available you can use the command `git remote show`
t

`git push --recurse-submodules=on-demand`: Look into the histories of submodules bound to the superproject and push them out.

## How-To

### Initializing a local repository that is not on GitHub yet

``` bash
Create repository on Github
On Linux use the commands:
echo "# linux_environment" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin <repository .git url>
git push -u origin master
```

### Initializing a project that contains submodules

```bash
git clone <url of main project>
cd <directory of main project>
git submodule update -init --recursive
```

### Editing a submodule and committing a modification

```bash
cd <directory of sub project>
git checkout -b <your branch name>

# Execute the modification...

git commit
git push origin <server branch>
```

### Updating a Third-Party Library

```bash
cd <directory of third-party library>
git checkout vendor
git pull 
git checkout -b phantom_merge
git merge -s ours master -m phantom_merge
git checkout master
git merge --ff-only phantom_merge
git branch -D phantom_merge
git cherry-pick 924989v# etc...

# Test...

git push origin master:master
```

### Contributing with changes in a Third-Party Repository

```bash
cd <directory of third-party>

# Execute desired changes...

git commit
git checkout vendor
git merge --ff-only origin/vendor
git checkout -b my_change
git cherry-pick 293h39
git push <git url>:my_change:my_change

# Use Github to execute a pull request
```

### Removing Submodule

```bash
# Remove the submodule entry from .git/config
git submodule deinit -f path/to/submodule

# Remove the submodule directory from the superproject's .git/modules directory
rm -rf .git/modules/path/to/submodule

# Remove the entry in .gitmodules and remove the submodule directory located at path/to/submodule
git rm -f path/to/submodule
```

### Updating the main project automatically when a submodule passes on the continuous integration build

```bash
#TODO(Roger)
```

### Working with GitHub cron jobs

```bash
#TODO(Roger)
```

### Ignoring directories and files

```bash
cd <project_folder>
touch -a .gitignore

# Edit .gitignore adding folders and files that should be ignored. 
```

Git ignore examples

```.gitignore
# Ignore version.h in the include folder
/include/version.h

# Ignore temp folder
/temp

# Ignote all stage folders
**/stage

# Ignore all .vs folders
**/.vs

# ignore all files under build folder but the specific extensions and files
**/build/** 
!**/build/*.sh
!**/build/*.bat
!**/build/*.cmake
!**/build/*.in
!**/build/DockerFile
```

### Transferring local commits without a server

All local changes you execute on git is stored on the _.git_ folder. You can copy this folder between same git projects located on different git repositories. In this way you can for example continue your work on different computers. To transfer the content, please follow the sequence below:

- Copy the full content of your _.git_ source folder to a temp location.
- Remove the _.git_ your destination folder. Note: All your changes on that folder will be lost. So if you have pending check-ins publish it.
- Copy the content of your _git_ folder from your temp location to your destination folder.
- Use the command `git checkout HEAD` to ensure thal all your local files are updated with the information that is on the HEAD.

### Transferring Git repository to another server

Moving Git repository content to another repository preserving history

```bash
cd <target_repository>
git checkout master
git remote add <temp_branch_name> <repository_url>
git fetch <temp_branch_name>
git merge <temp_branch_name>/master --allow-unrelated-histories
git remote rm <temp_branch_name>
```

### Solving detached HEAD

```bash
git branch temp
git checkout master
git merge temp
git branch -d temp
```

### Merging branches

The example below merge the test branch into the master branch

```shell
git checkout master
git pull origin master
git merge test
git push origin master
```

The example below merge the test branch into the master branch in a single new commit.

```shell
git checkout master
git pull origin master
git merge --squash test
git commit -m "New commit message"
git push origin master
```

### Creating new remote branch

```shell
git checkout -b dev
git push origin dev
git branch --set-upstream-to=origin/dev dev
```

### Install - Getting the latest git version on Ubuntu

```bash
# Add the PPA to the local package index
add-apt-repository ppa:git-core/ppa
apt-get update

# Install Git
sudo apt-get install git
```

### Submodule - Fix a submodule being tracked as folder

```bash
# Open the .gitmodules files and get the submodule information

# Add the missing submodule
git submodule add <url> <path>
```

### Git - Get a list of modified files 

```bash
# Get a list of modified / added files
git ls-files -mo
```

### Git - Branch - Push a new branch to remote and track it

```bash
# Create a new branch 
git checkout -b <new_branch_name>

# Push your branch to the remote repository:
git push -u origin <new_branch_name>
```

### Git - Branch - Track Remote Branch 

```bash
# Make the local branch track the remote branch 
git branch -u origin/<remote_branch_name>
```

