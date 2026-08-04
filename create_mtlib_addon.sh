#!/bin/bash
set -e

echo "========================================="
echo "      .mtlib Archive Builder (addon)"
echo "========================================="

# Fixed folder name - must sit in the same directory as this script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="$SCRIPT_DIR/addon"
TEMP_ZIP="$SCRIPT_DIR/addon_temp.zip"
FINAL_FILE="$SCRIPT_DIR/addon.mtlib"

if [ ! -d "$SOURCE_DIR" ]; then
    echo "[ERROR] Folder \"addon\" not found next to this script!"
    echo "Expected: $SOURCE_DIR"
    echo
    exit 1
fi

# Remove any leftover temp zip / final file from a previous run
rm -f "$TEMP_ZIP" "$FINAL_FILE"

echo "[1/2] Compressing contents of \"addon\"..."
# Using zip so entries use forward-slash separators, which strict
# readers like MapTool's Java-based zip parser require.
#
# We cd into SOURCE_DIR first so paths inside the archive are
# relative to it, then zip the contents directly (not the folder
# itself) so entries come out clean: "library.json", "library/...".
(
    cd "$SOURCE_DIR"
    zip -r -X "$TEMP_ZIP" . -x ".*"
)

if [ ! -f "$TEMP_ZIP" ]; then
    echo
    echo "[ERROR] Compression failed - no zip was created. Aborting."
    echo
    exit 1
fi

echo "[2/2] Converting to .mtlib format..."
mv -f "$TEMP_ZIP" "$FINAL_FILE"

echo
echo "SUCCESS! Created: $FINAL_FILE"
echo
