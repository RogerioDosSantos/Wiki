import React, {
    Component
} from 'react';

import DynamicHead from './react_compponents/dynamic_head/dynamic_head.jsx';
import SmartMenu from './react_compponents/semantic_smart_menu/semantic_smart_menu.jsx';
import Banner from './react_compponents/semantic_banner/semantic_banner.jsx';
import Announcements from './react_compponents/semantic_announcements/semantic_announcements.jsx';
import Footer from './react_compponents/semantic_footer/semantic_footer.jsx';

class App extends Component {

    constructor() {
        super();
        this.state = {
            headData: {
                title: "Roger's Wiki",
                description: 'Roger Wiki page with several notes about Programming in C++, JavaScript and OS information as Windows, Linux, Windows CE, etc.',
                canonical: 'http://rogeriodossantos.github.io/Wiki',
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'wiki,windows,linux,c++,reactjs'
                    }
                }
            }
        };
    };

    render() {
        return (
          <div>

              <DynamicHead />

              <SmartMenu />

              <Banner />

              <Announcements />

              <Footer />

          </div>
        );
    }
}

export default App;
