import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import List from './list/List';
import '../static/css/home.less';

export default class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {

        return <section className="homeBox">
            <Switch>
                <Route path="/home/list" exact component={List}/>
            </Switch>
        </section>;
    }
}
