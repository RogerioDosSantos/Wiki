import React, {
    Component
} from 'react';

import DocumentMeta from 'react-document-meta';

import Log from '../log/log.js'

import configData from './config.json'

class DynamicHead extends Component {

    constructor() {
        super();

        this.setConfig = this.setConfig.bind(this);

        this.state = {
            configUrl: null,
            configData: configData
        };
    };

    callServer(url) {
        return fetch(url).then((promisse) => {
            return promisse.json();
        });
    }

    setConfig(url) {
        if (this.state.configUrl === this.props.configUrl)
            return;

        Log.log('DynamicHead - setConfig - Requested Url: ' + url, 'info', 5);
        this.callServer(url)
            .then((response) => {
                this.setState({
                    configUrl: url,
                    configData: response
                });

                Log.log('DynamicHead - setConfig: Config:' + JSON.stringify(this.state.configData), 'info', 5);
            })
            .catch((error) => {
                this.setState({
                    configUrl: url
                });

                Log.log('DynamicHead - setConfig - Fail to get configuration. Url: ' + url + ' ; Error: ' + error, 'error', 1);
            });
    }

    render() {
        this.setConfig(this.props.configUrl);

        return (
            <div>
								<DocumentMeta {...this.state.configData} />
						</div>
        )
    };
}

export default DynamicHead;
