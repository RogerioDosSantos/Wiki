
import React, {
    Component
} from 'react';

import 'semantic-ui-css/semantic.min.css';
import {
    Container,
		Card,
    Image,
		Dimmer,
		Segment,
    Header,
} from 'semantic-ui-react';

import Log from '../log/log.js';

import configData from './config.json'

class ImageAnnouncements extends Component {


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

	ImageAnnouncement = (props) => {
			return (
				<Container textAlign='center'>
						<Dimmer.Dimmable as={Segment} dimmed={this.state.active}>
								<Dimmer active={this.state.active} onClickOutside={this.handleHide}>
										<Header as='h2' icon inverted>
												### Description ###
										</Header>
								</Dimmer>
								<Image centered size='medium' src='http://rogeriodossantos.github.io/MainPage/resources/page/Post/post_scada.jpg'
										onClick={this.handleShow} />
								<Header as='h3'>### Title ###</Header>
						</Dimmer.Dimmable>
				</Container>
				);
			}

    CreateCard = (props) => {
			return (
          <Card centered>
              <Card.Content>
                  <this.ImageAnnouncement />
              </Card.Content>
          </Card>
				);
    }

		render() {
      
        Log.log('ImageAnnouncements - : ' + JSON.stringify(configData), 'info', 5);
        var  cards = [];
        for (var index = 0; index < configData.cards.length; index++)
        {
          cards.push(<this.CreateCard key={index} />); 
        }

			return (
            <Card.Group>
              {cards}
            </Card.Group>
				);
			}
}

export default ImageAnnouncements;
