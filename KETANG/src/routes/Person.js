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
                <Route path='/person' exact component={Tip}/>
             <Route path='/person/login' component={Login}/>
                <Route path='/person/register' component={Register}/>
                <Route path='/person/info' component={Info}/>

                {/*<Redirect from='/person' to='/person/tip'/>*/}
            </Switch>
        </section>
    }
}

export default connect()(Person);