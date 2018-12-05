import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Two from './Two';
import One from './One';
import Three from './Three';
import Four from './Four';
import * as serviceWorker from './serviceWorker';
import {Router, Route, browserHistory } from 'react-router';
import NoMatch from './NoMatch';
import FourPointOne from './FourPointOne';

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/One" component={One}></Route>
    <Route path="/Two" component={Two}></Route>
    <Route path="/Three" component={Three}></Route>
    <Route path="/Four" component={Four}>
    <Route path="/Four/:id" component={FourPointOne}></Route> 
    </Route>
    <Route path="*" component={NoMatch}></Route>

    </Router>
    
    
     
    
    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
