# Keycloak 

[Keycloak](https://www.keycloak.org/) is an Open Source Identity and Access Management

It allow to add authentication to applications and secure services with minimum fuss.

## How-to 

### Use it in a docker container 

Below is a [docker compose](https://docs.docker.com/compose/) configuration that allow you execute the *Keycloak Identity Server* locally in your machine:

- Create the *docker-compose.yaml* file:

```yaml
version: "3"
services:
  # http://localhost:8001
  oidc_server:
    image: "jboss/keycloak:6.0.1"
    environment:
      - KEYCLOAK_SERVER=http://oidc_server:8080
      - KEYCLOAK_USER=user
      - KEYCLOAK_PASSWORD=password
    stdin_open: true
    tty: true
    ports:
      - "8001:8080"
```

- Run it:

```sh
docker compose up -d
```

- Access the [http://localhost:8001](http://localhost:8001) URL:

![](http://tinyurl.com/y3xenlzq)


