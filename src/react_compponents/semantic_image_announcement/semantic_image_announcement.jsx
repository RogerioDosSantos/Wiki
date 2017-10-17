
import React, {
    Component
} from 'react';

import 'semantic-ui-css/semantic.min.css';
import {
    Container,
    Image,
		Dimmer,
		Segment,
    Header,
} from 'semantic-ui-react';

// import Log from '../log/log.js';

import defaultConfig from './config.json'

class ImageAnnouncement extends Component {

    constructor() {
        super();
        this.state = {};
    };

    handleShow = () => this.setState({
        active: true
    });

    handleHide = () => this.setState({
        active: false
    });

    handleOpenUrl = (evt, url) => {
        evt.preventDefault();
        window.location = url;
    }

		truncate = (str, n, useWordBoundary ) => {
				if (str.length <= n) { return str; }
				var subString = str.substr(0, n-1);
				return (useWordBoundary 
					? subString.substr(0, subString.lastIndexOf(' ')) 
					: subString) + "...";
		}

		render() {

      let config = Object.assign(defaultConfig, this.props.config);

			return (
						<Container textAlign='center'>
								<Dimmer.Dimmable as={Segment} dimmed={this.state.active}>
										<Dimmer active={this.state.active} onMouseOut={this.handleHide} onClick={(evt)=> this.handleOpenUrl(evt, config.url)}>
												<Header as='h2' icon inverted>
														{this.truncate(config.description, 150, true)}
												</Header>
										</Dimmer>
										<Image centered size='medium' src={config.imageUrl} onMouseOver={this.handleShow} />
										<Header as='h3'>{this.truncate(config.title, 30, false)}</Header>
								</Dimmer.Dimmable>
						</Container>
				);
			}
}

export default ImageAnnouncement;
