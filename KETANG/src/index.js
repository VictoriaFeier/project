/*BASE*/
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from "react-redux";
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import store from "./store";

/*ANTD*/
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

/*IMPORT CSS*/
import './static/css/reset.min.css';
import './static/css/common.less';

/*页面级组件*/
import Home from "./routes/Home";
import Person from "./routes/Person";
import Order from "./routes/Order";
import Detail from "./routes/Detail";

/*自己测试组件*/
import DetailInfo from "./routes/detail/DetailInfo";
/*基础组件*/
import NavBottom from "./component/NavBottom";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <LocaleProvider locale={zh_CN}>
                <div>
                    {/*MAIN=>ROUTE*/}
                    <main className='container'>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/order" component={Order}/>
                            <Route path="/person" component={Person}/>
                            <Route path="/seller/detail" component={DetailInfo}/>
                            <Route path="/seller/:sellerID" component={Detail}/>
                            {/*<Route path="/seller/:sellerId" component={Person}/>*/}
                            <Redirect to='/?lx=404'/>
                        </Switch>
                    </main>
                    {/*FOOTER*/}
                    {/*<NavBottom/>*/}
                </div>
            </LocaleProvider>
        </HashRouter>
    </Provider>
, root);
