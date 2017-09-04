import React, {
    Component
} from 'react';

import DocumentMeta from 'react-document-meta';

class App extends Component {
    render() {

        const meta = {
            title: "Roger's Wiki",
            description: 'Roger Wiki page with several notes about Programming in C++, JavaScript and OS information as Windows, Linux, Windows CE, etc.',
            canonical: 'http://rogeriodossantos.github.io/Wiki',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'wiki,windows,linux,c++,reactjs'
                }
            }
        };

        return (
            <div>
              <DocumentMeta {...meta} />
            </div>
        );
    }
}

export default App;
