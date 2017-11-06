import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configurStore from './configurStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const store = configurStore();
ReactDOM.render(
    <Provider store={store}>
        <Router>
            
                    <Route path="/:filter?" component={App} />

        </Router>
    </Provider>,
     document.getElementById('root')
);

