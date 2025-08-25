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
docker build -f mkdocs/build.docker -t mkdocs-wiki .
```

### 2. Run the container

```sh
docker run -p 8001:8000 --name mkdocs-wiki mkdocs-wiki
```

- The site will be available at [http://localhost:8001](http://localhost:8001)
- The container will auto-update its content from the [GitHub repo (this repo)](https://github.com/RogerioDosSantos/Wiki.git) every 5 minutes

### 3. (Optional) Use Docker Compose

A `docker_compose.yaml` is provided for convenience:

```sh
docker compose -f mkdocs/docker_compose.yaml up
```

## Contributing

- Edit or add Markdown files in the repository
- Push your changes to GitHub
- The running container will auto-update and reflect your changes within 5 minutes

## Topics Covered

- Windows, Linux, Vim, DevOps, Containers, Programming Languages, Cloud, Security, and much more

---

For more details, see the [documentation site itself](https://github.com/RogerioDosSantos/Wiki)!
