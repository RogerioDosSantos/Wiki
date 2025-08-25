# Git TFS #

git-tfs is a two-way bridge between TFS (Team Foundation Server) and git, similar to git-svn. It fetches TFS commits into a git repository, and lets you push your updates back to TFS.

Project url: https://github.com/git-tfs/git-tfs

## Commands ##


`git tfs list-remote-branches <collection url>` : Find a TFS repository path to clone (E.g.: `git tfs list-remote-branches http://tfs:8080/tfs/DefaultCollection`)

`git tfs clone <collection url> <tfs folder to clone>` : clone a folder (E.g.: `git tfs clone http://tfs:8080/tfs/DefaultCollection $/some_project`). It is slow since all changesets is on it.

`git tfs quick-clone <collection url> <tfs folder to clone>` : clone a folder (E.g.: `git tfs clone http://tfs:8080/tfs/DefaultCollection $/some_project`). It is fast since only the last changeset is on it

`git tfs checkin --work-item=<work item 1>:<work item 2>` : Commit a change informing the Work Item.

`git tfs shelve <shelve name>` : Shelve the changes 
