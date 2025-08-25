# Serverless Framework

**Important Note**

Unfortunately, the community is not engaged to the "Fn" project to the point the tutorial does not work. 

[Serverless Framework](https://serverless.com/framework/) is an open-source CLI for building and deploying serverless applications.

The *Serverless Framework* allow to control several *Serverless providers*, E.g.: *Fn*, *OpenWhisk*, *Azure*, *Lambda (Amazon)*, etc. For this reazon, stead of learning all those provides, you can invest in the *Serverless Framework* and control them all.

## Installation

```shell
sudo npm install -g serverless
serverless --version
```

### Update

```shell
sudo npm i -g serverless 
```

## Providers

- [Fn](https://serverless.com/framework/docs/providers/fn/)
- [OpenWhisk](https://serverless.com/framework/docs/providers/openwhisk/)

## Commands

`serverless create --template fn-nodejs --path <function_name>`: Create a folder with boiler-plate to the function using Fn and NodeJS

## How-To

### Start Fn Server

```shell
# Run a registry server in the local machine
docker run -d -p 5000:5000 --restart=always --name registry registry:2

docker run --name fnserver --rm -d -i -v $(pwd)/data:/app/data -v /var/run/docker.sock:/var/run/docker.sock --privileged -p 8080:8080 --entrypoint ./fnserver fnproject/fnserver

# Needed due: https://github.com/serverless/serverless/issues/4979
export FN_REGISTRY=localhost:5000
```

### Create a new Service

The example below create the service based in *Node-JS* in the *src* folder.

```shell
# Create a new Serverless Service/Project
serverless create --template fn-nodejs --path src

# Change into the newly created directory
cd src

# Install npm dependencies
npm install
```


