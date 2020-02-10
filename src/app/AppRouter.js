import React from 'react'
import { render } from 'react-dom';
import EditWork from './EditWork'

import { HashRouter as Router, Route } from 'react-router-dom'

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={EditWork} />
                    </div>
                </Router>
            </div>

        );

    }
}

export default AppRouter;