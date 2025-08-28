# Build and publish the wiki Docker image with semantic versioning

$versionFile = Join-Path $PSScriptRoot 'wiki.version'
if (!(Test-Path $versionFile)) {
    Write-Host "Version file not found, creating with 1.0.0"
    Set-Content $versionFile '1.0.0'
}

# Read current version
$currentVersion = Get-Content $versionFile | Select-Object -First 1
$versionParts = $currentVersion -split '\.'
$major = [int]$versionParts[0]
$minor = [int]$versionParts[1]
$patch = [int]$versionParts[2]

# Always increment patch version only
$patch++

$newVersion = "$major.$minor.$patch"
Set-Content $versionFile $newVersion
Write-Host "Building wiki image version $newVersion..."

# Build the Docker image with both version and latest tags using docker compose
$imgName = "rogersantos/wiki:$newVersion"
$imgLatest = "rogersantos/wiki:latest"

# Build using docker compose and custom Dockerfile
$composeFile = Join-Path $PSScriptRoot '..\..\mkdocs\docker_compose.yaml'
docker compose -f $composeFile build --build-arg BUILDKIT_INLINE_CACHE=1 --no-cache

# Tag the built image (docker compose build uses service name, so we need to tag it)
docker tag rogersantos/wiki:local $imgName
docker tag rogersantos/wiki:local $imgLatest

Write-Host "Image built and tagged as $imgName and $imgLatest"

# Push both tags to DockerHub
docker push $imgName
docker push $imgLatest

Write-Host "Images pushed to DockerHub as $imgName and $imgLatest"
