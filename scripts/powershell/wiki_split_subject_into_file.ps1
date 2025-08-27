# Split a Markdown file by level two headings (##) into separate files.
#
# Features:
#   - For each level two heading (e.g., ## Purpose), creates a new Markdown file named after the section (e.g., temp_purpose.md).
#   - Promotes all heading levels by one in the new file (## becomes #, ### becomes ##, etc.).
#   - Replaces the original section content with a note and a link to the new file.
#   - If the output file already exists, appends a timestamp (_YYMMDDHHmmSS) to the filename to avoid overwriting.
#   - Optionally, if the -TargetLine parameter is provided, only the section containing that line number is split and replaced; all other sections remain unchanged.
#
# Usage:
#   .\wiki_split_subject_into_file.ps1 -InputFile <input.md> -OutputDir <output-directory>
#   .\wiki_split_subject_into_file.ps1 -InputFile <input.md> -OutputDir <output-directory> -TargetLine <line-number>
#
# Parameters:
#   -InputFile   : Path to the input Markdown file.
#   -OutputDir   : Directory where the split files will be created.
#   -TargetLine  : (Optional) Only split the section containing this 1-based line number.

param(
    [Parameter(Mandatory=$true)]
    [string]$InputFile,
    [Parameter(Mandatory=$true)]
    [string]$OutputDir,
    [int]$TargetLine
)

if (!(Test-Path $InputFile)) {
    Write-Error "Input file not found: $InputFile"
    exit 1
}

if (!(Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

# Read all lines
$lines = Get-Content $InputFile

$sections = @()
$currentSection = $null

foreach ($l in $lines) {
    if ($l -match '^##\s+(.+)$') {
        # Start of a new section
        if ($null -ne $currentSection) {
            $sections += ,$currentSection
        }
        $title = $Matches[1].Trim()
        $currentSection = @{ Title = $title; Content = @() }
        $currentSection.Content += $l
    } elseif ($null -ne $currentSection) {
        $currentSection.Content += $l
    }
}
if ($null -ne $currentSection) {
    $sections += ,$currentSection
}

# If -TargetLine is provided, determine which section contains that line
$sectionIndexes = @()
for ($idx = 0; $idx -lt $lines.Count; $idx++) {
    if ($lines[$idx] -match '^##\s+(.+)$') {
        $sectionIndexes += $idx
    }
}

$splitSections = $sections
if ($PSBoundParameters.ContainsKey('TargetLine')) {
    $targetSection = $null
    for ($i = 0; $i -lt $sectionIndexes.Count; $i++) {
        $start = $sectionIndexes[$i]
        $end = if ($i + 1 -lt $sectionIndexes.Count) { $sectionIndexes[$i+1] } else { $lines.Count }
        if (($TargetLine-1) -ge $start -and ($TargetLine-1) -lt $end) {
            $targetSection = $sections[$i]
            break
        }
    }
    if ($null -ne $targetSection) {
        $splitSections = @($targetSection)
    } else {
        Write-Error "No section found containing line $TargetLine."
        exit 1
    }
}

foreach ($section in $splitSections) {
    $title = $section.Title
    $inputBase = [System.IO.Path]::GetFileNameWithoutExtension($InputFile)
    # Clean up the title for the filename: replace non-alphanum with _, then trim _ from start/end, and replace multiple _ with single _
    $cleanTitle = ($title -replace '[^a-zA-Z0-9]+', '_').Trim('_') -replace '_+', '_'
    $filenameBase = ($inputBase + '_' + $cleanTitle).ToLower()
    $filename = $filenameBase + '.md'
    $filepath = Join-Path $OutputDir $filename
    if (Test-Path $filepath) {
        $timestamp = Get-Date -Format 'yyMMddHHmmss'
        $filename = "$filenameBase" + "_" + $timestamp + ".md"
        $filepath = Join-Path $OutputDir $filename
    }
    $content = $section.Content | ForEach-Object {
        # Promote all headings by one level: ## -> #, ### -> ##, etc.
        if ($_ -match '^(#+)(\s+)') {
            $level = $Matches[1].Length
            if ($level -ge 2) {
                return ('#' * ($level - 1)) + $Matches[2] + $_.Substring($level + $Matches[2].Length - 1)
            }
        }
        return $_
    }
    Set-Content -Path $filepath -Value $content -Encoding UTF8
    Write-Host "Created: $filepath"
}

# After splitting, add notes to the original file below each section header
$inputBase = [System.IO.Path]::GetFileNameWithoutExtension($InputFile)
$sectionTitles = $splitSections | ForEach-Object { $_.Title }
$sectionTitleToFile = @{}
foreach ($section in $splitSections) {
    $title = $section.Title
    $cleanTitle = ($title -replace '[^a-zA-Z0-9]+', '_').Trim('_') -replace '_+', '_'
    $filenameBase = ($inputBase + '_' + $cleanTitle).ToLower()
    $filename = $filenameBase + '.md'
    $filepath = Join-Path $OutputDir $filename
    if (Test-Path $filepath) {
        $timestamp = Get-Date -Format 'yyMMddHHmmss'
        $filename = "$filenameBase" + "_" + $timestamp + ".md"
    }
    $sectionTitleToFile[$title] = $filename
}

$relativeOutputDir = $OutputDir
if ($relativeOutputDir -like '.\\' -or $relativeOutputDir -like './') {
    $relativeOutputDir = $relativeOutputDir.Substring(2)
}
$relativeOutputDir = $relativeOutputDir.TrimEnd(@('/','\'))

$newLines = @()
$linesCount = $lines.Count
$i = 0
while ($i -lt $linesCount) {
    $l = $lines[$i]
    if ($l -match '^##\s+(.+)$') {
        $title = $Matches[1].Trim()
        $newLines += $l
        if ($sectionTitleToFile.ContainsKey($title)) {
            $filename = $sectionTitleToFile[$title]
            if ($relativeOutputDir) {
                $link = "./$relativeOutputDir/$filename"
            } else {
                $link = "./$filename"
            }
            $link = $link -replace '/+','/' -replace '\\+','/'
            $link = $link -replace '^\./\./','./'  # Remove double leading ./
            $note = "> For the content of this session please go to [$title]($link)"
            $newLines += $note
        }
        # Skip all lines until the next section or end of file if this section was split, else keep content
        $skip = $sectionTitleToFile.ContainsKey($title)
        $i++
        while ($i -lt $linesCount -and $lines[$i] -notmatch '^##\s+') {
            if (-not $skip) { $newLines += $lines[$i] }
            $i++
        }
        continue
    }
    $newLines += $l
    $i++
}
Set-Content -Path $InputFile -Value $newLines -Encoding UTF8
