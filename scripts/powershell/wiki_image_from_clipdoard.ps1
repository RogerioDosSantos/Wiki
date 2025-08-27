param(
    [Parameter(Mandatory=$true)]
    [string]$imagePath
)

# This script saves an image from the clipboard to a specified path in the wiki resources directory.

Write-Host "Input imagePath: $imagePath"

# Always resolve paths relative to the script's directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
if ([System.IO.Path]::IsPathRooted($imagePath)) {
    $resolvedImagePath = $imagePath
} else {
    $resolvedImagePath = Join-Path $scriptDir $imagePath
}
$targetDir = Split-Path -Parent $resolvedImagePath

if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
}

$basePath = $resolvedImagePath
if (Test-Path $basePath) {
    $timestamp = Get-Date -Format "yyMMddHHmmss"
    $fileName = [System.IO.Path]::GetFileNameWithoutExtension($basePath)
    $ext = [System.IO.Path]::GetExtension($basePath)
    $basePath = Join-Path $targetDir ("${fileName}_$timestamp$ext")
}

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$img = [Windows.Forms.Clipboard]::GetImage()
if ($img -ne $null) {
    $img.Save($basePath, [System.Drawing.Imaging.ImageFormat]::Png)
    # Output the markdown image path
    if (Test-Path $basePath) {
        # Find the index of 'resources' in the path and build the relative path from there, always use forward slashes
        $idx = $basePath.ToLower().IndexOf('resources')
        if ($idx -ge 0) {
            $relativePath = './' + $basePath.Substring($idx)
        } else {
            $relativePath = $basePath.Substring($scriptDir.Length).TrimStart('\\','/')
            if (-not $relativePath.StartsWith("./")) {
                $relativePath = "./" + $relativePath
            }
        }
        $relativePath = $relativePath -replace '\\','/' 
        $markdownImage = "![]($relativePath)"
        Write-Output $markdownImage
        # Copy the markdown image path to the clipboard
        [Windows.Forms.Clipboard]::SetText($markdownImage)
    }
} else {
    Write-Error "Clipboard does not contain an image."
}