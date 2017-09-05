import React, {
    Component
} from 'react';

import Log from './react_compponents/log/log.js';
import DynamicHead from './react_compponents/dynamic_head/dynamic_head.jsx';
import SmartMenu from './react_compponents/semantic_smart_menu/semantic_smart_menu.jsx';
import Banner from './react_compponents/semantic_banner/semantic_banner.jsx';
import Announcements from './react_compponents/semantic_announcements/semantic_announcements.jsx';
import Footer from './react_compponents/semantic_footer/semantic_footer.jsx';

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

            <DynamicHead configUrl="/data/dynamic_head_data_index.json" />

              <SmartMenu />

              <Banner />

              <Announcements />

              <Footer />

          </div>
        );
    }
}

export default App;
