# Roger Santos Wiki

A personal and technical documentation 
This wiki covers a wide range of topics including programming, DevOps, tools, cloud, and more, and is designed for easy navigation, search, and contribution.
The main link to the wiki site created by this repo can be found at: [https://github.com/RogerioDosSantos/Wiki](https://github.com/RogerioDosSantos/Wiki)

## Purpose

- Organize and share knowledge on software development, tools, cloud, DevOps, and best practices
- Provide a searchable, browsable, and visually appealing documentation site
- Enable easy updates and contributions via Markdown and Git

## Quick Setup (For Local Development)

### 1. Build the Docker image

```sh
# Build the documentation Docker image
docker build -f mkdocs/build.docker -t mkdocs-wiki .
```

### 2. Run the container

```sh
# Run the documentation site locally
docker run -p 8001:8000 --name mkdocs-wiki mkdocs-wiki
```

- The site will be available at [http://localhost:8001](http://localhost:8001)
- The container will auto-update its content from the [GitHub repo (this repo)](https://github.com/RogerioDosSantos/Wiki.git) every 5 minutes

### 3. (Optional) Use Docker Compose

A `docker_compose.yaml` is provided for convenience:

```sh
# Start the documentation site with Docker Compose
docker compose -f mkdocs/docker_compose.yaml up
```

## Contributing

- Edit or add Markdown files in the repository
- Push your changes to GitHub
- The running container will auto-update and reflect your changes within 5 minutes

## Topics Covered

- Windows, Linux, Vim, DevOps, Containers, Programming Languages, Cloud, Security, and much more

---

## Wiki Utility Scripts

This repository includes several PowerShell scripts to help automate common tasks:

### wiki_image_from_clipdoard.ps1

Saves an image from the clipboard to a specified path in your documentation and outputs the corresponding Markdown image link.

- **Usage:**
  - Run via Visual Studio External Tools or directly in PowerShell.
  - Example External Tool Arguments:
    ```
    -ExecutionPolicy Bypass -File "C:\work\git\Wiki\wiki_image_from_clipdoard.ps1" -imagePath $(ItemDir)resources\$(ItemFileName)\$(ItemFileName)_line_$(CurLine).png
    ```
- **What it does:**
  - Saves the clipboard image to a path like `./src/resources/<filename>/<filename>_line_<line>.png`.
  - Outputs the Markdown image link and copies it to your clipboard.

### wiki_start.ps1

Starts the MKDocs documentation site using Docker Compose.

- **Usage:**
  - Run the script to build and start the documentation site in detached mode.
- **What it does:**
  - Changes to the `mkdocs` directory.
  - Runs `docker-compose -f docker_compose.yaml up -d` to start the site.
  - Shows the status of running containers and prints the access URL (`http://localhost:8000`).

### wiki_stop.ps1

Stops and removes the running MKDocs Docker container.

- **Usage:**
  - Run the script to stop and remove the documentation container.
- **What it does:**
  - Changes to the `mkdocs` directory.
  - Runs `docker-compose -f docker_compose.yaml down` to stop and remove the container.
  - Prints a confirmation message.

---

## Using Visual Studio External Tools to Run Clipboard Image Script

You can configure Visual Studio to run the `wiki_image_from_clipdoard.ps1` script as an External Tool. This allows you to quickly save clipboard images to your documentation directly from the IDE.

### Example External Tool Configuration

- **Title:** Save Clipboard Image to Wiki
- **Command:** `powershell.exe`
- **Arguments:** `-ExecutionPolicy Bypass -File "C:\work\git\Wiki\wiki_image_from_clipdoard.ps1" -imagePath $(ItemDir)resources\$(ItemFileName)\$(ItemFileName)_line_$(CurLine).png`
- **Initial Directory:** `$(ItemDir)`

#### Steps to Add the Tool

1. In Visual Studio, go to `Tools` > `External Tools...`.
2. Click `Add` and fill in the fields as above.
3. Click `OK` to save.

> ?? **Tip**: You can set a keyboard shortcut for this tool via `Tools` > `Options` > `Environment` > `Keyboard`. Search for `Tools.ExternalCommandN` (where N is the tool's order in the list) and assign your preferred shortcut.

#### What This Does

- The script will save the clipboard image to a path like `./src/resources/<filename>/<filename>_line_<line>.png` relative to your project.
- The script will output the correct Markdown image link and copy it to your clipboard for easy pasting into your documentation.

---

For more details, see the [documentation site itself](https://github.com/RogerioDosSantos/Wiki)!
