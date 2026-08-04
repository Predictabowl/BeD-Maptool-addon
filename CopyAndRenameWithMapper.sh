#!/bin/bash

# Script to copy and rename files based on a mapper file
# Format: actual_name => new_name

# Check arguments
if [[ $# -lt 3 ]]; then
    echo "Usage: $0 <source_folder> <destination_folder> <mapper_file>"
    echo ""
    echo "Parameters:"
    echo "  source_folder:      Source folder path (relative or absolute)"
    echo "  destination_folder: Destination folder path (relative or absolute)"
    echo "  mapper_file:        Mapper file path with format: <actual_name> => <new_name>"
    exit 1
fi

SOURCE_FOLDER="$1"
DESTINATION_FOLDER="$2"
MAPPER_FILE="$3"

# Get script directory for relative paths
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Resolve paths (handle both relative and absolute paths)
if [[ ! "$SOURCE_FOLDER" = /* ]]; then
    SOURCE_FOLDER="$SCRIPT_DIR/$SOURCE_FOLDER"
fi
if [[ ! "$DESTINATION_FOLDER" = /* ]]; then
    DESTINATION_FOLDER="$SCRIPT_DIR/$DESTINATION_FOLDER"
fi
if [[ ! "$MAPPER_FILE" = /* ]]; then
    MAPPER_FILE="$SCRIPT_DIR/$MAPPER_FILE"
fi

# Validate paths
if [[ ! -d "$SOURCE_FOLDER" ]]; then
    echo "Error: Source folder not found: $SOURCE_FOLDER" >&2
    exit 1
fi

if [[ ! -f "$MAPPER_FILE" ]]; then
    echo "Error: Mapper file not found: $MAPPER_FILE" >&2
    exit 1
fi

# Create destination folder if it doesn't exist
if [[ ! -d "$DESTINATION_FOLDER" ]]; then
    mkdir -p "$DESTINATION_FOLDER"
    echo "Created destination folder: $DESTINATION_FOLDER"
fi

# Parse mapper file into associative array
declare -A mappings
mapping_count=0

while IFS= read -r line; do
    # Trim whitespace
    line=$(echo "$line" | xargs)
    
    # Skip empty lines and comments
    if [[ -z "$line" ]] || [[ "$line" =~ ^# ]]; then
        continue
    fi
    
    # Extract mappings with format: name => newname
    if [[ "$line" =~ ^(.+)[[:space:]]*=\>[[:space:]]*(.+)$ ]]; then
        original_name=$(echo "${BASH_REMATCH[1]}" | xargs)
        new_name=$(echo "${BASH_REMATCH[2]}" | xargs)
        mappings["$original_name"]="$new_name"
        ((mapping_count++))
    fi
done < "$MAPPER_FILE"

echo "Parsed $mapping_count mappings from mapper file"
echo ""
echo "Source folder: $SOURCE_FOLDER"
echo "Destination folder: $DESTINATION_FOLDER"
echo ""

# Count files in source folder
file_count=$(find "$SOURCE_FOLDER" -maxdepth 1 -type f | wc -l)
echo "Found $file_count files in source folder"
echo ""

copy_count=0
skip_count=0

# Process each file in source folder
while IFS= read -r file_path; do
    file_name=$(basename "$file_path")
    
    # Check if file has a mapping
    if [[ -v mappings["$file_name"] ]]; then
        new_file_name="${mappings[$file_name]}"
        
        # Preserve original extension if new name doesn't have one
        if [[ ! "$new_file_name" =~ \. ]]; then
            # Get extension from original file
            extension="${file_name##*.}"
            if [[ "$extension" != "$file_name" ]]; then
                new_file_name="$new_file_name.$extension"
            fi
        fi
        
        dest_path="$DESTINATION_FOLDER/$new_file_name"
        
        # Copy file
        if cp "$file_path" "$dest_path" 2>/dev/null; then
            ((copy_count++))
            echo "[OK] Copied: $file_name => $new_file_name"
        else
            echo "[!!] Failed to copy $file_name to $new_file_name" >&2
        fi
    else
        ((skip_count++))
        echo "[--] No mapping found: $file_name"
    fi
done < <(find "$SOURCE_FOLDER" -maxdepth 1 -type f)

echo ""
echo "=== Summary ==="
echo "Files copied: $copy_count"
echo "Files skipped (no mapping): $skip_count"
echo "Total processed: $((copy_count + skip_count))"
echo ""
echo "Operation complete!"
