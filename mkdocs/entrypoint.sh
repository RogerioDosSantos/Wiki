#!/bin/sh
# Start crond in the background
crond
# Start mkdocs server
mkdocs serve -a 0.0.0.0:8000
