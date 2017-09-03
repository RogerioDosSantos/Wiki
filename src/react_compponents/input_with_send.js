import React, {Component} from 'react';
// import ReactDOM from "react-dom";
import {TextInput} from 'react-desktop/windows';
import {Button} from 'react-desktop/windows';
import {Text} from 'react-desktop/windows';

class InputWithSend extends Component
{
    constructor()
    {
        super();
        this.state = {data: [], name: ""};
        this.onClick = this.onClick.bind(this);
        this.logLevel = 0;
        this.url = "https://randomuser.me/api/";
    };

    log(message, logType, logLevel)
    {
        if (logLevel <= this.logLevel)
            console.log(message);
    }

    callServer(url)
    {
        return fetch(url).then((promisse) => {
            return promisse.json();
        });
    }

    onClick(e)
    {
        e.stopPropagation();
        this.callServer(this.url).then((response) => {
            this.log(response, 'info', 5);
            this.setState({data: response, name: response.results["0"].name.first});
        });
    };

    render()
    {
      return (
            <div className="ReactDesktop-InputWithSend">

              <TextInput className="ReactDesktop-TextInput" label="Title"/>

              <Button onClick={this.onClick}>
                Request
              </Button>

              <Text>
                Response: 
              </Text>

              User:
              <div><pre>{this.state.name}</pre></div>

              Json:
              <div><pre>{JSON.stringify(this.state.data, null, 2) }</pre></div>

            </div>
        );
    }
}

export default InputWithSend;
