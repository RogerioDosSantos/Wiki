import React, {
    Component
} from 'react';

import 'semantic-ui-css/semantic.min.css';

import {
    Button,
    Header,
} from 'semantic-ui-react';

class Announcement extends Component {

    constructor() {
        super();
        this.state = {};
    };

    
    render() {
        let title = this.props.title;
        if(!title)
          title = 'title';

        let description = this.props.description;
        if(!description) 
          description = 'description';

        let buttonLabel = this.props.buttonLabel;
        if(!buttonLabel)
          buttonLabel = 'buttonLabel';

        return (
            <div>
                 <Header as='h3' style={{ fontSize: '2em' }}>{ title }</Header>
                <p style={{ fontSize: '1.33em' }}>
                    { description }
                </p>
                <Button as='a' size='large'>{ buttonLabel }</Button>
           </div>
					)};
}

export default Announcement;
