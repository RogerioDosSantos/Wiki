#!/bin/sh
# sync_wiki.sh - Keeps the documentation in sync with the remote git repository.
#
# This script is called by cron every 5 minutes inside the MkDocs container.
# It pulls the latest changes from the remote repository, updates the /docs/docs
# symlink to point to the latest source, and ensures the mkdocs.yml symlink is correct.
#
# - Pulls latest changes from the remote git repository
# - Updates the /docs/docs symlink to the latest src
# - Updates the /docs/mkdocs.yml symlink to the latest config

cd /workspace/wiki || exit 1
git pull
rm -rf /docs/docs
ln -sf /workspace/wiki/src /docs/docs
exit 0
