import React from 'react';
import './person/person.less';
import {connect} from 'react-redux';
import Tip from './person/Tip';
import Register from './person/Register';
import Info from './person/Info';
import Login from './person/Login';
import {Switch,Route,Redirect} from 'react-router-dom';
class Person extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return <section>
            <Switch>
                <Route path='/person' component={Tip}/>
                {/*<Route path='/person/info' component={Info}/>*/}
                {/*<Route path='/person/login' component={Login}/>
                <Route path='/person/register' component={Register}/>*/}
                {/*<Redirect from='/person' to='/person/tip'/>*/}
            </Switch>
        </section>
    }
}

export default connect()(Person);