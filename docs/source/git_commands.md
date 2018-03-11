# Git #

Origin (Server) >> master (Work branch) >> Header (Local commits) >> tracked (files added) >> untracked (any change)

`git config --global user.email <your e-mail> ` : config your e-mail account globally

`git config --global user.name <your name> ` : config your name globally

`git  init ` : Initialize git repository. To init the repository on the server, use the option --bare

`git add <folder> ` : add content to the git repository

`git diff --cached --name-status ` : Get the list of the git files added

`git diff HEAD <file name> ` : Compare the file with the one added.

`git commit -m <check-in description> ` : send the content to the git repository

`git config --list ` : List the current git configuration

`git clone <repository git url> <local folder name> ` : Clone git repository (E.g.: git clone ssh://git@192.168.56.113/~/git-server/leel.git)

`git status ` : Show the current status of the git repository

`git push ` : Push the changed to the server

`git config --global credential.helper "cache --timeout=3600" ` : configure to cache your credentials for a specific amount of time.

`git stash` : Get the information from server replacing the information of existing files with the server content. NO MERGE

`git checkout -- <filename>` : Discard added changed for a file

`git fetch origin` : Sync local origin with the remote server 

`git reset [--hard] origin/master` : Discard all local committed changes. If --hard is used all changes are lost. If --hard is not used all changed files will be on the untracked stage.

`git checkout -b <branch>` : Create local branch

`git branch -d <branch>` : Remove local branch

`git checkout <branch>` : Go to the branch

`git checkout -`: Go to the latest commit on that branch.

`git pull` : Update local repository with the newest commit

`git merge <another branch` : Merge another branch into your active branch. The merged files will be on the untracked stage

`git show-branch` : Show the available branches

`git rm <file name>` : Remove git file or directory

`git reset --hard` : Undo a change that was added but not commit yet

`git reset --hard origin/master` : Undo all changes and commits. Your code will be equivalent to the server.

`git checkout HEAD -- <file>` : Reset the file with its original value
  
`git clean -fd` : Remove untracked files.

`git rev-parse [--short] HEAD` : Display the HEAD id. Use short for the short version.

## History ##

`git blame` : Allow you to check the file chain history (Similar to VS annotate)

`git diff <source branch> <target branch>` : Preview the branch differences. 

`git remote show origin`: Show the URL a git repository is cloned from.

## Submodules: ##

`git submodule add <repository url> ` : Add a submodule into a git project.

`git submodule add -b <branch> <repository url> ` : Add a submodule that tracks a branch

`git submodule init ` : Initialize the submodule configuration. You should run it after you clone the project with submodule on it.

`git submodule update` : Get the content of all submodules.

`git checkout <branch or label> ` : Checkout a branch to allow edition on it. IMPORTANT: If you are checkingout a lebel, you will not be allowed to modify it. Execute the command below to put the lable in another branch

`git checkout -b <new branch> <branch or label> ` : Create a new Branch for the Branch or label checked out.

`git status --ignore-submodules=dirty ` : Ignore the dirty feature that slow down the command in case you have submodules with a lot of files. You can also change the ".gitmodules" files to add the following entry in a submodule you want to ignore: ignore ## dirty

`git config --global --edit` : Edit the global configuration

### Submodules Workflow ###

#### Initial Checkpoint ####

- git clone <url of main project>
- cd <directory of main project>
- git submodule update -init
- git submodule foreach git checkout master

#### Commit a modification ####

- cd <directory of sub project>
- git checkout -b <your branch name>
- Execute the modification
- git commit
- git push origin <server branch>

#### Updated Third-Party Library ####

- cd <directory of third-party library>
- git checkout vendor
- git pull 
- git checkout -b phantom_merge
- git merge -s ours master -m phantom_merge
- git checkout master
- git merge --ff-only phantom_merge
- git branch -D phantom_merge
- git cherry-pick 924989v# etc...
- Test
- git push origin master:master

#### Modification to Third-Party Repository ####

- cd <directory of third-party>
- Make changes
- git commit
- git checkout vendor
- git merge --ff-only origin/vendor
- git checkout -b my_change
- git cherry-pick 293h39
- git push <git url>:my_change:my_change
- Use Github to make pull request
  

TODO(Roger): Search on how to make the server to update the main project sub modules state point when after a check-in passed on the automated tests. This would be interesting for the development branch.

TODO(Roger): Search about cron jobs on GitHub

## Tags: ##

`git tag -l <pattern> ` : List the tags available. If <pattern> is nothing it will list all the tags

`git describe --tags ` : Inform in what tag you are on


## Ignore Directory ##

Create a file called .gitignore into your project folder and add all folders that should be ignored. 

## Initialize Repository ##

````
Create repository on Github
On Linux use the commands:
echo "# linux_environment" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin <repository .git url>
git push -u origin master
````

## Local commit manual transfer ##

All local changes you execute on git is stored on the _.git_ folder. You can copy this folder between same git projects located on different git repositories. In this way you can for example continue your work on different computers. To transfer the content, please follow the sequence below:

- Copy the full content of your _.git_ source folder to a temp location.
- Remove the _.git_ your destination folder. Note: All your changes on that folder will be lost. So if you have pending check-ins publish it.
- Copy the content of your _git_ folder from your temp location to your destination folder.
- Use the command `git checkout HEAD` to ensure thal all your local files are updated with the information that is on the HEAD.

## Transfer Git Repository ##


`git fetch origin` : Get the information from the server (History)

`git branch -a` : Show all branches. If you have a branch that is remote you need to get it on your computer using the command  `checkout`

`git checkout -b <local name> <remote name>` : Checkout a Branch. E.g.: `git checkout -b develop origin/develop`

`git remote add <name of remote> <remote url of an empty repository>` : The remote name can be any name. The remote URL should be created on the server bu not initialized, otherwise you will have an conflict error. E.g.: `git remote add new-origin git@github.com:manakor/manascope.git`

`git push --all <name of remote>` : Push all changes, include the history. It does not only push the tags information. E.g.: `git push --all new-origin`

`git push --tags <name of remote>` : Push the tags. E.g.: `git push --tags new-origin`

`git remote rm <name of the origin remote>` : Remove the remote name from the local repository. Note that `origin` is the default name. E.g.: `git remote rm origin` Note: To list the remotes available you can use the command `git remote show`

`git remote rename <name of the remote> <name of the origin remote>` : Rename the remote. E.g.: `git remote rename new-origin origin` Note: To list the remotes available you can use the command `git remote show`
t
