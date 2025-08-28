#!/bin/sh
# entrypoint.sh - Entrypoint script for the MkDocs container.
#
# This script starts the cron daemon in the background and then launches the MkDocs server.
# It ensures that documentation is served and kept up to date by the scheduled sync_wiki.sh script.
#
# - Starts crond for scheduled git pulls and doc updates
# - Starts the MkDocs development server on all interfaces (port 8000)

# Start crond in the background
crond
# Start mkdocs server
mkdocs serve -a 0.0.0.0:8000
