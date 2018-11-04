# Fn

[Fn](https://github.com/fnproject/fn) is an event-driven, open source, Functions-as-a-Service (FaaS) compute platform that you can run anywhere. Some of its key features:

- Open Source
- Native Docker: use any Docker container as your Function
- Supports all languages
- Run anywhere
- Public, private and hybrid cloud
- Import Lambda functions and run them anywhere
- Easy to use for developers
- Easy to manage for operators
- Written in Go
- Simple yet powerful extensibility

## Commands

`fn init --runtime node`: Init the current foln with a template function using NodeJS.

`fn deploy --local --app <application_name> <function_dir>`: Deploy a function locally. E.g: `fn deploy --local --app stock .`

`fn deploy --local --all`: Deploy all functions of all subfolders. This command should be called from the folder where the *app.ymal* is located. 

`fn invoke <application_name> <function_name>`: Call a function. E.g.: `fn invoke stock get_data`

`fn list t <application_name>`: List the triggers available in one application. E.g.: `fn list t stock`

`curl -H "Content-Type: application/json" -d '{"<property_name>":"property_value"}' <url>`: Invoke a function using *curl*. E.g.: `curl -H "Content-Type: application/json" -d '{"dataType":"Bob"}'  http://localhost:8080/t/stock/get_data`
