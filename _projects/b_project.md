---
layout: page
title: Chocolatey
description: A short tutorial on how to use Chocolatey to install, update, and manage Windows programs from the command line.
img: assets/img/project_covers/chocolatey.jpg
importance: 2
category: other
related_publications: false
---

## What is Chocolatey?
Chocolatey is a developer-centric package manager that allows you to install and update Windows applications through a command line interface. Unlike manual installations, Chocolatey handles the process of adding, updating, and uninstalling programs in the background, requiring very little user interaction.

The project is community-driven, and the package feed is maintained by members of the Chocolatey community.

Most Chocolatey packages are designed to download an application's official executable and install it without further user interaction.

## Advantages?
* Chocolatey installs programs mainly from official sources, ensuring that you get the latest and most secure versions.
* It provides an easy 'one click' solution for downloading and updating software, with a vast selection of available and well-maintained programs.
* You still have control over the updating schedule, and there's no need to manually check for updates.

## How does it work?
1.	Install Chocolatey via PowerShell.
2.	Check the Chocolatey website for the programs you want to install. ([the website](https://community.chocolatey.org/packages))
3.	Install them via PowerShell
4.	Keep your programs up-to-date with Chocolatey & other maintenance tasks.


## Installing Chocolatey
Run the following in an elevated PowerShell window:

```powershell
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

See [official documentation](https://chocolatey.org/install).


## Find the programs you want to install
The [Chocolatey Website](https://community.chocolatey.org/packages) lists all available packages. For each package, you can find detailed information about the software, installation, update, and uninstallation commands.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/small_projects/choco1.png" title="chocolatey" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>


For example, if you want to install [Firefox](https://community.chocolatey.org/packages/Firefox#install), you can find the relevant commands and additional parameters available for the installation command - e.g. to create a taskbar shortcut, configure auto update, etc.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/small_projects/choco2.png" title="chocolatey" class="img-fluid rounded z-depth-1" %}
    </div>
</div>





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
