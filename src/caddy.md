# Caddy Reverse Proxy

[Caddy](https://caddyserver.com/) is a modern, open-source web server and reverse proxy known for its automatic HTTPS, ease of use, and powerful configuration. It is suitable for serving static files, acting as a reverse proxy for web applications, and providing TLS termination with minimal configuration.

## Key Features

- **Automatic HTTPS**: Caddy automatically provisions and renews SSL certificates using Let's Encrypt.
- **Simple Configuration**: Uses a straightforward Caddyfile for configuration.
- **Reverse Proxy**: Easily proxy traffic to backend services (HTTP, HTTPS, FastCGI, etc.).
- **Extensible**: Supports plugins for additional features.
- **Cross-platform**: Runs on Windows, Linux, macOS, and more.
- **Zero-downtime reloads**: Configuration changes can be applied without downtime.

## Installation

The easiest way to install Caddy is via [webi.sh](https://webi.sh/caddy):

```sh
curl -sS https://webi.sh/caddy | sh
```

Or see the [official download page](https://caddyserver.com/download) for other methods.

## Basic Usage

### Start a Static File Server

```sh
caddy file-server --listen :8080
```

### Simple Reverse Proxy Example

Create a `Caddyfile`:

```Caddyfile
example.com {
  reverse_proxy localhost:5000
}
```

Start Caddy:

```sh
caddy run
```

### Automatic HTTPS for Local Development

Caddy can serve local sites with HTTPS using its built-in certificate authority:

```Caddyfile
localhost {
  reverse_proxy localhost:3000
}
```

## User Cases Examples

### Add Coddy in your Docker Project Image and load it though an entrypoint script

```Dockerfile
# Build Linux

## Build
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /workspace

### Compile Project (my_project_src)
COPY ./my_project_src /workspace/my_project_src
COPY ./my_project.sln /workspace/my_project.sln
RUN echo "*** Compile Project" \
  && cd /workspace \
  && dotnet restore \
  && dotnet publish -c Release -o /workspace/stage/my_project_src \
  && echo "*** Compile Project - DONE" 

## Release
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS my_project_src
WORKDIR /workspace

### Install Python 
RUN echo "*** Install Python" \
  && apt-get update \
  && apt-get install -y \
        python3 \
        python3-pip \
        vim \
  && echo "*** Install Python - DONE" 
RUN echo "*** Install Python Packages" \
  && python3 -m pip install --upgrade pip \
  && python3 -m pip install --upgrade Pillow \
  && python3 -m pip install --upgrade \
        moviepy \
        wave \
        vosk \
  && echo "*** Install Python Packages - DONE" 

### Install Reverse Proxy 
RUN echo "*** Install Caddy" \
  && apt-get update \
  && apt-get install -y \
        curl \
  && curl -sS https://webi.sh/caddy | sh \
  # && source ~/.config/envman/PATH.env \
  && echo "*** Install Caddy - DONE" 
# ENV PROXY_FROM=localhost
ENV PROXY_FROM=my_project_src.centralus.azurecontainer.io

### Install Release 
COPY ./build/entrypoint.sh /workspace/entrypoint.sh
COPY --from=build /workspace/stage/my_project_src /workspace
COPY --from=build /workspace/stage/my_project_src/appsettings.json /workspace/appsettings.json
ENTRYPOINT ["bash", "/workspace/entrypoint.sh"]
ENV ASPNETCORE_URLS=http://+:8080
ENV DOTNET_RUNNING_IN_CONTAINER=true
ENV NUGET_XMLDOC_MODE=skip
EXPOSE 80
EXPOSE 443
```

```bash
# !/bin/bash

echo "################################"
echo "##### AI Auto Video Editor #####"
echo "################################"
echo ""
echo "- Starting Reverse Proxy"
echo "-- Serving URL: $PROXY_FROM"
/root/.local/bin/caddy reverse-proxy --from $PROXY_FROM --to localhost:8080 &
echo "- Starting Service"
/workspace/AutoVideoEditor.Server 
echo "################################"
```

## Where to Find the Caddyfile in the Caddy Docker Image

The official Caddy Docker image expects the Caddyfile to be located at:

```
/etc/caddy/Caddyfile
```

- You can mount your custom Caddyfile to this location using a Docker volume:
  ```sh
  docker run -v $(pwd)/Caddyfile:/etc/caddy/Caddyfile caddy
  ```
- By default, if no Caddyfile is provided, Caddy will use its built-in default configuration.
- For Kubernetes, mount your Caddyfile ConfigMap to `/etc/caddy/Caddyfile` in the container.

> ?? **Tip:** Always check the [official Caddy Docker documentation](https://hub.docker.com/_/caddy) for the latest best practices.

## Useful Links

- [Caddy Official Website](https://caddyserver.com/)
- [Caddy Documentation](https://caddyserver.com/docs/)
- [Caddy GitHub Repository](https://github.com/caddyserver/caddy)
- [webi.sh Caddy Installer](https://webi.sh/caddy)

## See Also

- [NGINX](./nginx.md)
- [Traefik](./traefik.md)
- [Docker](./docker.md)
- [Container Security](./container_security.md)
