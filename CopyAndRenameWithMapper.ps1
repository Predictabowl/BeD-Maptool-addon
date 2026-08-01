param(
    [Parameter(Mandatory=$true, HelpMessage="Source folder path (relative or absolute)")]
    [string]$SourceFolder,
    
    [Parameter(Mandatory=$true, HelpMessage="Destination folder path (relative or absolute)")]
    [string]$DestinationFolder,
    
    [Parameter(Mandatory=$true, HelpMessage="Mapper file path with format: <actual_name> => <new_name>")]
    [string]$MapperFile
)

# Get script directory for relative paths
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Resolve paths (handle both relative and absolute paths)
if (-not [System.IO.Path]::IsPathRooted($SourceFolder)) {
    $SourceFolder = Join-Path $scriptDir $SourceFolder
}
if (-not [System.IO.Path]::IsPathRooted($DestinationFolder)) {
    $DestinationFolder = Join-Path $scriptDir $DestinationFolder
}
if (-not [System.IO.Path]::IsPathRooted($MapperFile)) {
    $MapperFile = Join-Path $scriptDir $MapperFile
}

# Validate paths
if (-not (Test-Path $SourceFolder)) {
    Write-Error "Source folder not found: $SourceFolder"
    exit 1
}

if (-not (Test-Path $MapperFile)) {
    Write-Error "Mapper file not found: $MapperFile"
    exit 1
}

# Create destination folder if it doesn't exist
if (-not (Test-Path $DestinationFolder)) {
    New-Item -ItemType Directory -Path $DestinationFolder -Force | Out-Null
    Write-Host "Created destination folder: $DestinationFolder"
}

# Parse mapper file
$mappings = @{}
$mapperContent = Get-Content $MapperFile
foreach ($line in $mapperContent) {
    $line = $line.Trim()
    if ($line -and $line -match '(.+)\s*=>\s*(.+)') {
        $originalName = $matches[1].Trim()
        $newName = $matches[2].Trim()
        $mappings[$originalName] = $newName
    }
}

Write-Host "Parsed $($mappings.Count) mappings from mapper file"
Write-Host ""
Write-Host "Source folder: $SourceFolder"
Write-Host "Destination folder: $DestinationFolder"
Write-Host ""

# Get all files from source folder
$sourceFiles = Get-ChildItem -Path $SourceFolder -File
Write-Host "Found $($sourceFiles.Count) files in source folder"
Write-Host ""

$copyCount = 0
$skipCount = 0
$notFoundCount = 0

foreach ($file in $sourceFiles) {
    $fileName = $file.Name
    
    # Check if file has a mapping
    if ($mappings.ContainsKey($fileName)) {
        $newFileName = $mappings[$fileName]
        
        # Preserve original extension if new name doesn't have one
        if (-not [System.IO.Path]::HasExtension($newFileName)) {
            $extension = [System.IO.Path]::GetExtension($fileName)
            $newFileName = $newFileName + $extension
        }
        
        $sourcePath = $file.FullName
        $destPath = Join-Path $DestinationFolder $newFileName
        
        try {
            Copy-Item -Path $sourcePath -Destination $destPath -Force
            $copyCount++
            Write-Host "[OK] Copied: $fileName => $newFileName"
        }
        catch {
            Write-Warning "Failed to copy $fileName to $newFileName : $_"
        }
    }
    else {
        $skipCount++
        Write-Host "[--] No mapping found: $fileName"
    }
}

Write-Host ""
Write-Host "=== Summary ==="
Write-Host "Files copied: $copyCount"
Write-Host "Files skipped (no mapping): $skipCount"
Write-Host "Total processed: $($copyCount + $skipCount)"
Write-Host ""
Write-Host "Operation complete!"
