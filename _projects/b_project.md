---
layout: page
title: Chocolatey
description: A short tutorial on how to use Chocolatey to install, update, and manage Windows programs from the command line.
img: assets/img/project_covers/chocolatey.jpg
importance: 2
category: other
related_publications: false
---

Chocolatey is a developer-centric package manager that allows you to install and update Windows applications via the command line. It automates the installation process and ensures you always use the latest version from trusted sources.

## Why use Chocolatey?
- Downloads official versions of programs
- Handles updates automatically
- Easy batch install and setup for new machines
- Reduces time spent managing software manually

## Installing Chocolatey
Run the following in an elevated PowerShell window:

```powershell
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

See [official documentation](https://chocolatey.org/install).

## Installing software
Find packages at [community.chocolatey.org/packages](https://community.chocolatey.org/packages).

Example:
```powershell
choco install firefox
```

Multiple programs:
```powershell
choco install firefox atom notepadplusplus zotero
```

Disable desktop shortcut:
```powershell
choco install firefox --params "/NoDesktopShortcut"
```

## Batch install script example
```bat
:::::::::: Personal install script

:::: Install choco .exe and add choco to PATH
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

:::::: Cleans temp files once a week
choco install choco-cleaner -y

:::::: Browsers
choco install firefox -y
choco install googlechrome -y
choco install ungoogled-chromium -y

:::::: Text editors / IDEs
choco install atom -y
choco install notepadplusplus -y
choco install texstudio -y
choco install vscode --params "/NoDesktopIcon /NoContextMenuFiles /NoContextMenuFolders" -y
```

Full `.bat` script: [Chocolatey_myInstallScript.bat](/Chocolatey_myInstallScript.bat)

## Updating software
Check for updates:
```powershell
choco outdated
```

Upgrade one:
```powershell
choco upgrade firefox
```

Upgrade all:
```powershell
choco upgrade all
```

Freeze version:
```powershell
choco pin firefox
```

Skip update once:
```powershell
choco upgrade all --except="firefox"
```

## Other commands
List installed:
```powershell
choco list --local-only
```

Uninstall:
```powershell
choco uninstall firefox
```

## Clean cache
```powershell
choco install choco-cleaner
```

Removes old logs and residual files.

More: [Choco Cleaner](https://community.chocolatey.org/packages/choco-cleaner)
