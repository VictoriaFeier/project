/*BASE*/
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';


/*ANTD*/
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

/*IMPORT CSS*/
import './static/css/reset.min.css';
import './static/css/common.less';

import Home from "./routes/Home";
import Person from "./routes/Person";
import Order from "./routes/Order";
import NavBottom from "./component/NavBottom";

/*测试所需组件导入*/
import Detail from "./routes/list/Detail"
ReactDOM.render(
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                {/*MAIN=>ROUTE*/}
                <main className='container'>
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/order" component={Order}/>
                        <Route path="/person" component={Person}/>
                        <Route path="/detail" component={Detail}/>
                        {/*<Redirect to="/home"/>*/}
                    </Switch>
                </main>
                {/*FOOTER*/}
                <NavBottom/>
            </div>
        </LocaleProvider>
    </HashRouter>
, root);
