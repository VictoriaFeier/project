import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';

import
import '../static/css/course.less';

export default class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <section className='homeBox'>
            <Switch>
                <Route path='/home' exact component={List}/>
                <Route path='/home/info' component={Info}/>
            </Switch>
        </section>;
    }
}