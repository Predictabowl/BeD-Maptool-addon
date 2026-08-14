@echo off
echo =========================================
echo       .mtlib Archive Builder (addon)
echo =========================================

:: Fixed folder name - must sit in the same directory as this script
set "SOURCE_DIR=%~dp0addon"
set "TEMP_ZIP=%~dp0addon_temp.zip"
set "FINAL_FILE=%~dp0addon.mtlib"

if not exist "%SOURCE_DIR%" (
    echo [ERROR] Folder "addon" not found next to this script!
    echo Expected: "%SOURCE_DIR%"
    echo.
    pause
    exit /b
)

:: Remove any leftover temp zip / final file from a previous run
if exist "%TEMP_ZIP%" del /f /q "%TEMP_ZIP%"
if exist "%FINAL_FILE%" del /f /q "%FINAL_FILE%"

echo [1/2] Compressing contents of "addon"...
:: Using tar.exe (bsdtar, built into Windows 10/11) instead of
:: PowerShell's Compress-Archive. bsdtar writes zip entries with
:: forward-slash (/) separators, which strict readers like MapTool's
:: Java-based zip parser require.
::
:: -C changes into SOURCE_DIR first so paths inside the archive are
:: relative to it. We archive "*" (not ".") -- "." archives the
:: directory-dot itself, which prefixes every entry with "./"
:: (e.g. "./library.json") and confuses MapTool's reader just as
:: badly as backslashes did. "*" expands to the actual file/folder
:: names, so entries come out clean: "library.json", "library/...".
pushd "%SOURCE_DIR%"
tar.exe -c -f "%TEMP_ZIP%" --format=zip *
popd

if not exist "%TEMP_ZIP%" (
    echo.
    echo [ERROR] Compression failed - no zip was created. Aborting.
    echo.
    pause
    exit /b
)

echo [2/2] Converting to .mtlib format...
move /y "%TEMP_ZIP%" "%FINAL_FILE%" >nul

echo.
echo SUCCESS! Created: "%FINAL_FILE%"
echo.
timeout /t 2 >nul