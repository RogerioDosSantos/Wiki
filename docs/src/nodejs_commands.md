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

### NodeJS - Create Express Rest API from scratch

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

