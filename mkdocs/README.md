# MKDocs Wiki
---

## Introduction

This solution uses **MKDocs** with the **Material for MkDocs** theme and the **Mermaid2 plugin** to host and render the contents of the repository (by default, the entire parent folder) as a professional documentation site. 
The setup is containerized using Docker, making it easy to build, serve, and maintain the documentation locally or in any environment that supports Docker.

---

## Features

- **Material for MkDocs** theme for modern, responsive documentation
- **Mermaid2 plugin** for diagram and flowchart support
- **Live reload** for instant preview of changes
- **Docker Compose** for simple orchestration and repeatable builds
- **Volume mapping** for seamless editing of documentation files

---

## Folder Structure

| Folder/File         | Purpose                                      |
|--------------------|----------------------------------------------|
| `..`               | Default documentation source folder (entire repository) |
| `mkdocs.yml`       | MKDocs configuration file                    |
| `build.docker`     | Dockerfile for custom MKDocs image           |
| `docker_compose.yaml` | Docker Compose configuration               |
| `wiki.version`     | Semantic version of the wiki (used in image and logs) |

---

## Running the Documentation Site

> 📌 **Tip:** The site will be available at [http://localhost:8000](http://localhost:8000) after starting the container.

> ⚠️ **Important:** Make sure you are in the `mkdocs` directory (where `docker_compose.yaml` is located) before running the following commands.

> 💡 **Customizing the Documentation Folder:**
> By default, the documentation source folder is set to the main repository folder (`..`). You can change this to the `wiki` folder or any other folder you want to publish by editing the `volumes` section in [`docker_compose.yaml`](docker_compose.yaml). 
Adjust the left side of the mapping (before the colon) to point to your desired documentation folder.

### Start the Site (Detached Mode)

To build and start the documentation site in detached mode:

```shell
# Build and start the MKDocs site in detached mode
docker-compose -f docker_compose.yaml up -d
```

### Stop the Site

To stop and remove the running container:

```shell
# Stop and remove the MKDocs container
docker-compose -f docker_compose.yaml down
```

---

## Accessing the Wiki

Once the container is running, open your browser and navigate to:

[http://localhost:8001](http://localhost:8001)

---

## Checking the Wiki Version in the Container

You can verify the current wiki version inside the running container. This is useful for debugging, CI/CD, or ensuring the correct version is deployed.

### Using Docker

```sh
docker exec <container_name> cat /wiki.version
```
Replace `<container_name>` with the name of your running container (e.g., `rogersantos-wiki`).

### Using Kubernetes

```sh
kubectl exec -it <pod_name> -- cat /wiki.version
```
Replace `<pod_name>` with the name of your running pod.

> **Tip:** The wiki version is also logged at container startup if the `LOG_WIKI_VERSION` environment variable is set to `true`.

---

> ℹ️ **Note:** Any changes made to the documentation source folder (by default, the entire repository) or `mkdocs.yml` will be reflected live on the site.
