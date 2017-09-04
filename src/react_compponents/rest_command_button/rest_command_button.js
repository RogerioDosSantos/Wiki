import React, {
    Component
} from 'react';

import {
    Button,
} from 'react-desktop/windows';

import Log from '../log/log.js';

class RestCommandButton extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.url = "https://randomuser.me/api/";
    };

    // this.props.url = this.url;

    callServer(url) {
        if (url == null) 
            url = "https://randomuser.me/api/";
        
        return fetch(url).then((promisse) => {
            return promisse.json();
        });
    }

    onClick = (e, url) => {
        e.stopPropagation();
        this.callServer(url).then((response) => {
            Log.log(response, 'info', 5);
            this.props.onServerAnswer(response);
        });
    };

    render() {
        return (
            <div className="ReactDesktop-InputWithSend">

              <Button 
                 onClick={(e) => this.onClick(e, this.props.url)}
              > 
                {this.props.buttonCaption} 
              </Button>

            </div>
        );
    }
}

export default RestCommandButton;
