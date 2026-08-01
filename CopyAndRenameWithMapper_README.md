# CopyAndRenameWithMapper Script

A generalized PowerShell script to copy files from a source folder to a destination folder while renaming them according to a mapper file.

## Usage

```powershell
powershell -ExecutionPolicy Bypass -File ".\CopyAndRenameWithMapper.ps1" `
  -SourceFolder "path/to/source" `
  -DestinationFolder "path/to/destination" `
  -MapperFile "path/to/mapper.txt"
```

## Parameters

- **-SourceFolder** (required): Path to the source folder containing files to copy
  - Can be relative (from script location) or absolute
  - Example: `Basic\library\mtscript\public` or `c:\full\path\to\folder`

- **-DestinationFolder** (required): Path to the destination folder where files will be copied
  - Can be relative (from script location) or absolute
  - Will be created if it doesn't exist
  - Example: `addon\library\mtscript\public\core`

- **-MapperFile** (required): Path to the mapper file defining the file name mappings
  - Can be relative (from script location) or absolute
  - File format: `<original_name> => <new_name>` (one mapping per line)
  - Example: `Basic\macro_script_map.txt`

## Mapper File Format

The mapper file should contain lines with the following format:

```
original_filename.ext => new_filename.ext
macro_0.mts => setStati.mts
macro_1.mts => DannoTarget.mts
```

Or without extension (extension will be auto-detected):

```
macro_0.mts => setStati
macro_1.mts => DannoTarget
```

## Examples

### Example 1: Relative Paths (from B&D_addon folder)
```powershell
cd c:\Users\piero\Documents\Git_repos\B&D_addon
powershell -ExecutionPolicy Bypass -File ".\CopyAndRenameWithMapper.ps1" `
  -SourceFolder "c:\Users\piero\Documents\MEGAsync\B&D\B&D devs\MapTool Developer\Librerie\add-ons\Basic\library\mtscript\public" `
  -DestinationFolder "addon\library\mtscript\public\core" `
  -MapperFile "c:\Users\piero\Documents\MEGAsync\B&D\B&D devs\MapTool Developer\Librerie\add-ons\Basic\macro_script_map.txt"
```

### Example 2: Simplified (if paths are accessible from script directory)
```powershell
.\CopyAndRenameWithMapper.ps1 `
  -SourceFolder "..\..\MEGAsync\B&D\B&D devs\MapTool Developer\Librerie\add-ons\Basic\library\mtscript\public" `
  -DestinationFolder "addon\library\mtscript\public\core" `
  -MapperFile "..\..\MEGAsync\B&D\B&D devs\MapTool Developer\Librerie\add-ons\Basic\macro_script_map.txt"
```

## Output

The script provides detailed output showing:
- Number of mappings parsed from the mapper file
- Each file as it's copied with the format: `[OK] Copied: original_name => new_name`
- Files without mappings are shown as: `[--] No mapping found: filename`
- Summary with:
  - Total files copied
  - Files skipped (no mapping)
  - Total files processed

Example output:
```
Parsed 147 mappings from mapper file
Source folder: c:\path\to\source
Destination folder: c:\path\to\destination
Found 147 files in source folder

[OK] Copied: macro_0.mts => setStati.mts
[OK] Copied: macro_1.mts => DannoTarget.mts
...

=== Summary ===
Files copied: 147
Files skipped (no mapping): 0
Total processed: 147
Operation complete!
```

## Notes

- File extensions are automatically preserved if not specified in the mapper file's new name
- If destination folder doesn't exist, it will be created automatically
- Files are copied with `-Force` flag, so existing files will be overwritten
- The script validates that source folder and mapper file exist before processing
- Relative paths are resolved from the script directory location

## Requirements

- PowerShell 5.0 or higher (Windows 10+ or manually installed)
- Read access to source folder
- Write access to destination folder
- Read access to mapper file
