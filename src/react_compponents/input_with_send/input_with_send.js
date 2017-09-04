import React, {
    Component
} from 'react';

import {
    TextInput,
    Text
} from 'react-desktop/windows';

import RestCommandButton from '../rest_command_button/rest_command_button.js'

class InputWithSend extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            name: ""
        };
    };

    render() {
        return (
            <div className="ReactDesktop-InputWithSend">

              <TextInput className="ReactDesktop-TextInput" label={this.props.title}/>

              <RestCommandButton 
                buttonCaption={this.props.buttonCaption}
                url='https://randomuser.me/api/?page=3&results=10&seed=abc'
                onServerAnswer={(response) => this.setState({
                  data: response, 
                  name: response.results["0"].name.first
                })}
              />

              <Text> Response: </Text>

              User:
              <div><pre>{this.state.name}</pre></div>

              Json:
              <div><pre>{JSON.stringify(this.state.data, null, 2) }</pre></div>

            </div>
        );
    }
}

export default InputWithSend;
