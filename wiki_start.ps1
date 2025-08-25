# Start the MKDocs documentation site using Docker Compose

# Ensure you are in the mkdocs directory
Push-Location "$(Join-Path $PSScriptRoot 'mkdocs')"

# Build and start the MKDocs site in detached mode
docker-compose -f docker_compose.yaml up -d

# Show the status of the running containers
docker-compose -f docker_compose.yaml ps

# Print the access URL
Write-Host "\nThe MKDocs site should now be available at http://localhost:8000\n"

# Return to the original directory
Pop-Location
