import React, {
    Component
} from 'react';

import 'semantic-ui-css/semantic.min.css';

import {
    Divider,
} from 'semantic-ui-react';

class SemanticDivider extends Component {

    constructor() {
        super();
        this.state = {};
    };

    render() {
        let title = this.props.title;
        if (!title)
            title = 'x';

        return (
            <div>
                        <Divider as='h4' className='header' horizontal style={{ margin: '3em 0em', textTransform:
                            'uppercase' }}>
                            <a href='#'>{ title }</a>
                        </Divider>
                    </div>
        )
    };

}

export default SemanticDivider;
