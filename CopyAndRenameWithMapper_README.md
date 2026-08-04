# CopyAndRenameWithMapper - Usage Guide

Scripts to copy files from a source folder to a destination folder while renaming them according to a mapper file.

**Available versions:**
- `CopyAndRenameWithMapper.ps1` - PowerShell version (Windows)
- `CopyAndRenameWithMapper.sh` - Bash version (Linux/macOS)

Both scripts provide identical functionality with platform-specific syntax.

---

## Mapper File Format

The mapper file defines how files should be renamed. Both scripts use the same format.

### Syntax

```
original_filename => new_filename
```

### Rules

- **Whitespace handling**: Leading/trailing spaces around filenames and the `=>` operator are automatically trimmed
- **Empty lines**: Ignored
- **Comments**: Lines starting with `#` are ignored
- **Extension preservation**: If the new filename doesn't have an extension, the original file's extension is preserved automatically

### Example Mapper File

```
# Character sheet files
CharacterSheet.html => MyCharacter.html
NPC_Template.json => Villager_Base.json

# Ignore empty lines above and below

macro_0.mts => setStati.mts
macro_1.mts => DannoTarget.mts
```

---

## PowerShell Version

### Usage

```powershell
powershell -ExecutionPolicy Bypass -File ".\CopyAndRenameWithMapper.ps1" `
  -SourceFolder "path/to/source" `
  -DestinationFolder "path/to/destination" `
  -MapperFile "path/to/mapper.txt"
```

### Parameters

- **-SourceFolder** (required): Path to the source folder containing files to copy
  - Can be relative (from script location) or absolute
  - Example: `Basic\library\mtscript\public` or `c:\full\path\to\folder`

- **-DestinationFolder** (required): Path to the destination folder where files will be copied
  - Can be relative (from script location) or absolute
  - Will be created if it doesn't exist
  - Example: `addon\library\mtscript\public\core`

- **-MapperFile** (required): Path to the mapper file defining the file name mappings
  - Can be relative (from script location) or absolute
  - Example: `Basic\macro_script_map.txt`

### Examples

#### Example 1: Absolute Paths
```powershell
cd c:\Users\piero\Documents\Git_repos\B&D_addon
powershell -ExecutionPolicy Bypass -File ".\CopyAndRenameWithMapper.ps1" `
  -SourceFolder "c:\Users\piero\Documents\MEGAsync\B&D\B&D devs\MapTool Developer\Librerie\add-ons\Basic\library\mtscript\public" `
  -DestinationFolder "addon\library\mtscript\public\core" `
  -MapperFile "c:\Users\piero\Documents\MEGAsync\B&D\B&D devs\MapTool Developer\Librerie\add-ons\Basic\macro_script_map.txt"
```

#### Example 2: Relative Paths
```powershell
.\CopyAndRenameWithMapper.ps1 `
  -SourceFolder "..\..\MEGAsync\B&D\B&D devs\MapTool Developer\Librerie\add-ons\Basic\library\mtscript\public" `
  -DestinationFolder "addon\library\mtscript\public\core" `
  -MapperFile "..\..\MEGAsync\B&D\B&D devs\MapTool Developer\Librerie\add-ons\Basic\macro_script_map.txt"
```

### Requirements

- PowerShell 5.0 or higher (Windows 10+ or manually installed)
- Read access to source folder
- Write access to destination folder
- Read access to mapper file

---

## Bash Version

### Usage

```bash
./CopyAndRenameWithMapper.sh <source_folder> <destination_folder> <mapper_file>
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `source_folder` | Path to the folder containing files to copy (relative or absolute) |
| `destination_folder` | Path where renamed files will be copied to (relative or absolute) |
| `mapper_file` | Path to the file containing name mappings (relative or absolute) |

### Path Resolution

- **Relative paths** are resolved relative to the script's directory
- **Absolute paths** are used as-is

### Examples

#### Example 1: Basic Usage with Relative Paths
```bash
./CopyAndRenameWithMapper.sh ./source ./destination ./mapper.txt
```

#### Example 2: Using Absolute Paths
```bash
./CopyAndRenameWithMapper.sh /home/user/files /home/user/output /home/user/mappings.txt
```

#### Example 3: Mixed Paths
```bash
./CopyAndRenameWithMapper.sh ./source /var/output ../mappings.txt
```

### Requirements

- Bash 4.0 or higher (for associative array support)
- Standard Unix utilities: `find`, `cp`, `mkdir`, `basename`
- Read permissions on source folder and mapper file
- Write permissions on destination folder parent

### Making the Script Executable

```bash
chmod +x CopyAndRenameWithMapper.sh
```

---

## Output

Both scripts provide identical output:

### Status Messages

- **`[OK]`** - File successfully copied and renamed
- **`[--]`** - File skipped (no mapping found for this filename)
- **`[!!]`** - Error copying file

### Example Output

```
Parsed 147 mappings from mapper file

Source folder: /path/to/source
Destination folder: /path/to/destination

Found 147 files in source folder

[OK] Copied: macro_0.mts => setStati.mts
[OK] Copied: macro_1.mts => DannoTarget.mts
[--] No mapping found: README.md
...

=== Summary ===
Files copied: 146
Files skipped (no mapping): 1
Total processed: 147

Operation complete!
```

---

## Common Features

### Extension Preservation

Both scripts automatically preserve file extensions when the new name doesn't include one.

**Example:**
```
mapper.txt:
OldName => NewName

Source file: OldName.pdf
Result: NewName.pdf
```

If the new name already has an extension, it's used as-is:
```
mapper.txt:
file.txt => renamed.md

Source file: file.txt
Result: renamed.md (extension changed to .md)
```

### Destination Folder Creation

If the destination folder doesn't exist, it's created automatically with message:
```
Created destination folder: /path/to/destination
```

### Files Without Mappings

Files in the source folder that don't have a mapping are **skipped** and reported as:
```
[--] No mapping found: filename
```

This is intentional behavior to prevent unintended copying.

### Overwrite Behavior

Existing files with the same name in the destination are **overwritten** without prompting.

---

## Error Handling

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| `Source folder not found` | Path doesn't exist | Verify source folder path |
| `Mapper file not found` | Path doesn't exist | Verify mapper file path |
| `Failed to copy` (PowerShell) or `Failed to copy` (Bash) | Permission issues or disk space | Check folder permissions and disk space |
| Script won't execute (Bash) | Not executable | Run `chmod +x CopyAndRenameWithMapper.sh` |

### Exit Codes

- **`0`** - Success
- **`1`** - Missing arguments, invalid paths, or file not found

---

## Tips & Best Practices

1. **Test with a small set first**: Run the script with a few test files before processing many files
2. **Backup your files**: Create a backup before running on important data
3. **Verify your mapper file**: Double-check the syntax and content before running
4. **Use absolute paths for production**: More predictable than relative paths
5. **Add comments to mapper files**: Use `#` to document your mappings
6. **Check the summary**: Verify the summary matches your expectations before deleting originals

---

## Troubleshooting

### PowerShell: Script won't run

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Bash: Permission denied

```bash
chmod +x CopyAndRenameWithMapper.sh
```

### Bash: Mapper file not being parsed correctly

- Ensure the separator is ` => ` (space-dash-greater-than-space)
- Check for hidden characters: `cat -A mappings.txt`
- Verify line endings (especially if file was edited on Windows): `dos2unix mappings.txt`

### Paths not resolving correctly

- For PowerShell: Use absolute paths or verify relative paths from script directory
- For Bash: Use absolute paths or verify the script directory with `pwd`

---

## Integration Examples

### PowerShell in CI/CD

```powershell
$ErrorActionPreference = "Stop"
& ".\CopyAndRenameWithMapper.ps1" `
  -SourceFolder $env:SOURCE `
  -DestinationFolder $env:DEST `
  -MapperFile $env:MAPPER
Write-Host "File mapping completed successfully"
```

### Bash in CI/CD

```bash
#!/bin/bash
set -e  # Exit on first error
./CopyAndRenameWithMapper.sh "$SOURCE" "$DEST" "$MAPPER"
echo "File mapping completed successfully"
```
