# Stop and remove the running MKDocs Docker container

# Ensure you are in the mkdocs directory
Push-Location "$(Join-Path $PSScriptRoot 'mkdocs')"

# Stop and remove the MKDocs container
docker-compose -f docker_compose.yaml down

# Print confirmation
Write-Host "\nThe MKDocs site has been stopped and the container removed.\n"

# Return to the original directory
Pop-Location
