import React from 'react';
import ReactDOM from 'react-dom';

/*路由*/
import {HashRouter,Switch,Route,Redirect} from "react-router-dom";
import Home from "./routes/Home";


/*导入公共样式*/
import "./static/css/reset.min.css";


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    </HashRouter>
,root);

