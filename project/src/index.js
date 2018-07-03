import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/index";
import Home from "./routes/Home";

/*导入公共样式*/
import "./static/css/reset.min.css";


ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    </HashRouter>
</Provider>, document.getElementById('root'));

