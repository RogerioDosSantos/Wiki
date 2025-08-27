# NodeJS 

## Terminal commands

`npm init` : Initialize an **npm** project configuration. The configuration is stored into a `package.json` file.

`npm install <module_name> --save`: Install module and add to the `package.json` file

`npm install <module_name> -g`: Install module globally

`npm install` : Install all dependencies mentioned on the `package.json` file.

`node <source.js>` : Run a NodeJS application

## Modules

**express** : MVC Framework
**nodemon** : Allow refresh  the server every time  we do a change.

## Installation

### NPM - Install NPM (Powershell)

From an elevated *Powershell* session run

```ps
choco install nodejs
```

### NodeJS - Upgrade to the latest version

Use n module from npm in order to upgrade node

```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

To upgrade to latest version (and not current stable) version, you can use

```bash
sudo n latest
```

To undo:

```bash
sudo apt-get install --reinstall nodejs-legacy     # fix /usr/bin/node
sudo n rm 6.0.0     # replace number with version of Node that was installed
sudo npm uninstall -g n
```

## NodeJS - Create Express Rest API from scratch

```bash
# Initialize package manager
npn init

### Enter project information ###

# Install Express 
npm install --save express

### Create server.js and app.js ###

# Start the Server
node ./src/server.js

### Browse http://localhost:3000 ###
```

#### server.js

```js
// Server

const http = require('http');
const app = require('./app');

const port = process.env.port || 3000;
const server = http.createServer(app);
server.listen(port);
```

#### app.js

```js
// Application

const express = require('express');

const app = express();
app.use((req, resp, next) => {
  resp.status(200).json({
    message: 'It works!'
  });
});

module.exports = app;
```

**Note**

You can use [Postman](https://www.getpostman.com/) to send other commands (E.g.: Post) to the *API*

## NodeJS - Create WebAPI with swagger 

### Install the swagger module 

```sh
npm install -g swagger
```

### Create a new swagger project 

```sh
swagger project create <project_name>
```

Select the Framework (E.g.: express)

### Design your API in the Swagger Editor 

You can call an interactive built-in, browser-based [Swagger Editor](https://editor.swagger.io/) running the command:

```sh
swagger project edit
```

![](./resources/nodejs/swagger_builtin_editor.png)


### Write controller code in Node.js

The controller will be located into the `./api/controllers` folder. 

### Run the project server 

```sh
swagger project start
```

Now you can call the API commands

```sh
curl http://127.0.0.1:10010/hello?name=Scott
```

### Change the code to expose a swagger documentation entrypoint 

On the `app.js`, add the following code after the middleware creation:

```js
//Expose the documentation
app.use(swaggerExpress.runner.swaggerTools.swaggerUi());
```

This will enable a `docs` entrypoint: 

![](./resources/nodejs/swagger_docs_entrypoint_code.png)

![](./resources/nodejs/swagger_docs_entrypoint.png)

## How-To 

### NPM - List the Global Configuration

```sh
npm config ls -l | grep userconfig
```

## References 

- [Swagger API for NodeJS (swagger-node)](https://github.com/swagger-api/swagger-node)

