import React from 'react';
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './assets/Main.css'
import { Route, HashRouter, Redirect } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'

import Warehouse from './containers/Warehouse';
import * as serviceWorker from './serviceWorker';


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Getting JSON data and putting it into local storage
if (!localStorage.getItem('warehouseData'))
    localStorage.setItem('warehouseData', JSON.stringify(require('./assets/data.json')));

render(
    <Provider store={store}>
        <HashRouter>
            <Route exact path='/' render={() => (
                <Redirect to='/products' />
            )} />
            <Route exact path='/products' component={Warehouse} />
        </HashRouter>
    </Provider >,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept();
}
