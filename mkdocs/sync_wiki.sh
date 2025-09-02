#!/bin/sh
# sync_wiki.sh - Keeps the documentation in sync with the remote git repository.
#
# This script is called by cron every 5 minutes inside the MkDocs container.
# It checks for remote changes and only pulls if there are updates, then updates the /docs/docs
# symlink to point to the latest source.
#
# - Checks for remote changes
# - Pulls latest changes from the remote git repository if needed
# - Updates the /docs/docs symlink to the latest src
# - Prints a message with timestamp and commit id when pulling

cd /workspace/wiki || exit 1
# Fetch remote changes
if git fetch --quiet && ! git diff --quiet HEAD..origin/$(git rev-parse --abbrev-ref HEAD); then
  NOW=$(date '+%Y-%m-%d %H:%M:%S')
  echo "[$NOW][sync_wiki.sh] Pulling latest documentation..."
  git pull
  COMMIT_ID=$(git rev-parse HEAD)
  echo "[$NOW][sync_wiki.sh] Updated to commit $COMMIT_ID"
fi
exit 0
