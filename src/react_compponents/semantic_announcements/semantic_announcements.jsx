import React, {
    Component
} from 'react';

import 'semantic-ui-css/semantic.min.css';
import {
    Container,
    Segment,
} from 'semantic-ui-react';

import SemanticDivider from '../semantic_divider/semantic_divider.jsx';
import Announcement from '../semantic_announcement/semantic_announcement.jsx';

class Announcements extends Component {

    constructor() {
        super();
        this.state = {};
    };

    render() {
        return (

          <div>

            <Segment style={{ padding: '8em 0em' }} vertical>

              <Container text>

                <Announcement />

                <SemanticDivider title='Case Studies'/>

                <Announcement />

                <SemanticDivider title=''/>

              </Container>

            </Segment>


          </div>




        )
    };
}

export default Announcements;
