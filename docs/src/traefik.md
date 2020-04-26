# Traefik 

[Traefik](https://traefik.io/) is a reverse proxy / load balancer that's easy, dynamic, automatic, fast, full-featured, open source, production proven, provides metrics, and integrates with every major cluster technology.

## Architecture

![](http://tinyurl.com/y6s4obqe)

![](http://tinyurl.com/y3es3kve)


## How-to 

### Traefik - Docker Compose basic configuration

```docker-compose
version: "3"
services:
  blog:
    image: wordpress:4.7.5-apache
    environment:
      WORDPRESS_DB_PASSWORD:123
    labels:
      - traefik.backend=blog
      - traefik.frontend.rule=Host:blog.example.com
      - traefik.docker.network=proxy
      - traefik.port=80
    networks:
      - internal
      - proxy
    depends_on:
      - mysql
	mysql:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD:123
    networks:
      - internal
    labels:
      - traefik.enable=false
```

## Articles 

- [Ultimate Docker Home Server with Traefik 2, LetsEncrypt, and OAuth (2020)](https://www.smarthomebeginner.com/traefik-2-docker-tutorial/)

