# Angular JS

## Development Setup

### Requirements 

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/get-npm)

```sh
# Install the angular cli tool 
npm install -g @angular/cli@latest

# Check if the angular cli tool is properly installed
ng v
```

![](http://tinyurl.com/y49a8heb)

## Bootstrap a new project 

```sh
# Create new project 
ng new <project_name>

# Execute Development server (--host 0.0.0.0 allow access from docker)
cd <project_name>
ng serve --host 0.0.0.0
```

## Create a new component

From the project folder:

```sh
# Create new component with inline template and inline style
ng g c server-detail -it -is
```

## File Structure

- ./src/index.html : Initial HTML page of the project
- ./src/main.ts: Main script of the project. It is the entrypoint of the application. By default it will call the app module
- ./src/polyfills.ts: If the Browser does not support a specific functionality, the polyfills will be used to cover the functionality. You do not need to change it.
- ./src/style.css: Global style sheet

## Decorators

Decorators add/replace behaviors of a function or class.

### Function Decorator

```ts 
//Decorator Function Declaration
function dec(target, name, descriptor){
  // Store the original function in the variable
  const original = descriptor.value
  // Do some manipulation with the descript.value
  descriptor.value = function(...args){
    console.log('Arguments passed to the function: ', args)
    ret = original.apply(this, args)
    const.log('The return is: ', ret)
    return ret
  }
  // Return the original function
  return original
}

// Decorator Usage
@dec 
function sum(a,b){
  return a+b
}

console.log('The return from the call is:', sum(1,2))
```

### Class Decorator

```ts
//Decorator Function Declaration 
function dec(className){
  return (...args) => {
    contributors.log('Arguments passed to the class: ', args)
    return new className(args)
  }
}

// Decorator Usage
@dec 
class cls{
  constructor(a,b){
    console.log('Constructor Executed!')
  }
}

const testCls = new cls(1,2)
```

### Lifecycle Hooks 

Lifecycle Hooks are callbacks function available in the angular framework:

- OnChanges: Called everytime a change in a component happens
- OnInit: Called everytime a component is initialized. It is called only once
- DoCheck: Called before a change happens, in this way you can implement validation logic
- AfterContentInit: Called when content is initialized
- AfterContentChecked: Called before a change in a content happens
- AfterViewInit: Called after the View is initial.
- AfterViewChecked: Called after a View is check
- OnDestroy: Called when a component is destroyed.

## Components

TODO(Roger) - https://www.youtube.com/watch?v=2OHbjep_WjQ


## Examples

- [Use environment variables when deploying a docker image](https://github.com/RogerioDosSantos/example_angular_environment_variables#environment-variable-in-angularjs-and-docker)

## References

[Angular CLI](https://angular.io/cli)
