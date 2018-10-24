import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SellerDashBoard from './SellerDashBoard'
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import { Provider } from 'react-redux';
import combinereducers from './reducers';
import { createStore } from 'redux';

const store = createStore(combinereducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Switch>
                <Route exact path = "/" component={App}/>
                <Route exact path = "/sellerdashboard" component={SellerDashBoard}/>
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
