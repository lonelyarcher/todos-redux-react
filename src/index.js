import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';

const store = createStore(todoApp);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/:filter" component={App} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>,
     document.getElementById('root')
);

