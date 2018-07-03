import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter,Switch,Route,Redirect} from "react-router-dom";
import Home from "./routes/Home";

import "./static/css/reset.min.css";


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    </HashRouter>
,root);
