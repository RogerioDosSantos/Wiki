# Heroku

[Heroku](https://heroku.com) is a cloud platform as a service supporting several programming languages.

They ofer you to host your service for free if they use *1 kudo*, which is a unit of processing.

They also allow you to run *Docker Containers* making it an ideal platform to hoest your free projects.

## How-to

### Run Container on Heroku

- Download and install the [Heroku cli](https://devcenter.heroku.com/articles/heroku-cli)
- Change your application to listen to the port number informed by the environment variable `$PORT`. When *Heroku launches your container, it will inform in the `$PORT` what *tcp-port* is expected for your application to respond to.
- Execute the deployment using the *Heroku cli*:

```shell
# Login the Heroku cli to Heroku
heroku login

# Login Heroku cli to the docker repository
heroku container:login

# Push your application (Note: This can be slow)
heroku container:push --app <heroku_app> --context-path . web

# Release image pushed
heroku container:release --app <heroku_app> web
```
