import React, {
    Component
} from 'react';

import Log from './react_compponents/log/log.js';
import SmartMenu from './react_compponents/semantic_smart_menu/semantic_smart_menu.jsx';
import Banner from './react_compponents/semantic_banner/semantic_banner.jsx';
import Footer from './react_compponents/semantic_footer/semantic_footer.jsx';
import Divider from './react_compponents/semantic_divider/semantic_divider.jsx'
import ImageAnnouncements from './react_compponents/semantic_image_announcements/semantic_image_announcements.jsx'

// import 'semantic-ui-css/semantic.min.css';
//
// import {
//     Container,
// 		Card,
//     Image,
// 		Dimmer,
// 		Segment,
//     Header,
//     Grid
// } from 'semantic-ui-react';


class App extends Component {

    constructor() {
        super();
        Log.logLevel = 5;
        Log.log('Log Level: ' + Log.logLevel, 'info', 1);
        this.state = {};
    };

    render() {
        return (
						<div>
								<SmartMenu />
								<Banner />
								<Divider title='Recent Posts' />
								<ImageAnnouncements />
								<Divider />
								<Footer />
						</div>
        );
    }
}

export default App;
