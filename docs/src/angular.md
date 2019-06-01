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

# Execute Development server
cd <project_name>
ng serve
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

## References

[Angular CLI](https://angular.io/cli)
