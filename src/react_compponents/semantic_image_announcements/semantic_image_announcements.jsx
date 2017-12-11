
import React, {
    Component
} from 'react';

import 'semantic-ui-css/semantic.min.css';
import {
		Card
} from 'semantic-ui-react';

// import Log from '../log/log.js';
import ImageAnnouncement from '../semantic_image_announcement/semantic_image_announcement.jsx'

import configData from './config.json'

class ImageAnnouncements extends Component {

    // constructor() {
    //     super();
    //     this.state = {};
    // };

    CreateCard = (props) => {
			return (
          <Card centered>
              <Card.Content>
                  <ImageAnnouncement config={props.config}/>
              </Card.Content>
          </Card>
				);
    }

		render() {
      
        var  cards = [];
        for (var index = 0; index < configData.cards.length; index++)
        {
          let config = configData.cards[index];
          cards.push(<this.CreateCard key={index} config={config}/>); 
        }

			return (
            <Card.Group>
              {cards}
            </Card.Group>
				);
			}
}

export default ImageAnnouncements;
