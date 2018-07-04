/*BASE*/
import React from 'react';
import ReactDOM, {render} from 'react-dom';
/*路由*/
import {HashRouter,Switch,Route,Redirect} from "react-router-dom";
/*ANTD*/
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

/*REDUX STORE*/
import {Provider} from 'react-redux';
import store from './store/index';
/*IMPORT CSS*/
import './static/css/reset.min.css';
import './static/css/common.less';

import Home from "./routes/Home";
import Person from "./routes/Person";
import NavBottom from "./component/NavBottom";
import Tip from './routes/person/Tip'


ReactDOM.render(
       <Provider store={store}>
           <HashRouter>
               <LocaleProvider locale={zh_CN}>
                   <div>
                       {/*MAIN=>ROUTE*/}
                       <main className='container'>
                           <Switch>
                               <Route path="/home" component={Home}/>
                               <Route path="/person" component={Person}/>
                           </Switch>
                       </main>

                       {/*FOOTER*/}
                       <NavBottom/>
                   </div>
               </LocaleProvider>
           </HashRouter>
       </Provider>
, root);
