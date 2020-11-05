import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import App from './Views/App';
import About from './Views/Pages/About'
import Shows from './Views/Pages/Shows'
import NotFound from './Views/Pages/NotFound'

const routing = (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/about' component={About} />
            <Route exact path='/shows' component={Shows} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
