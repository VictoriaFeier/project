import React from 'react';
import ReactDOM from 'react-dom';

/*路由*/
import {HashRouter,Switch,Route,Redirect} from "react-router-dom";
import Home from "./routes/Home";
import Person from './routes/Person';

/*导入公共样式*/
import "./static/css/reset.min.css";
import "./static/css/common.less";


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" component={Home}/>
            <Route path="/personal" component={Person}/>
        </Switch>
    </HashRouter>
,root);

