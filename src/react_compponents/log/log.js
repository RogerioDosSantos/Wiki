import React, {
    Component
} from 'react';

class Log extends Component {
    // constructor()
    // {
    //     super();
    //     this.logLevel = 5;
    // };

    static logLevel = 5;

    static log(message, logType, logLevel) {
        if (logLevel <= Log.logLevel)
            console.log(message);
    }

    render() {
        return (
            <div className="ReactComponents_Log">
            </div>
        );
    }
}

export default Log;
